/**
 * Knowledge Bank Modernization - Shell Transformer & Layout Engine (Links & Acts Only)
 */
(function(window) {
    'use strict';

    // A. Consolidated Resource Index Data (KB_RESOURCES)
    const KB_RESOURCES = [
        // Links
        { title: "Quick Links (Income Tax, MCA, PF, ESI, VAT)", url: "../resources/Links/Quick_Link/Quick_Link.html", cat: "Links" },
        { title: "Important Web Links", url: "../resources/Links/important_links/important_links.html", cat: "Links" },
        { title: "GST/VAT Official Links", url: "../resources/Links/Vat_Links/Vat_Links.html", cat: "Links" },
        { title: "Ease of Doing Business Portals", url: "../resources/Links/EASE_OF_DOING_BUSINESS/EASE_OF_DOING_BUSINESS.html", cat: "Links" },

        // Acts
        { title: "Income Tax Act, 1961", url: "../laws/-26/Income_Tax_Act.html", cat: "Acts" },
        { title: "Wealth Tax Act", url: "../laws/-75/Wealth_Tax_Act.html", cat: "Acts" },
        { title: "Income Declaration Scheme 2016", url: "../laws/-157/Income_Declaration_Scheme_2016.html", cat: "Acts" },
        { title: "Income Tax Act 2025", url: "../laws/-260/Income_tax_2025.html", cat: "Acts" },
        { title: "Service Tax Act (Finance Act, 1994)", url: "../laws/-30/Service_Tax_Act.html", cat: "Acts" },
        { title: "Central Sales Tax Act, 1956", url: "../laws/-36/Central_Sales_Tax_Act,_1956.html", cat: "Acts" },
        { title: "The Central Excise Act, 1944", url: "../laws/-40/The_Central_Excise_Act,_1944.html", cat: "Acts" },
        { title: "Customs Act, 1962", url: "../laws/-53/Customs_Act,_1962.html", cat: "Acts" },
        { title: "Entry Tax Act", url: "../laws/-102/Entry_Tax_Act.html", cat: "Acts" },
        { title: "Companies Act, 2013", url: "../laws/-103/Companies_Act_2013.html", cat: "Acts" },
        { title: "Companies Act, 1956", url: "../laws/-42/Companies_Act,_1956.html", cat: "Acts" },
        { title: "The Limited Liability Partnership Act, 2008", url: "../laws/-48/The_Limited_Liability_Partnership_ACT,_2008.html", cat: "Acts" },
        { title: "The Securities and Exchange Board of India Act, 1992", url: "../laws/-59/The_Securities_and_Exchange_Board_of_India_Act,_1992.html", cat: "Acts" },
        { title: "Delhi Value Added Tax Act, 2004", url: "../laws/-32/Delhi_Value_Added_Tax_Act,_2004.html", cat: "Acts" },
        { title: "Maharashtra Value Added Tax Act, 2002", url: "../laws/-39/Maharashtra_Value_Added_Tax_Act_(2002).html", cat: "Acts" },
        { title: "West Bengal Value Added Tax Act, 2003", url: "../laws/-49/West_Bengal_Value_Added_Tax_Act,_2003.html", cat: "Acts" },
        { title: "Tamilnadu VAT Act, 2006", url: "../laws/-152/Tamilnadu_VAT_ACT_2006.html", cat: "Acts" },
        { title: "Karnataka Value Added Tax Act, 2003", url: "../laws/-89/Karnataka_Value_Added_Tax_Act,_2003.html", cat: "Acts" },
        { title: "Gujarat Value Added Tax Act, 2003", url: "../laws/-150/Gujarat_Value_Added_Tax_Act_2003.html", cat: "Acts" },
        { title: "The Uttar Pradesh Value Added Tax Act, 2008", url: "../laws/-46/The_Uttar_Pradesh_Value_Added_Tax_Act_2008.html", cat: "Acts" },
        { title: "Rajasthan Value Added Tax Act, 2003", url: "../laws/-94/Rajasthan_Value_Added_Tax_Act,_2003.html", cat: "Acts" },
        { title: "Punjab Value Added Tax Act", url: "../laws/-65/Punjab_Value_Added_Tax_Act.html", cat: "Acts" },
        { title: "Haryana Value Added Tax Act", url: "../laws/-68/Haryana_Value_Added_Tax_Act.html", cat: "Acts" },
        { title: "Telangana VAT Act, 2005", url: "../laws/-148/Telangana_VAT_Act_2005.html", cat: "Acts" },
        { title: "Andhra Pradesh VAT Act, 2005", url: "../laws/-81/Andhra_Pradesh_Value_Added_Tax_Act,_2005.html", cat: "Acts" },
        { title: "Bihar Value Added Tax Act, 2005", url: "../laws/-91/Bihar_Value_Added_Tax_Act,_2005.html", cat: "Acts" },
        { title: "The Employees' State Insurance Act, 1948", url: "../laws/-57/The_Employees_State_Insurance_Act,_1948.html", cat: "Acts" },
        { title: "The Employees' Provident Funds Act, 1952", url: "../laws/-58/The_Employees_Provident_Funds_and_Miscellaneous_Provisions_Act,_1952.html", cat: "Acts" },
        { title: "Profession Tax Act", url: "../laws/-98/Profession_Tax_Act.html", cat: "Acts" },
        { title: "The Indian Partnership Act, 1932", url: "../laws/-114/The_Indian_Partnership_Act_1932.html", cat: "Acts" },
        { title: "Societies Registration Act, 1860", url: "../laws/-116/Societies_Registration_Act_1860.html", cat: "Acts" },
        { title: "Competition Act, 2002", url: "../laws/-118/Competition_Act_2002.html", cat: "Acts" },
        { title: "Reserve Bank of India Act, 1934", url: "../laws/-119/Reserve_Bank_of_India_Act_1934.html", cat: "Acts" },
        { title: "MRTP Act, 1969", url: "../laws/-120/Monopolies_and_Restrictive_Trade_Practices_Act_1969.html", cat: "Acts" },
        { title: "Equalisation Levy Act, 2016", url: "../laws/-154/Equalisation_Levy_Act_2016.html", cat: "Acts" },
        { title: "Right To Information Act, 2005", url: "../laws/-33/Right_To_Information_Act,_2005.html", cat: "Acts" },
        { title: "Foreign Exchange Management Act (FEMA), 1999", url: "../laws/-101/Foreign_Exchange_Management_Act_1999.html", cat: "Acts" },
        { title: "Maharashtra RERA Rules & Act", url: "../laws/-210/Maharashtra_Real_Estate_Regulatory_Authority_and_Rules.html", cat: "Acts" },
        { title: "Real Estate (RERA) Act, 2016", url: "../laws/-214/THE_REAL_ESTATE_REGULATION_AND_DEVELOPMENT_ACT_2016.html", cat: "Acts" },
        { title: "The Insolvency and Bankruptcy Code, 2016", url: "../laws/-220/The_Insolvency_and_Bankruptcy_Code_2016.html", cat: "Acts" },
        { title: "Prohibition of Benami Property Act, 1988", url: "../laws/-244/Prohibition_Of_Benami_Property_Transaction_Act_1988.html", cat: "Acts" },
        { title: "IGST Act, 2017", url: "../laws/-162/IGST_Act_2017.html", cat: "Acts" },
        { title: "CGST Act, 2017", url: "../laws/-164/Central_Goods_and_Services_Tax_Act_2017.html", cat: "Acts" },
        { title: "UTGST Act, 2017", url: "../laws/-186/Union_Territory_Goods_and_Services_Tax_Act_2017.html", cat: "Acts" },
        { title: "GST Compensation to States Act", url: "../laws/-187/GST_Compensation_to_States_Act_2017.html", cat: "Acts" }
    ];
    window.KB_RESOURCES = KB_RESOURCES; // Support legacy index script references

    // B. Consolidated Context Navigation Rules (KBNavigation)
    const kbCategories = [
        {
            name: "Links",
            icon: "fa-link",
            url: "resource/Knowledge_Bank/Links.html",
            isSub: false,
            items: [
                { name: "Quick Links", url: "resources/Links/Quick_Link/Quick_Link.html" },
                { name: "Important Links", url: "resources/Links/important_links/important_links.html" },
                { name: "GST/VAT Links", url: "resources/Links/Vat_Links/Vat_Links.html" },
                { name: "Ease Of Doing Business", url: "resources/Links/EASE_OF_DOING_BUSINESS/EASE_OF_DOING_BUSINESS.html" }
            ]
        },
        {
            name: "Acts",
            icon: "fa-book",
            url: "resource/Knowledge_Bank/Acts.html",
            isSub: true,
            subcategories: [
                {
                    name: "Direct Tax",
                    items: [
                        { name: "Income Tax Act", url: "laws/-26/Income_Tax_Act.html" },
                        { name: "Wealth Tax Act", url: "laws/-75/Wealth_Tax_Act.html" },
                        { name: "Income Declaration Scheme 2016", url: "laws/-157/Income_Declaration_Scheme_2016.html" },
                        { name: "Income Tax 2025", url: "laws/-260/Income_tax_2025.html" }
                    ]
                },
                {
                    name: "Indirect Tax",
                    items: [
                        { name: "Service Tax Act", url: "laws/-30/Service_Tax_Act.html" },
                        { name: "Central Sales Tax Act", url: "laws/-36/Central_Sales_Tax_Act,_1956.html" },
                        { name: "Central Excise Act", url: "laws/-40/The_Central_Excise_Act,_1944.html" },
                        { name: "Customs Act", url: "laws/-53/Customs_Act,_1962.html" },
                        { name: "Entry Tax Act", url: "laws/-102/Entry_Tax_Act.html" }
                    ]
                },
                {
                    name: "Corporate Laws",
                    items: [
                        { name: "Companies Act 2013", url: "laws/-103/Companies_Act_2013.html" },
                        { name: "Companies Act 1956", url: "laws/-42/Companies_Act,_1956.html" },
                        { name: "LLP Act", url: "laws/-48/The_Limited_Liability_Partnership_ACT,_2008.html" },
                        { name: "SEBI Act", url: "laws/-59/The_Securities_and_Exchange_Board_of_India_Act,_1992.html" }
                    ]
                },
                {
                    name: "VAT Laws",
                    items: [
                        { name: "Delhi VAT", url: "laws/-32/Delhi_Value_Added_Tax_Act,_2004.html" },
                        { name: "Maharashtra VAT", url: "laws/-39/Maharashtra_Value_Added_Tax_Act_(2002).html" },
                        { name: "West Bengal VAT", url: "laws/-49/West_Bengal_Value_Added_Tax_Act,_2003.html" },
                        { name: "Tamil Nadu VAT", url: "laws/-152/Tamilnadu_VAT_ACT_2006.html" },
                        { name: "Karnataka VAT", url: "laws/-89/Karnataka_Value_Added_Tax_Act,_2003.html" },
                        { name: "Gujarat VAT", url: "laws/-150/Gujarat_Value_Added_Tax_Act_2003.html" },
                        { name: "Uttar Pradesh VAT", url: "laws/-46/The_Uttar_Pradesh_Value_Added_Tax_Act_2008.html" },
                        { name: "Rajasthan VAT", url: "laws/-94/Rajasthan_Value_Added_Tax_Act,_2003.html" },
                        { name: "Punjab VAT", url: "laws/-65/Punjab_Value_Added_Tax_Act.html" },
                        { name: "Haryana VAT", url: "laws/-68/Haryana_Value_Added_Tax_Act.html" },
                        { name: "Telangana VAT", url: "laws/-148/Telangana_VAT_Act_2005.html" },
                        { name: "Andhra Pradesh VAT", url: "laws/-81/Andhra_Pradesh_Value_Added_Tax_Act,_2005.html" },
                        { name: "Bihar VAT", url: "laws/-91/Bihar_Value_Added_Tax_Act,_2005.html" }
                    ]
                },
                {
                    name: "Other Statutes",
                    items: [
                        { name: "ESI Act", url: "laws/-57/The_Employees_State_Insurance_Act,_1948.html" },
                        { name: "PF Act", url: "laws/-58/The_Employees_Provident_Funds_and_Miscellaneous_Provisions_Act,_1952.html" },
                        { name: "Profession Tax Act", url: "laws/-98/Profession_Tax_Act.html" },
                        { name: "Partnership Act", url: "laws/-114/The_Indian_Partnership_Act_1932.html" },
                        { name: "Societies Registration Act", url: "laws/-116/Societies_Registration_Act_1860.html" },
                        { name: "Competition Act", url: "laws/-118/Competition_Act_2002.html" },
                        { name: "RBI Act", url: "laws/-119/Reserve_Bank_of_India_Act_1934.html" },
                        { name: "MRTP Act", url: "laws/-120/Monopolies_and_Restrictive_Trade_Practices_Act_1969.html" },
                        { name: "Equalisation Levy Act", url: "laws/-154/Equalisation_Levy_Act_2016.html" },
                        { name: "Right To Information Act", url: "laws/-33/Right_To_Information_Act,_2005.html" },
                        { name: "FEMA", url: "laws/-101/Foreign_Exchange_Management_Act_1999.html" },
                        { name: "Maharashtra RERA", url: "laws/-210/Maharashtra_Real_Estate_Regulatory_Authority_and_Rules.html" },
                        { name: "RERA 2016", url: "laws/-214/THE_REAL_ESTATE_REGULATION_AND_DEVELOPMENT_ACT_2016.html" },
                        { name: "Insolvency & Bankruptcy Code", url: "laws/-220/The_Insolvency_and_Bankruptcy_Code_2016.html" },
                        { name: "Benami Property Act", url: "laws/-244/Prohibition_Of_Benami_Property_Transaction_Act_1988.html" }
                    ]
                },
                {
                    name: "GST Laws",
                    items: [
                        { name: "IGST Act", url: "laws/-162/IGST_Act_2017.html" },
                        { name: "CGST Act", url: "laws/-164/Central_Goods_and_Services_Tax_Act_2017.html" },
                        { name: "UTGST Act", url: "laws/-186/Union_Territory_Goods_and_Services_Tax_Act_2017.html" },
                        { name: "GST Compensation Act", url: "laws/-187/GST_Compensation_to_States_Act_2017.html" }
                    ]
                }
            ]
        }
    ];

    const getKBCategory = function(pathname) {
        const pathLower = pathname.toLowerCase();
        if (pathLower.includes('/links/')) return { name: "Links", url: "resource/Knowledge_Bank/Links.html", index: 0 };
        if (pathLower.includes('/laws/')) return { name: "Acts", url: "resource/Knowledge_Bank/Acts.html", index: 1 };
        return { name: "Knowledge Bank", url: "resource/Knowledge_Bank.html", index: -1 };
    };

    const KBNavigation = {
        categories: kbCategories,
        getContext: getKBCategory
    };
    window.KBNavigation = KBNavigation; // Support legacy index script references

    // C. Consolidated Search Highlight & Filter Utilities (KBSearch)
    const removeHighlights = function(root) {
        if (!root) return;
        root.querySelectorAll('mark.highlight').forEach(mark => {
            const textNode = document.createTextNode(mark.textContent);
            if (mark.parentNode) {
                mark.parentNode.replaceChild(textNode, mark);
            }
        });
    };

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
                if (item.tagName.toLowerCase() === 'tr' && item.closest('thead')) return;

                const text = item.textContent.toLowerCase();
                if (query === '') {
                    item.style.display = '';
                    removeHighlights(item);
                } else if (text.includes(query)) {
                    item.style.display = '';
                    highlightText(item, query);

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

        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !suggestionsDiv.contains(e.target)) {
                suggestionsDiv.classList.add('d-none');
            }
        });
    };

    const KBSearch = {
        init: initLocalSearch,
        highlight: highlightText,
        clear: removeHighlights
    };
    window.KBSearch = KBSearch; // Support legacy index script references

    // Header HTML Template (Mega Menu / Navigation)
    const getHeaderHtml = (rootPrefix) => `
    <header class="smart-header">
        <div class="container d-flex justify-content-between align-items-center">
            <a href="${rootPrefix}index.html" class="navbar-brand d-flex align-items-center">
                <img src="${rootPrefix}image/web-logo.png" class="logo-dark" alt="KNMC Logo" style="height: 48px;">
                <img src="${rootPrefix}image/web-logo1.png" class="logo-light" alt="KNMC Logo" style="height: 48px;">
            </a>
            <nav class="navbar navbar-expand-lg">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto align-items-center">
                        <li class="nav-item"><a href="${rootPrefix}index.html" class="nav-link">Home</a></li>
                        <li class="nav-item"><a href="${rootPrefix}resource/About_Us.html" class="nav-link">About</a></li>
                        <li class="nav-item"><a href="${rootPrefix}resource/Partners.html" class="nav-link">Team</a></li>
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                            <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
                                <li><a href="${rootPrefix}resource/Services/Corporate_Services.html" class="dropdown-item">Corporate Services</a></li>
                                <li><a href="${rootPrefix}resource/Services/Audit.html" class="dropdown-item">Audit</a></li>
                                <li><a href="${rootPrefix}resource/Services/Corporate_Finance.html" class="dropdown-item">Corporate Finance</a></li>
                                <li><a href="${rootPrefix}resource/Services/Services_for_Non-Residents.html" class="dropdown-item">Services for Non-Residents</a></li>
                                <li><a href="${rootPrefix}resource/Services/Accounting_services.html" class="dropdown-item">Accounting Services</a></li>
                                <li><a href="${rootPrefix}resource/Services/Payroll.html" class="dropdown-item">Payroll</a></li>
                                <li><a href="${rootPrefix}resource/Services/Benefits_of_Outsourcing.html" class="dropdown-item">Benefits of Outsourcing</a></li>
                                <li><a href="${rootPrefix}resource/Services/Income_Tax.html" class="dropdown-item">Income Tax</a></li>
                                <li><a href="${rootPrefix}resource/Services/GST.html" class="dropdown-item">GST</a></li>
                                <li><a href="${rootPrefix}resource/Services/CORPORATE_GOVERNANCE_SERVICES.html" class="dropdown-item">Corporate Governance</a></li>
                                <li><a href="${rootPrefix}resource/Services/TDS_FRINGE_BENIFIT_TAX.html" class="dropdown-item">TDS</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown mega-dropdown">
                            <a href="${rootPrefix}resource/Knowledge_Bank.html" class="nav-link dropdown-toggle active" id="knowledgeDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Knowledge Bank</a>
                            <div class="dropdown-menu mega-menu-content p-4" aria-labelledby="knowledgeDropdown">
                                <div class="row g-3">
                                    <div class="col-md-6 col-12">
                                        <h6 class="mega-menu-title"><i class="fa fa-link me-2 text-primary"></i>Links</h6>
                                        <ul class="list-unstyled mega-menu-list">
                                            <li><a href="${rootPrefix}resources/Links/Quick_Link/Quick_Link.html" class="dropdown-item">Quick Links</a></li>
                                            <li><a href="${rootPrefix}resources/Links/important_links/important_links.html" class="dropdown-item">Important Links</a></li>
                                            <li><a href="${rootPrefix}resources/Links/Vat_Links/Vat_Links.html" class="dropdown-item">GST/VAT Links</a></li>
                                            <li><a href="${rootPrefix}resources/Links/EASE_OF_DOING_BUSINESS/EASE_OF_DOING_BUSINESS.html" class="dropdown-item">Ease Of Doing Business</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <h6 class="mega-menu-title"><i class="fa fa-book me-2 text-primary"></i>Acts</h6>
                                        <ul class="list-unstyled mega-menu-list">
                                            <li><a href="${rootPrefix}laws/-26/Income_Tax_Act.html" class="dropdown-item">Income Tax Act</a></li>
                                            <li><a href="${rootPrefix}laws/-103/Companies_Act_2013.html" class="dropdown-item">Companies Act 2013</a></li>
                                            <li><a href="${rootPrefix}laws/-164/Central_Goods_and_Services_Tax_Act_2017.html" class="dropdown-item">CGST Act</a></li>
                                            <li><a href="${rootPrefix}resource/Knowledge_Bank/Acts.html" class="dropdown-item fw-bold text-primary">Browse All &rarr;</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item"><a href="${rootPrefix}resource/Career.html" class="nav-link">Careers</a></li>
                        <li class="nav-item"><a href="${rootPrefix}resource/Contact_Us.html" class="btn-premium py-2 px-4 text-white text-center d-inline-block">Contact Us</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    `;

    // Footer HTML Template
    const getFooterHtml = (rootPrefix) => `
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-md-12 mb-4 mb-lg-0">
                    <div class="footer-logo mb-4">
                        <img src="${rootPrefix}image/web-logo1.png" alt="KNMC Logo" style="height: 48px;">
                    </div>
                    <div class="info">
                        <ul class="list-unstyled">
                            <li class="mb-3"><i class="fa fa-map-marker me-2"></i> 50, 12th Main Rd, Jayanagar, Bengaluru, Karnataka 560011</li>
                            <li class="mb-3"><i class="fa fa-phone me-2"></i> <a href="tel:+917204175705">+91 7204175705</a> / <a href="tel:+918608228664">+91 8608228664</a></li>
                            <li class="mb-3"><i class="fa fa-envelope me-2"></i> <a href="mailto:finance@knmcassociates.com">finance@knmcassociates.com</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                    <div class="footer-link">
                        <h3>Useful Links</h3>
                        <ul class="list-unstyled">
                            <li><a href="https://www.cbic.gov.in/" target="_blank">CBIC Portal</a></li>
                            <li><a href="https://www.incometax.gov.in/iec/foportal/" target="_blank">Income Tax Department</a></li>
                            <li><a href="http://gst.gov.in/" target="_blank">Goods and Services Tax (GST)</a></li>
                            <li><a href="https://www.mca.gov.in/content/mca/global/en/home.html" target="_blank">Ministry of Corporate Affairs</a></li>
                            <li><a href="https://contents.tdscpc.gov.in/" target="_blank">TRACES Portal</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="footer-link">
                        <h3>Follow Us</h3>
                        <div class="social-link">
                            <ul class="list-unstyled d-flex gap-3">
                                <li><a href="https://www.linkedin.com/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="https://x.com/?lang=en" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="https://www.instagram.com/knmcassociates/" target="_blank"><i class="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copy-right text-center mt-5 pt-4 border-top">
                <p class="copyright-text text-white">© 2026 knmcassociates.com. All Rights Reserved. Powered by <a href="https://webtel.in/" class="text-white text-decoration-none">Webtel Electrosoft Ltd.</a></p>
            </div>
        </div>
    </footer>
    `;

    const initKnowledgeBank = () => {
        const path = window.location.pathname;
        const pathLower = path.toLowerCase();

        // 1. Identify rootPrefix dynamically
        let rootPrefix = '';
        const scriptTag = Array.from(document.querySelectorAll('script')).find(s => s.src && s.src.includes('usercss/bootstrap.min.js'));
        if (scriptTag) {
            const srcAttr = scriptTag.getAttribute('src');
            const index = srcAttr.indexOf('usercss/bootstrap.min.js');
            if (index !== -1) {
                rootPrefix = srcAttr.substring(0, index);
            }
        }

        // 2. Suppress Microsoft/Telerik ClientScript / Sys.Component.create crashes on missing layout controls
        if (window.Sys && window.Sys.Component && typeof window.Sys.Component.create === 'function') {
            const originalSysCreate = window.Sys.Component.create;
            if (!originalSysCreate.__isPatched) {
                const patchedSysCreate = function(type, properties, events, references, element) {
                    if (element === null || element === undefined) return null;
                    try {
                        return originalSysCreate.apply(this, arguments);
                    } catch (e) {
                        console.warn("Suppressed Sys.Component.create error on missing element:", e);
                        return null;
                    }
                };
                patchedSysCreate.__isPatched = true;
                window.Sys.Component.create = patchedSysCreate;
            }
        }

        // 3. Setup Layout Transformation Engine for Knowledge Bank pages
        const bodyForm = document.querySelector('#form2') || document.querySelector('#form1');
        if (bodyForm) {
            // Remove legacy wrappers to prevent double headers/footers
            const idsToRemove = ['#HeaderControl', '#MenuControl', '#Bannercontrol', '#FooterrControl1_Footer'];
            idsToRemove.forEach(id => {
                const el = document.querySelector(id);
                if (el) el.remove();
            });

            // Find the underlying legacy page content element
            let pageContent = document.querySelector('#tbl_forcss1') || 
                              document.querySelector('#HomepagecontentControl_C') || 
                              document.querySelector('.innr-pg-c') ||
                              document.querySelector('.main-table') ||
                              document.querySelector('.container') ||
                              document.querySelector('#body1 > center > form > table');

            // Fallback content isolation wrapper to guarantee 100% pages compatibility
            if (!pageContent) {
                const fallbackWrap = document.createElement('div');
                fallbackWrap.id = 'dynamic-kb-fallback-wrapper';
                Array.from(bodyForm.childNodes).forEach(child => {
                    if (
                        child.nodeType === Node.ELEMENT_NODE &&
                        !['SCRIPT', 'HEADER', 'FOOTER', 'NAV', 'ASIDE'].includes(child.tagName) &&
                        child.id !== 'preloader' &&
                        child.getAttribute('type') !== 'hidden'
                    ) {
                        fallbackWrap.appendChild(child);
                    }
                });
                bodyForm.appendChild(fallbackWrap);
                pageContent = fallbackWrap;
            }

            if (pageContent) {
                // Extract legacy page titles to prevent double header headings
                const headText = pageContent.querySelector('[id*="HeadText"]') || pageContent.querySelector('.button_div a') || pageContent.querySelector('.button_div');
                if (headText) {
                    headText.style.display = 'none';
                    const parentBtnDiv = headText.closest('.button_div');
                    if (parentBtnDiv) parentBtnDiv.style.display = 'none';
                }

                // A. Modernize Data Tables inside content
                pageContent.querySelectorAll('table').forEach(tbl => {
                    if (tbl.id && (tbl.id.startsWith('tbl_forcss') || tbl.id.includes('RadDockZone') || tbl.classList.contains('rdTable'))) {
                        return;
                    }
                    tbl.removeAttribute('width');
                    tbl.removeAttribute('cellspacing');
                    tbl.removeAttribute('cellpadding');
                    tbl.style.width = '100%';
                    tbl.style.maxWidth = '100%';
                    tbl.style.minWidth = '750px'; // Prevent layout squishing on small mobile viewports
                    tbl.style.borderCollapse = 'collapse';
                    tbl.classList.add('table', 'table-hover', 'table-bordered');

                    tbl.querySelectorAll('td, th').forEach(cell => {
                        cell.removeAttribute('width');
                        cell.style.width = '';
                        const text = cell.textContent ? cell.textContent.trim() : '';
                        const hasElements = cell.querySelector('input, select, button, a, img, span, strong, label, p');
                        if (!text && !hasElements) {
                            cell.style.display = 'none'; // Hide empty cells and headers (fixes black blocks)
                        }
                    });

                    // Hide empty legacy table header rows completely (prevents empty dark navy blocks)
                    const thead = tbl.querySelector('thead');
                    if (thead) {
                        const hasText = thead.textContent.trim().replace(/\xa0/g, '').length > 0;
                        if (!hasText) {
                            thead.style.display = 'none';
                        }
                    }

                    // Wrap tables in responsive scrollers
                    if (tbl.parentElement && !tbl.parentElement.classList.contains('table-responsive')) {
                        const wrapper = document.createElement('div');
                        wrapper.className = 'table-responsive';
                        tbl.parentNode.insertBefore(wrapper, tbl);
                        wrapper.appendChild(tbl);
                    }
                });

                // B. Modernize form fields
                pageContent.querySelectorAll('input[type="text"], select').forEach(input => {
                    input.classList.add('form-control');
                    input.style.width = '100%';
                    input.style.maxWidth = '100%';
                });

                pageContent.querySelectorAll('input[type="button"], input[type="submit"], button, .btn').forEach(btn => {
                    btn.classList.add('btn', 'btn-premium', 'text-white', 'px-4');
                    btn.style.backgroundColor = 'var(--kb-primary)';
                    btn.style.color = '#fff';
                    btn.style.border = 'none';
                });

                // B2. Clean up trailing parenthesis/text outside anchors inside list items (common in legacy lists)
                pageContent.querySelectorAll('li').forEach(li => {
                    const anchors = li.querySelectorAll('a');
                    if (anchors.length === 1) {
                        const a = anchors[0];
                        Array.from(li.childNodes).forEach(node => {
                            if (node !== a && node.nodeType === Node.TEXT_NODE) {
                                const trimmed = node.textContent.trim();
                                if (trimmed && (trimmed === ')' || trimmed === '(' || trimmed === '.' || trimmed === ',')) {
                                    a.textContent = a.textContent.trim() + trimmed;
                                    node.textContent = '';
                                }
                            }
                        });
                    }
                });

                // B3. Modernize Acts/Rules Search Forms
                const sectionInput = pageContent.querySelector('input[id*="txt_SectionID"]');
                const contentInput = pageContent.querySelector('input[id*="txt_Content"]');
                if (sectionInput && contentInput) {
                    const formTable = sectionInput.closest('table');
                    if (formTable) {
                        const searchBtn = pageContent.querySelector('input[id*="btn_Search"]');
                        const homeBtn = pageContent.querySelector('input[id*="btn_Home"]');
                        const backBtn = pageContent.querySelector('input[id="btn_Back"]');
                        const resultSpan = pageContent.querySelector('[id*="lbl_result"]');

                        const modernForm = document.createElement('div');
                        modernForm.className = 'kb-form-modern row g-3 align-items-end mb-4 p-4 bg-light rounded-3 border border-light-subtle';

                        // Column 1: Section
                        const colSection = document.createElement('div');
                        colSection.className = 'col-md-4 col-12 text-start';
                        const lblSection = document.createElement('label');
                        lblSection.className = 'form-label fw-bold text-secondary mb-1';
                        lblSection.style.fontSize = '0.85rem';
                        lblSection.textContent = 'Section / Rule Number';
                        colSection.appendChild(lblSection);
                        
                        sectionInput.className = 'form-control';
                        sectionInput.placeholder = 'e.g., Sec 80C';
                        sectionInput.style.width = '100%';
                        sectionInput.style.height = 'auto';
                        colSection.appendChild(sectionInput);
                        modernForm.appendChild(colSection);

                        // Column 2: Content
                        const colContent = document.createElement('div');
                        colContent.className = 'col-md-4 col-12 text-start';
                        const lblContent = document.createElement('label');
                        lblContent.className = 'form-label fw-bold text-secondary mb-1';
                        lblContent.style.fontSize = '0.85rem';
                        lblContent.textContent = 'Content Keywords';
                        colContent.appendChild(lblContent);

                        contentInput.className = 'form-control';
                        contentInput.placeholder = 'e.g., deduction';
                        contentInput.style.width = '100%';
                        contentInput.style.height = 'auto';
                        colContent.appendChild(contentInput);
                        modernForm.appendChild(colContent);

                        // Column 3: Actions
                        const colActions = document.createElement('div');
                        colActions.className = 'col-md-4 col-12 d-flex gap-2 justify-content-md-end justify-content-start align-items-center mt-3 mt-md-0';

                        if (searchBtn) {
                            searchBtn.className = 'btn btn-primary px-4 py-2 fw-semibold text-white d-flex align-items-center justify-content-center';
                            searchBtn.style.width = 'auto';
                            searchBtn.style.height = 'auto';
                            colActions.appendChild(searchBtn);
                        }
                        if (homeBtn) {
                            homeBtn.style.display = 'none';
                        }
                        if (backBtn) {
                            backBtn.className = 'btn btn-outline-secondary px-3 py-2 fw-semibold d-flex align-items-center justify-content-center';
                            backBtn.style.width = 'auto';
                            backBtn.style.height = 'auto';
                            colActions.appendChild(backBtn);
                        }
                        modernForm.appendChild(colActions);

                        if (resultSpan) {
                            const colResult = document.createElement('div');
                            colResult.className = 'col-12 mt-2 text-start text-danger fw-semibold small';
                            colResult.appendChild(resultSpan);
                            modernForm.appendChild(colResult);
                        }

                        // Replace formTable with modernForm
                        formTable.parentNode.replaceChild(modernForm, formTable);
                    }
                }

                // C. Build Responsive Grid Shell Layout
                const mainShell = document.createElement('main');
                mainShell.className = 'kb-container container-fluid px-md-5 py-4';

                const contentRow = document.createElement('div');
                contentRow.className = 'row g-4';

                // Desktop Sidebar Column
                const sidebarCol = document.createElement('aside');
                sidebarCol.className = 'col-lg-3 d-none d-lg-block';

                const sidebarContent = document.createElement('div');
                sidebarContent.className = 'kb-sidebar sticky-top p-3 bg-white rounded-3 shadow-sm border border-light-subtle';
                sidebarContent.style.top = '100px';

                // Map navigation links based on context
                const kbCtx = KBNavigation.getContext(path);
                
                let sidebarHtml = `<h5 class="sidebar-title mb-4"><i class="fa fa-folder-open me-2 text-primary"></i>Knowledge Base</h5>`;
                sidebarHtml += `<div class="accordion accordion-flush" id="kbAccordion">`;

                KBNavigation.categories.forEach((cat, index) => {
                    const isActiveCategory = (cat.name === kbCtx.name);
                    
                    if (cat.isSub) {
                        sidebarHtml += `
                            <div class="accordion-item border-0">
                                <h2 class="accordion-header" id="heading${index}">
                                    <button class="accordion-button ${isActiveCategory ? '' : 'collapsed'} py-2 px-3 fw-bold rounded-2 text-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="${isActiveCategory ? 'true' : 'false'}" aria-controls="collapse${index}">
                                        <i class="fa ${cat.icon} me-2 text-primary"></i> ${cat.name}
                                    </button>
                                </h2>
                                <div id="collapse${index}" class="accordion-collapse collapse ${isActiveCategory ? 'show' : ''}" aria-labelledby="heading${index}" data-bs-parent="#kbAccordion">
                                    <div class="accordion-body p-0 pt-2">
                                        <div class="accordion accordion-flush" id="kbSubAccordion">
                        `;

                        cat.subcategories.forEach((sub, subIndex) => {
                            let hasActiveItem = false;
                            sub.items.forEach(item => {
                                if (pathLower.includes(item.url.split('/').pop().toLowerCase())) {
                                    hasActiveItem = true;
                                }
                            });

                            sidebarHtml += `
                                <div class="accordion-item border-0 ps-3">
                                    <h3 class="accordion-header" id="subheading${index}_${subIndex}">
                                        <button class="accordion-button ${hasActiveItem ? '' : 'collapsed'} py-1 px-2 fw-semibold rounded-2 text-secondary text-start" style="font-size: 0.92rem;" type="button" data-bs-toggle="collapse" data-bs-target="#subcollapse${index}_${subIndex}" aria-expanded="${hasActiveItem ? 'true' : 'false'}" aria-controls="subcollapse${index}_${subIndex}">
                                            ${sub.name}
                                        </button>
                                    </h3>
                                    <div id="subcollapse${index}_${subIndex}" class="accordion-collapse collapse ${hasActiveItem ? 'show' : ''}" aria-labelledby="subheading${index}_${subIndex}" data-bs-parent="#kbSubAccordion">
                                        <div class="accordion-body p-0 pt-1 ps-2">
                                            <ul class="list-unstyled sidebar-sublinks">
                            `;

                            sub.items.forEach(item => {
                                const cleanUrl = item.url.startsWith('../') ? item.url.substring(3) : item.url;
                                const finalUrl = `${rootPrefix}${cleanUrl}`;
                                const isCurrentPage = pathLower.includes(item.url.split('/').pop().toLowerCase());

                                sidebarHtml += `
                                    <li class="mb-1">
                                        <a href="${finalUrl}" class="nav-link py-1 px-2 rounded-2 ${isCurrentPage ? 'active fw-bold text-primary bg-primary-subtle' : ''}" style="font-size: 0.86rem; display: block;">
                                            ${item.name}
                                        </a>
                                    </li>
                                `;
                            });

                            sidebarHtml += `
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            `;
                        });

                        sidebarHtml += `
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    } else {
                        // Flat category rendering (like Links)
                        sidebarHtml += `
                            <div class="accordion-item border-0">
                                <h2 class="accordion-header" id="heading${index}">
                                    <button class="accordion-button ${isActiveCategory ? '' : 'collapsed'} py-2 px-3 fw-bold rounded-2 text-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="${isActiveCategory ? 'true' : 'false'}" aria-controls="collapse${index}">
                                        <i class="fa ${cat.icon} me-2 text-primary"></i> ${cat.name}
                                    </button>
                                </h2>
                                <div id="collapse${index}" class="accordion-collapse collapse ${isActiveCategory ? 'show' : ''}" aria-labelledby="heading${index}" data-bs-parent="#kbAccordion">
                                    <div class="accordion-body p-0 pt-2 ps-3">
                                        <ul class="list-unstyled sidebar-sublinks">
                        `;

                        cat.items.forEach(sub => {
                            const cleanUrl = sub.url.startsWith('../') ? sub.url.substring(3) : sub.url;
                            const finalUrl = `${rootPrefix}${cleanUrl}`;
                            const isCurrentPage = pathLower.includes(sub.url.split('/').pop().toLowerCase());
                            
                            sidebarHtml += `
                                <li class="mb-2">
                                    <a href="${finalUrl}" class="nav-link py-1 px-2 rounded-2 ${isCurrentPage ? 'active fw-bold text-primary bg-primary-subtle' : ''}" style="font-size: 0.9rem;">
                                        ${sub.name}
                                    </a>
                                </li>
                            `;
                        });

                        sidebarHtml += `
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        `;
                    }
                });

                sidebarHtml += `</div>`;
                sidebarContent.innerHTML = sidebarHtml;
                sidebarCol.appendChild(sidebarContent);
                contentRow.appendChild(sidebarCol);

                // Main Content Column
                const contentCol = document.createElement('div');
                contentCol.className = 'col-lg-9 col-12';

                const cardWrapper = document.createElement('div');
                cardWrapper.className = 'kb-card bg-white rounded-3 shadow-sm p-4 p-md-5 border border-light-subtle';

                // Mobile Menu Toggle Trigger Row
                const mobileHeaderRow = document.createElement('div');
                mobileHeaderRow.className = 'd-flex justify-content-between align-items-center d-lg-none mb-3';
                
                const mobileMenuBtn = document.createElement('button');
                mobileMenuBtn.setAttribute('type', 'button');
                mobileMenuBtn.className = 'btn btn-kb-menu d-flex align-items-center gap-2';
                mobileMenuBtn.innerHTML = `<i class="fa fa-folder-open"></i> Browse Menu`;
                mobileMenuBtn.setAttribute('data-bs-toggle', 'modal');
                mobileMenuBtn.setAttribute('data-bs-target', '#kbMobileDrawer');
                mobileHeaderRow.appendChild(mobileMenuBtn);

                // Mobile Modal Drawer
                const mobileDrawer = document.createElement('div');
                mobileDrawer.className = 'modal fade modal-left';
                mobileDrawer.id = 'kbMobileDrawer';
                mobileDrawer.tabIndex = -1;
                mobileDrawer.innerHTML = `
                    <div class="modal-dialog modal-dialog-scrollable modal-fullscreen-sm-down">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title"><i class="fa fa-folder-open text-primary me-2"></i>Knowledge Menu</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body p-3">
                                <div class="sidebar-clone"></div>
                            </div>
                        </div>
                    </div>
                `;
                document.body.appendChild(mobileDrawer);

                // Clone accordion menu for Mobile touch navigation
                const mobileClone = sidebarContent.cloneNode(true);
                const mobTitle = mobileClone.querySelector('.sidebar-title');
                if (mobTitle) mobTitle.remove();

                const accordionMob = mobileClone.querySelector('#kbAccordion');
                if (accordionMob) {
                    accordionMob.id = 'kbAccordionMobile';
                    accordionMob.querySelectorAll('.accordion-header button').forEach((btn) => {
                        const originalTarget = btn.getAttribute('data-bs-target');
                        if (originalTarget && originalTarget.startsWith('#collapse')) {
                            btn.setAttribute('data-bs-target', originalTarget + 'Mobile');
                            btn.setAttribute('aria-controls', originalTarget.substring(1) + 'Mobile');
                        }
                    });
                    accordionMob.querySelectorAll('.accordion-collapse').forEach((collapse) => {
                        if (collapse.id && collapse.id.startsWith('collapse')) {
                            collapse.id = collapse.id + 'Mobile';
                            collapse.setAttribute('data-bs-parent', '#kbAccordionMobile');
                        }
                    });

                    // Also clone nested subaccordions if they exist in the mobile view
                    const subAccordionMob = mobileClone.querySelector('#kbSubAccordion');
                    if (subAccordionMob) {
                        subAccordionMob.id = 'kbSubAccordionMobile';
                        subAccordionMob.querySelectorAll('.accordion-header button').forEach((btn) => {
                            const originalTarget = btn.getAttribute('data-bs-target');
                            if (originalTarget && originalTarget.startsWith('#subcollapse')) {
                                btn.setAttribute('data-bs-target', originalTarget + 'Mobile');
                                btn.setAttribute('aria-controls', originalTarget.substring(1) + 'Mobile');
                            }
                        });
                        subAccordionMob.querySelectorAll('.accordion-collapse').forEach((collapse) => {
                            if (collapse.id && collapse.id.startsWith('subcollapse')) {
                                collapse.id = collapse.id + 'Mobile';
                                collapse.setAttribute('data-bs-parent', '#kbSubAccordionMobile');
                            }
                        });
                    }
                }
                mobileDrawer.querySelector('.sidebar-clone').appendChild(mobileClone);

                cardWrapper.appendChild(mobileHeaderRow);

                // D. Build dynamic breadcrumbs
                const breadcrumbDiv = document.createElement('div');
                breadcrumbDiv.className = 'kb-breadcrumb mb-4 text-start';

                let pageTitleText = "Statutory Resource";
                if (headText) {
                    pageTitleText = headText.textContent.replace(/_/g, ' ').trim();
                } else {
                    const filename = path.split('/').pop();
                    if (filename) {
                        pageTitleText = filename.replace(/\.(html|aspx)/i, '').replace(/_/g, ' ').replace(/cal /i, '');
                    }
                }

                breadcrumbDiv.innerHTML = `
                    <a href="${rootPrefix}index.html">Home</a> &gt; 
                    <a href="${rootPrefix}resource/Knowledge_Bank.html">Knowledge Bank</a> &gt; 
                    <a href="${rootPrefix}${kbCtx.url}">${kbCtx.name}</a> &gt; 
                    <span class="text-muted">${pageTitleText}</span>
                `;
                cardWrapper.appendChild(breadcrumbDiv);

                // E. Inject Page Title Header & Category Badge
                const titleHeader = document.createElement('h1');
                titleHeader.className = 'main-heading text-center mb-4';
                titleHeader.style.fontSize = '2rem';
                titleHeader.style.fontWeight = '800';
                titleHeader.style.color = 'var(--kb-primary)';
                titleHeader.textContent = pageTitleText;
                cardWrapper.appendChild(titleHeader);

                // F. Inject Interactive local instant search filter
                const searchBoxDiv = document.createElement('div');
                searchBoxDiv.className = 'mb-4 position-relative';
                searchBoxDiv.innerHTML = `
                    <div class="input-group">
                        <span class="input-group-text bg-transparent border-end-0 text-muted"><i class="fa fa-search"></i></span>
                        <input type="text" id="kbLocalSearch" class="form-control border-start-0 ps-0" placeholder="Filter resources within this category..." autocomplete="off">
                    </div>
                    <div id="searchSuggestions" class="list-group position-absolute w-100 shadow-sm d-none" style="z-index: 1050; max-height: 250px; overflow-y: auto;"></div>
                `;
                cardWrapper.appendChild(searchBoxDiv);

                // Hide any redundant h1 or main-heading elements inside pageContent to prevent duplication
                const contentHeadings = pageContent.querySelectorAll('h1, h2, .main-heading');
                contentHeadings.forEach(h => {
                    const text = h.textContent.trim().toLowerCase();
                    const cleanPageTitle = pageTitleText.toLowerCase().replace(/\s+/g, '');
                    const cleanText = text.replace(/\s+/g, '');
                    if (
                        cleanText.includes(cleanPageTitle) || 
                        cleanPageTitle.includes(cleanText) || 
                        text === 'quick links' || 
                        text === 'important links' || 
                        text === 'gst/vat links' || 
                        text === 'ease of doing business'
                    ) {
                        h.style.display = 'none';
                    }
                });

                // G. Append original modernized page content
                cardWrapper.appendChild(pageContent);
                contentCol.appendChild(cardWrapper);
                contentRow.appendChild(contentCol);
                mainShell.appendChild(contentRow);

                bodyForm.innerHTML = '';
                bodyForm.appendChild(mainShell);

                // H. Initialize instant search on category content
                const localSearchInput = document.getElementById('kbLocalSearch');
                const localSuggestions = document.getElementById('searchSuggestions');
                if (localSearchInput && localSuggestions && KBSearch) {
                    KBSearch.init(localSearchInput, localSuggestions, pageContent);
                }
            }
        }

        // 4. Inject Unified modern sticky header
        const headerEl = document.createElement('div');
        headerEl.innerHTML = getHeaderHtml(rootPrefix);
        const injectedHeader = headerEl.firstElementChild;
        document.body.insertBefore(injectedHeader, document.body.firstChild);

        // Bind dynamic scroll styling for transparency transitions
        const handleScroll = () => {
            if (window.scrollY > 50) {
                injectedHeader.classList.add('scrolled');
            } else {
                injectedHeader.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        // 5. Inject Unified modern footer
        const footerEl = document.createElement('div');
        footerEl.innerHTML = getFooterHtml(rootPrefix);
        document.body.appendChild(footerEl.firstElementChild);

        // Style circular action indicators inside active circular / tab pages
        const searchTD = document.getElementById('HomepagecontentControl_C_ctl00_SearchTD');
        const lblInfo = document.getElementById('HomepagecontentControl_C_ctl00_lbl_Info');
        if (searchTD && lblInfo) {
            const infoText = lblInfo.textContent.toLowerCase();
            searchTD.querySelectorAll('input[type="button"]').forEach(btn => {
                const btnVal = btn.value.toLowerCase().replace(/s$/, '').replace(/\s+/g, '');
                const cleanInfo = infoText.replace(/\s+/g, '');
                if (cleanInfo.includes(btnVal)) {
                    btn.classList.add('active-tab');
                }
            });
        }

        // Global Search Logic for Knowledge_Bank.html Hub Page
        const globalSearchInput = document.getElementById('globalSearch');
        const globalResultsList = document.getElementById('searchResults');
        if (globalSearchInput && globalResultsList && KB_RESOURCES) {
            globalSearchInput.addEventListener('input', function() {
                const query = this.value.trim().toLowerCase();
                globalResultsList.innerHTML = '';
                
                if (query.length < 2) {
                    globalResultsList.classList.remove('active');
                    return;
                }

                const filtered = KB_RESOURCES.filter(res => res.title.toLowerCase().includes(query));

                if (filtered.length === 0) {
                    globalResultsList.innerHTML = `<li class="p-3 text-muted text-center">No resources found matching "${this.value}"</li>`;
                    globalResultsList.classList.add('active');
                    return;
                }

                filtered.slice(0, 10).forEach(res => {
                    const li = document.createElement('li');
                    li.innerHTML = `<a href="${res.url}">
                        <div class="fw-bold">${res.title}</div>
                        <div class="small text-muted">${res.cat}</div>
                    </a>`;
                    globalResultsList.appendChild(li);
                });
                globalResultsList.classList.add('active');
            });

            document.addEventListener('click', function(e) {
                if (!globalSearchInput.contains(e.target) && !globalResultsList.contains(e.target)) {
                    globalResultsList.classList.remove('active');
                }
            });
        }

        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 50);
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initKnowledgeBank);
    } else {
        initKnowledgeBank();
    }
})(window);
