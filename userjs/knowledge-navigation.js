/**
 * Knowledge Bank Navigation Structure & Context Mapper (Links & Acts Only)
 */
(function(window) {
    'use strict';

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

    window.KBNavigation = {
        categories: kbCategories,
        getContext: getKBCategory
    };
})(window);
