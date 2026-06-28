/**
 * Knowledge Bank Modernization - Shell Transformer & Layout Engine (Links & Acts Only)
 */
(function(window) {
    'use strict';

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
                        if (!text && !hasElements && cell.tagName.toLowerCase() === 'td') {
                            cell.style.display = 'none'; // Collapse empty helper spacer columns
                        }
                    });

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
                const kbCtx = window.KBNavigation.getContext(path);
                
                let sidebarHtml = `<h5 class="sidebar-title mb-4"><i class="fa fa-folder-open me-2 text-primary"></i>Knowledge Base</h5>`;
                sidebarHtml += `<div class="accordion accordion-flush" id="kbAccordion">`;

                window.KBNavigation.categories.forEach((cat, index) => {
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
                mobileMenuBtn.className = 'btn btn-outline-primary py-2 px-3 d-flex align-items-center gap-2';
                mobileMenuBtn.innerHTML = `<i class="fa fa-bars"></i> Categories`;
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
                if (localSearchInput && localSuggestions && window.KBSearch) {
                    window.KBSearch.init(localSearchInput, localSuggestions, pageContent);
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
