/**
 * Knowledge Bank Local Category Search & WCAG Suggestions Engine
 */
(function(window) {
    'use strict';

    // Remove mark elements previously added for keyword highlight matches
    const removeHighlights = function(root) {
        if (!root) return;
        root.querySelectorAll('mark.highlight').forEach(mark => {
            const textNode = document.createTextNode(mark.textContent);
            if (mark.parentNode) {
                mark.parentNode.replaceChild(textNode, mark);
            }
        });
    };

    // Highlight text occurrences within child text nodes of an element
    const highlightText = function(root, query) {
        removeHighlights(root);
        if (!query) return;

        const walk = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
        const textNodes = [];
        let node;
        while (node = walk.nextNode()) {
            const parent = node.parentNode;
            if (parent && !['SCRIPT', 'STYLE', 'INPUT', 'SELECT', 'BUTTON', 'A', 'TEXTAREA'].includes(parent.tagName)) {
                textNodes.push(node);
            }
        }

        textNodes.forEach(node => {
            const val = node.nodeValue;
            const idx = val.toLowerCase().indexOf(query);
            if (idx !== -1 && node.parentNode) {
                const matchedText = val.substr(idx, query.length);
                const rest = val.split(new RegExp(query, 'i'));
                const span = document.createElement('span');

                for (let i = 0; i < rest.length; i++) {
                    span.appendChild(document.createTextNode(rest[i]));
                    if (i < rest.length - 1) {
                        const mark = document.createElement('mark');
                        mark.className = 'highlight bg-warning-subtle text-warning-emphasis p-0 rounded';
                        mark.textContent = matchedText;
                        span.appendChild(mark);
                    }
                }
                node.parentNode.replaceChild(span, node);
            }
        });
    };

    // Initialize instant list/table search filters on a given input field and suggestions container
    const initLocalSearch = function(searchInput, suggestionsDiv, contentArea) {
        if (!searchInput || !suggestionsDiv || !contentArea) return;

        let activeSuggestionIdx = -1;

        const updateSuggestions = (suggestions, query) => {
            if (suggestions.length === 0 || query === '') {
                suggestionsDiv.classList.add('d-none');
                suggestionsDiv.innerHTML = '';
                activeSuggestionIdx = -1;
                return;
            }

            suggestionsDiv.classList.remove('d-none');
            suggestionsDiv.innerHTML = suggestions.map((s, idx) => `
                <a href="${s.url}" class="list-group-item list-group-item-action py-2 px-3 border-light-subtle suggestion-item" data-index="${idx}">
                    <i class="fa fa-file-text-o me-2 text-primary"></i> ${s.title}
                </a>
            `).join('');

            activeSuggestionIdx = -1;
        };

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const items = contentArea.querySelectorAll('li, tr, .resource-card');
            const suggestions = [];

            items.forEach(item => {
                // Skip structural table elements like thead headers
                if (item.tagName.toLowerCase() === 'tr' && item.closest('thead')) return;

                const text = item.textContent.toLowerCase();
                if (query === '') {
                    item.style.display = '';
                    removeHighlights(item);
                } else if (text.includes(query)) {
                    item.style.display = '';
                    highlightText(item, query);

                    // Add links inside matched items to suggestions dropdown
                    const link = item.querySelector('a');
                    if (link && suggestions.length < 10) {
                        suggestions.push({
                            title: link.textContent.trim(),
                            url: link.getAttribute('href')
                        });
                    }
                } else {
                    item.style.display = 'none';
                }
            });

            updateSuggestions(suggestions, query);
        });

        // Add keyboard-friendly suggestions selection and escape handler
        searchInput.addEventListener('keydown', (e) => {
            const suggestionItems = suggestionsDiv.querySelectorAll('.suggestion-item');
            if (suggestionItems.length === 0) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (activeSuggestionIdx < suggestionItems.length - 1) {
                    if (activeSuggestionIdx !== -1) suggestionItems[activeSuggestionIdx].classList.remove('active');
                    activeSuggestionIdx++;
                    suggestionItems[activeSuggestionIdx].classList.add('active');
                    suggestionItems[activeSuggestionIdx].scrollIntoView({ block: 'nearest' });
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (activeSuggestionIdx > 0) {
                    suggestionItems[activeSuggestionIdx].classList.remove('active');
                    activeSuggestionIdx--;
                    suggestionItems[activeSuggestionIdx].classList.add('active');
                    suggestionItems[activeSuggestionIdx].scrollIntoView({ block: 'nearest' });
                }
            } else if (e.key === 'Enter') {
                if (activeSuggestionIdx !== -1) {
                    e.preventDefault();
                    suggestionItems[activeSuggestionIdx].click();
                }
            } else if (e.key === 'Escape') {
                suggestionsDiv.classList.add('d-none');
            }
        });

        // Close suggestions dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !suggestionsDiv.contains(e.target)) {
                suggestionsDiv.classList.add('d-none');
            }
        });
    };

    window.KBSearch = {
        init: initLocalSearch,
        highlight: highlightText,
        clear: removeHighlights
    };
})(window);
