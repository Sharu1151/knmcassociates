/**
 * Knowledge Bank Navigation Structure & Context Mapper
 */
(function(window) {
    'use strict';

    const kbCategories = [
        {
            name: "Calculators",
            icon: "fa-calculator",
            url: "Knowledge_Bank/Calculators.html",
            items: [
                { name: "GST Calculator", url: "resources/Calculators/GST_CALCULATOR/GST_CALCULATOR.html" },
                { name: "Income Tax Calculator", url: "resources/Calculators/Tax_Calculator/cal_Income_Tax.html" },
                { name: "TDS Calculator", url: "resources/Calculators/TDS_Calculator/TDSCalculator2026.html" },
                { name: "Calculate Net Profit", url: "resources/Calculators/Calculate_Net_Profit/Calculate_Net_Profit.html" },
                { name: "Calculate Net Worth", url: "resources/Calculators/Calculate_Net_Worth/Calculate_Net_Worth.html" },
                { name: "Calculate Effective Capital", url: "resources/Calculators/Calculate_Effective_Capital/Calculate_Effective_Capital.html" },
                { name: "HRA", url: "resources/Calculators/HRA/HRA.html" },
                { name: "NSC", url: "resources/Calculators/NSC/Cal_NSC.html" },
                { name: "EMI", url: "resources/Calculators/EMI/EMI.html" },
                { name: "Auto Loan Calculator", url: "resources/Calculators/Auto_Loan_Calculator/AutoLoan.html" },
                { name: "Home Loan Calculator", url: "resources/Calculators/Home_Loan_Calculator/HomeLoanCalculator.html" },
                { name: "Get No. Of Installment", url: "resources/Calculators/Get_No._Of_Instalment/Get_No_Of_Instalment.html" },
                { name: "Developers Calculator", url: "resources/Calculators/RERA_Calculator/Developers_Calculator/RERADEVELOPER.html" },
                { name: "Home Buyer Delay Interest", url: "resources/Calculators/RERA_Calculator/HomeBuyerDelayIntrest_Calculator/HomeBuyerDelayIntrest.html" },
                { name: "Home Buyer Refund", url: "resources/Calculators/RERA_Calculator/HomeBuyerRefund/HomeBuyerRefund.html" }
            ]
        },
        {
            name: "Bulletins",
            icon: "fa-newspaper-o",
            url: "Knowledge_Bank/Bulletins.html",
            items: [
                { name: "Notifications", url: "notificationsearch/Bulletins/Notification/BullNotification/Notification.html" },
                { name: "Circulars", url: "notificationsearch/Bulletins/Circular/BullNotification/Circular.html" },
                { name: "RBI & SEBI", url: "resources/Bulletins/RBISEBI/RBISEBI.html" },
                { name: "Income Tax", url: "resources/Bulletins/Income_Tax/Income_Tax.html" },
                { name: "Service Tax", url: "resources/Bulletins/Service_Tax/Service_Tax.html" },
                { name: "Central Sales Tax", url: "resources/Bulletins/Central_Sales_Tax/Central_Sales_Tax.html" },
                { name: "Excise Matters", url: "resources/Bulletins/Excise_Matters/Excise_Matters.html" },
                { name: "Customs", url: "resources/Bulletins/Customs/Customs.html" },
                { name: "Company Law", url: "resources/Bulletins/Corporate_Matters/Corporate_Matters.html" },
                { name: "Labour Laws", url: "resources/Bulletins/Labour_Laws/Labour_Laws.html" },
                { name: "FEMA", url: "resources/Bulletins/F_E_M_A/F_E_M_A.html" },
                { name: "The LLP Act 2008", url: "resources/Bulletins/News_on_LLP/News_on_LLP.html" },
                { name: "Accounting Standard (INDAS)", url: "resources/Bulletins/Accounting_Standards_INDAS/Accounting_Standards_INDAS.html" },
                { name: "Others", url: "resources/Bulletins/Other/Other.html" },
                { name: "GST", url: "resources/Bulletins/GST/GST.html" },
                { name: "Delhi VAT", url: "resources/Bulletins/Delhi_VAT/Delhi_VAT.html" },
                { name: "Maharashtra VAT", url: "resources/Bulletins/Mumbai_VAT/Mumbai_VAT.html" }
            ]
        },
        {
            name: "Utilities",
            icon: "fa-cogs",
            url: "Knowledge_Bank/Utilities.html",
            items: [
                { name: "Rates of TDS", url: "resources/Utilities/Rates_of_TDS/Rates_of_TDS.html" },
                { name: "Rates of Income Tax", url: "resources/Utilities/Rates_of_Income_Tax/Rates_of_Income_Tax.html" },
                { name: "Rates of Depreciation", url: "resources/Utilities/RATES_OF_DEPRECIATION/RATES_OF_DEPRECIATION.html" },
                { name: "Cost Inflation Index", url: "resources/Utilities/COST_INFLATION_INDEX/COST_INFLATION_INDEX.html" },
                { name: "Interest on NSC", url: "resources/Utilities/INTEREST_ON_NSC/INTEREST_ON_NSC.html" },
                { name: "Stamp Duty", url: "resources/Utilities/STAMP_DUTY/STAMP_DUTY.html" },
                { name: "Gold Silver Rates", url: "resources/Utilities/GOLD_SILVER_RATES/GOLD_SILVER_RATES.html" },
                { name: "MICR Code List", url: "resources/Utilities/MICR_CODE_LIST/MICR_CODE_LIST.html" },
                { name: "IFSC Code List", url: "resources/Utilities/IFSC_CODE_LIST/IFSC_CODE_LIST.html" },
                { name: "HSN Rate List", url: "resources/Utilities/HSN_RATE_LIST/HSN_RATE_LIST.html" },
                { name: "NIC Codes", url: "resources/Utilities/NIC/Division-10_Section-C.html" }
            ]
        },
        {
            name: "Links",
            icon: "fa-link",
            url: "Knowledge_Bank/Links.html",
            items: [
                { name: "Important Links", url: "resources/Links/important_links/important_links.html" },
                { name: "VAT Links", url: "resources/Links/Vat_Links/Vat_Links.html" },
                { name: "Ease of Doing Business", url: "resources/Links/EASE_OF_DOING_BUSINESS/EASE_OF_DOING_BUSINESS.html" }
            ]
        },
        {
            name: "Acts",
            icon: "fa-book",
            url: "Knowledge_Bank/Acts.html",
            items: [
                { name: "Income Tax Act", url: "laws/-26/Income_Tax_Act.html" }
            ]
        },
        {
            name: "Rules",
            icon: "fa-balance-scale",
            url: "Knowledge_Bank/Rules.html",
            items: [
                { name: "Income Tax Rules", url: "laws/-29/Income_Tax_Rules.html" }
            ]
        },
        {
            name: "Forms",
            icon: "fa-file-text-o",
            url: "Knowledge_Bank/Forms.html",
            items: [
                { name: "Income Tax Forms", url: "resources/Forms/Income_Tax_Forms/Income_Tax_Forms.html" },
                { name: "CGST Forms", url: "resources/Forms/CGST_Forms/CGST_Forms.html" }
            ]
        }
    ];

    const getKBCategory = function(pathname) {
        const pathLower = pathname.toLowerCase();
        if (pathLower.includes('/calculators/')) return { name: "Calculators", url: "Knowledge_Bank/Calculators.html", index: 0 };
        if (pathLower.includes('/bulletins/') || pathLower.includes('/notificationsearch/') || pathLower.includes('/advancesearch/')) {
            return { name: "Bulletins", url: "Knowledge_Bank/Bulletins.html", index: 1 };
        }
        if (pathLower.includes('/utilities/')) return { name: "Utilities", url: "Knowledge_Bank/Utilities.html", index: 2 };
        if (pathLower.includes('/links/')) return { name: "Links", url: "Knowledge_Bank/Links.html", index: 3 };
        if (pathLower.includes('/laws/')) {
            if (pathLower.includes('rule')) {
                return { name: "Rules", url: "Knowledge_Bank/Rules.html", index: 5 };
            }
            return { name: "Acts", url: "Knowledge_Bank/Acts.html", index: 4 };
        }
        if (pathLower.includes('/forms/')) return { name: "Forms", url: "Knowledge_Bank/Forms.html", index: 6 };
        
        return { name: "Knowledge Bank", url: "Knowledge_Bank.html", index: -1 };
    };

    window.KBNavigation = {
        categories: kbCategories,
        getContext: getKBCategory
    };
})(window);
