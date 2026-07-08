    const isRewritten = document.querySelector('meta[name="rewritten"]') !== null;

    // Knowledge Bank page detection & asset injection
    const isKnowledgeBankPage = () => {
        const p = window.location.pathname.toLowerCase();
        return p.includes('/resources/') || p.includes('/laws/') ||
            p.includes('/advancesearch/') || p.includes('/notificationsearch/') ||
            p.includes('knowledge_bank');
    };

    const computeRootPrefix = () => {
        const scriptTag = Array.from(document.querySelectorAll('script')).find(
            s => s.src && s.src.includes('assets/js/bootstrap.min.js')
        );
        if (scriptTag) {
            const srcAttr = scriptTag.getAttribute('src');
            const index = srcAttr.indexOf('assets/js/bootstrap.min.js');
            if (index !== -1) return srcAttr.substring(0, index);
        }
        const pathSegments = window.location.pathname.split('/').filter(s => s.length > 0);
        const resourceIdx = pathSegments.findIndex(s =>
            ['resources', 'laws', 'advancesearch', 'notificationsearch', 'resource'].includes(s.toLowerCase())
        );
        if (resourceIdx !== -1) return '../'.repeat(pathSegments.length - resourceIdx - 1);
        return '';
    };

    if (isKnowledgeBankPage() && !document.querySelector('link[href*="knowledge-bank.css"]')) {
        const kbRoot = computeRootPrefix();
        const kbCss = document.createElement('link');
        kbCss.rel = 'stylesheet';
        kbCss.href = kbRoot + 'assets/css/knowledge-bank.css';
        document.head.appendChild(kbCss);
    }

    const loaderStartTime = Date.now();

    const hidePreloader = () => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            const elapsed = Date.now() - loaderStartTime;
            const delay = Math.max(0, 1500 - elapsed);
            setTimeout(() => {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.remove();
                }, 500);
            }, delay);
        }
    };

    if (document.readyState === 'complete') {
        hidePreloader();
    } else {
        window.addEventListener('load', hidePreloader);
    }

    // Dynamically compute rootPrefix
    let rootPrefix = '';
    const scriptTag = Array.from(document.querySelectorAll('script')).find(s => s.src && s.src.includes('assets/js/bootstrap.min.js'));
    if (scriptTag) {
        const srcAttr = scriptTag.getAttribute('src');
        const index = srcAttr.indexOf('assets/js/bootstrap.min.js');
        if (index !== -1) {
            rootPrefix = srcAttr.substring(0, index);
        }
    }

    const headerHtml = `
    <header class="smart-header">
        <div class="container d-flex justify-content-between align-items-center">
            <a href="${rootPrefix}index.html" class="navbar-brand d-flex align-items-center">
                <img src="${rootPrefix}assets/images/web-logo.png" class="logo-dark" alt="KNMC Logo" style="height: 48px;">
                <img src="${rootPrefix}assets/images/web-logo1.png" class="logo-light" alt="KNMC Logo" style="height: 48px;">
            </a>
            <nav class="navbar navbar-expand-lg">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto align-items-center">
                        <li class="nav-item"><a href="${rootPrefix}index.html" class="nav-link">Home</a></li>
                        <li class="nav-item"><a href="${rootPrefix}about.html" class="nav-link">About</a></li>
                        <li class="nav-item"><a href="${rootPrefix}team.html" class="nav-link">Team</a></li>
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                            <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
                                <li><a href="${rootPrefix}corporate-services.html" class="dropdown-item">Corporate Services</a></li>
                                <li><a href="${rootPrefix}audit.html" class="dropdown-item">Audit & Assurance</a></li>
                                <li><a href="${rootPrefix}corporate-finance.html" class="dropdown-item">Corporate Finance</a></li>
                                <li><a href="${rootPrefix}services-for-non-residents.html" class="dropdown-item">Services for Non-Residents</a></li>
                                <li><a href="${rootPrefix}accounting-services.html" class="dropdown-item">Accounting Services</a></li>
                                <li><a href="${rootPrefix}payroll.html" class="dropdown-item">Payroll Services</a></li>
                                <li><a href="${rootPrefix}income-tax.html" class="dropdown-item">Income Tax / Direct Tax</a></li>
                                <li><a href="${rootPrefix}gst.html" class="dropdown-item">Indirect Tax / GST</a></li>
                                <li><a href="${rootPrefix}corporate-governance.html" class="dropdown-item">Corporate Governance</a></li>
                                <li><a href="${rootPrefix}tds.html" class="dropdown-item">TDS & Withholding Tax</a></li>
                            </ul>
                        </li>
                        <li class="nav-item"><a href="${rootPrefix}knowledge-bank.html" class="nav-link">Knowledge Bank</a></li>
                        <li class="nav-item"><a href="${rootPrefix}blog.html" class="nav-link">Blogs</a></li>
                        <li class="nav-item"><a href="${rootPrefix}career.html" class="nav-link">Careers</a></li>
                        <li class="nav-item"><a href="${rootPrefix}contact-us.html" class="btn-premium py-2 px-4 text-white text-center d-inline-block">Contact Us</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    `;

    const footerHtml = `
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-md-12 mb-4 mb-lg-0">
                    <div class="footer-logo mb-4">
                        <img src="${rootPrefix}assets/images/web-logo1.png" alt="KNMC Logo" style="height: 48px;">
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
                <p class="copyright-text text-white">© 2026 knmcassociates.com. All Rights Reserved. Powered by <a href="https://adxfire.com" class="text-white text-decoration-none" target="_blank">AdxFire Media</a></p>
            </div>
        </div>
    </footer>
    `;

    document.addEventListener('DOMContentLoaded', () => {
        // Suppress Sys.Component.create crashes on missing DOM elements
        if (window.Sys && window.Sys.Component && typeof window.Sys.Component.create === 'function') {
            const originalSysCreate = window.Sys.Component.create;
            if (!originalSysCreate.__isPatched) {
                const patchedSysCreate = function(type, properties, events, references, element) {
                    if (element === null || element === undefined) {
                        return null;
                    }
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

        // 1. Active menu link highlighter
        const highlightActive = () => {
            const path = window.location.pathname;
            const page = path.split("/").pop();
            document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
                const href = link.getAttribute('href');
                if (href && href.includes(page) && page !== '') {
                    link.classList.add('active');
                }
            });
        };

        if (isRewritten) {
            // Rewritten pages already have their content structured correctly.
            // Still inject navbar + footer below — just skip the legacy DOM transformer.
        } else {

        // 2. DOM transformer for subpages
        const bodyForm = document.querySelector('#form2') || document.querySelector('#form1');
        if (bodyForm) {
            // Safe removal of legacy header/footer controls (no generic .rdTable deletes)
            const idsToRemove = ['#HeaderControl', '#MenuControl', '#Bannercontrol', '#FooterrControl1_Footer'];
            idsToRemove.forEach(id => {
                const el = document.querySelector(id);
                if (el) el.remove();
            });

            let pageContent = document.querySelector('#tbl_forcss1') || 
                              document.querySelector('#HomepagecontentControl_C') || 
                              document.querySelector('.innr-pg-c') ||
                              document.querySelector('.main-table');

            if (pageContent) {
                // Extract and hide legacy page title element to avoid overlap and duplicate displays
                const headText = pageContent.querySelector('[id*="HeadText"]') || pageContent.querySelector('.button_div a') || pageContent.querySelector('.button_div');
                if (headText) {
                    headText.style.display = 'none';
                    const parentBtnDiv = headText.closest('.button_div');
                    if (parentBtnDiv) {
                        parentBtnDiv.style.display = 'none';
                    }
                }

                // Modernizing data tables inside the content
                pageContent.querySelectorAll('table').forEach(tbl => {
                    // Skip layout wrapping tables
                    if (tbl.id && (tbl.id.startsWith('tbl_forcss') || tbl.id.includes('RadDockZone'))) {
                        return;
                    }
                    tbl.removeAttribute('width');
                    tbl.removeAttribute('cellspacing');
                    tbl.removeAttribute('cellpadding');
                    tbl.style.width = '100%';
                    tbl.style.maxWidth = '100%';
                    tbl.style.minWidth = '1000px'; // Prevent squishing and force responsive scrolling on small screens
                    tbl.style.borderCollapse = 'collapse';
                    tbl.classList.add('table', 'table-hover', 'table-bordered');

                    tbl.querySelectorAll('td, th').forEach(cell => {
                        cell.removeAttribute('width');
                        cell.style.width = '';
                        // Hide empty spacer cells
                        const text = cell.textContent ? cell.textContent.trim() : '';
                        const hasElements = cell.querySelector('input, select, button, a, img, span, strong, label, p');
                        if (!text && !hasElements && cell.tagName.toLowerCase() === 'td') {
                            cell.style.display = 'none';
                        }
                    });
                });

                // Modernizing form inputs and selects inside the content
                pageContent.querySelectorAll('input[type="text"], select').forEach(input => {
                    input.classList.add('form-control');
                    input.style.width = '100%';
                    input.style.maxWidth = '100%';
                });

                // Shorten long option and optgroup text to fit mobile screens and prevent native dropdown offset
                pageContent.querySelectorAll('option, optgroup').forEach(el => {
                    if (el.tagName.toLowerCase() === 'optgroup') {
                        const label = el.getAttribute('label');
                        if (label) {
                            el.setAttribute('label', label.replace(/\s*\/\s*\d+(?:\([^)]*\))?/g, '').trim());
                        }
                    } else {
                        const text = el.textContent;
                        if (text) {
                            el.textContent = text.replace(/\s*\/\s*\d+(?:\([^)]*\))?/g, '').trim();
                        }
                    }
                });

                // Modernizing form buttons
                pageContent.querySelectorAll('input[type="button"], input[type="submit"], button, .btn').forEach(btn => {
                    btn.classList.add('btn', 'btn-premium', 'text-white', 'px-4');
                    btn.style.backgroundColor = 'var(--primary-color)';
                    btn.style.color = '#fff';
                    btn.style.border = 'none';
                });

                const mainShell = document.createElement('main');
                mainShell.className = 'container-fluid px-md-5 py-5';
                
                const contentRow = document.createElement('div');
                contentRow.className = 'row justify-content-center';
                
                const contentCol = document.createElement('div');
                contentCol.className = 'col-12';

                // Premium Card Wrapper for legacy pages (max-width constrained for elegant desktop grids)
                const cardWrapper = document.createElement('div');
                cardWrapper.className = 'bg-white rounded-3 shadow-sm p-4 p-md-5 border border-light-subtle';
                cardWrapper.style.maxWidth = '1200px';
                cardWrapper.style.margin = '0 auto';
                
                // Build Breadcrumbs dynamically based on URL pathname
                let rootPrefix = '';
                const pathSegments = window.location.pathname.split('/').filter(s => s.length > 0);
                const resourceIdx = pathSegments.findIndex(s => 
                    s.toLowerCase() === 'resources' || 
                    s.toLowerCase() === 'laws' || 
                    s.toLowerCase() === 'advancesearch' || 
                    s.toLowerCase() === 'notificationsearch'
                );
                
                if (resourceIdx !== -1) {
                    const depth = pathSegments.length - resourceIdx - 1;
                    rootPrefix = '../'.repeat(depth);
                } else {
                    rootPrefix = '../';
                }

                let categoryName = "Knowledge Bank";
                let categoryUrl = "knowledge-bank/index.html";
                const pathLower = window.location.pathname.toLowerCase();
                
                if (pathLower.includes('/calculators/')) {
                    categoryName = "Calculators";
                    categoryUrl = "Knowledge_Bank/Calculators.html";
                } else if (pathLower.includes('/utilities/')) {
                    categoryName = "Utilities";
                    categoryUrl = "Knowledge_Bank/Utilities.html";
                } else if (pathLower.includes('/forms/')) {
                    categoryName = "Forms";
                    categoryUrl = "Knowledge_Bank/Forms.html";
                } else if (pathLower.includes('/links/')) {
                    categoryName = "Links";
                    categoryUrl = "Knowledge_Bank/Links.html";
                } else if (pathLower.includes('/bulletins/')) {
                    categoryName = "Bulletins";
                    categoryUrl = "Knowledge_Bank/Bulletins.html";
                } else if (pathLower.includes('/laws/')) {
                    if (pathLower.includes('rule')) {
                        categoryName = "Rules";
                        categoryUrl = "Knowledge_Bank/Rules.html";
                    } else {
                        categoryName = "Acts";
                        categoryUrl = "Knowledge_Bank/Acts.html";
                    }
                }

                const breadcrumbDiv = document.createElement('div');
                breadcrumbDiv.className = 'kb-breadcrumb mb-4 text-start';
                
                let pageTitleText = "Statutory Resource";
                if (headText) {
                    pageTitleText = headText.textContent.replace(/_/g, ' ').trim();
                } else {
                    const filename = window.location.pathname.split('/').pop();
                    if (filename) {
                        pageTitleText = filename.replace(/\.(html|aspx)/i, '').replace(/_/g, ' ').replace(/cal /i, '');
                    }
                }

                breadcrumbDiv.innerHTML = `
                    <a href="${rootPrefix}index.html">Home</a> &gt; 
                    <a href="${rootPrefix}knowledge-bank/index.html">Knowledge Bank</a> &gt; 
                    <a href="${rootPrefix}resource/${categoryUrl}">${categoryName}</a> &gt; 
                    <span class="text-muted">${pageTitleText}</span>
                `;
                
                cardWrapper.appendChild(breadcrumbDiv);
                
                // Inject clean, standard page title header
                const titleHeader = document.createElement('h1');
                titleHeader.className = 'main-heading text-center mb-4';
                titleHeader.style.fontSize = '2.2rem';
                titleHeader.style.fontWeight = '800';
                titleHeader.style.color = 'var(--primary-color)';
                titleHeader.style.textDecoration = 'none';
                titleHeader.textContent = pageTitleText;
                cardWrapper.appendChild(titleHeader);
                
                cardWrapper.appendChild(pageContent);
                
                contentCol.appendChild(cardWrapper);
                contentRow.appendChild(contentCol);
                mainShell.appendChild(contentRow);
                
                bodyForm.innerHTML = '';
                bodyForm.appendChild(mainShell);
            }
        }

        } // end of !isRewritten block

        // Inject new modern Header
        if (!document.querySelector('header')) {
            const headerEl = document.createElement('div');
            headerEl.innerHTML = headerHtml;
            const injectedHeader = headerEl.firstElementChild;
            document.body.insertBefore(injectedHeader, document.body.firstChild);

            // Add scroll class to header for dynamic styling
            const handleScroll = () => {
                if (window.scrollY > 50) {
                    injectedHeader.classList.add('scrolled');
                } else {
                    injectedHeader.classList.remove('scrolled');
                }
            };
            window.addEventListener('scroll', handleScroll);
            handleScroll();
        }

        // Inject new modern Footer
        if (!document.querySelector('footer')) {
            const footerEl = document.createElement('div');
            footerEl.innerHTML = footerHtml;
            document.body.appendChild(footerEl.firstElementChild);
        }

        // Responsive tables
        document.querySelectorAll('table').forEach(tbl => {
            // Skip layout tables: Telerik layout tables, content containers, header/footer layout tables
            const id = tbl.id || '';
            if (
                tbl.classList.contains('rdTable') ||
                id.startsWith('tbl_forcss') ||
                id.includes('FooterrControl') ||
                id.includes('HeaderControl') ||
                id.includes('Bannercontrol') ||
                tbl.closest('.RadDock') ||
                tbl.closest('header') ||
                tbl.closest('.footer') ||
                tbl.closest('nav') ||
                tbl.closest('.copy-right') ||
                tbl.classList.contains('table-responsive')
            ) {
                return;
            }

            tbl.classList.add('table', 'table-hover');
            if (tbl.parentElement && !tbl.parentElement.classList.contains('table-responsive')) {
                const wrapper = document.createElement('div');
                wrapper.className = 'table-responsive';
                tbl.parentNode.insertBefore(wrapper, tbl);
                wrapper.appendChild(tbl);
            }
        });

        // Style active tab button inside Notification Search page
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

        // Scroll entry animations (Intersection Observer)
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.reveal').forEach(el => {
            revealObserver.observe(el);
        });

        // Numeric count-up animation for stats section
        const countUpActive = (el) => {
            const target = parseInt(el.getAttribute('data-count-to'), 10) || 0;
            const duration = 2000;
            const startTime = performance.now();
            
            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeProgress = 1 - Math.pow(1 - progress, 3);
                const currentVal = Math.floor(easeProgress * target);
                const suffix = el.getAttribute('data-count-suffix') || '';
                el.innerText = currentVal + suffix;
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    el.innerText = target + suffix;
                }
            };
            requestAnimationFrame(animate);
        };

        const statsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll('[data-count-to]').forEach(numEl => {
                        countUpActive(numEl);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        const statsSec = document.querySelector('.stats-section-observe');
        if (statsSec) {
            statsObserver.observe(statsSec);
        }

        highlightActive();

        if (isKnowledgeBankPage()) {
            const kbRoot = computeRootPrefix();
            const loadKbScript = (src, cb) => {
                if (document.querySelector('script[src*="' + src.split('/').pop() + '"]')) {
                    if (cb) cb();
                    return;
                }
                const el = document.createElement('script');
                el.src = kbRoot + src;
                el.onload = cb || null;
                document.body.appendChild(el);
            };
            loadKbScript('assets/js/knowledge-bank.js', () => {
                // Initialized successfully
            });
        }
        
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 50);
    });
})();
