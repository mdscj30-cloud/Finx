export const glossaryTerms = [
  {
    term: "Accounts Payable (AP)",
    category: "Accounting",
    shortDef: "Money owed by a company to its creditors for goods or services purchased on credit.",
    detailedDefinition: "Accounts Payable (AP) represents a company's short-term debt obligations to its creditors or suppliers. These appear on the balance sheet under current liabilities. AP is created when a company purchases goods or services on credit, meaning they receive the value now but pay for it later. It is essentially an IOU from the business to the vendor. Managing AP is a delicate balancing act: paying too early depletes cash reserves that could be used for growth, while paying too late damages vendor relationships and incurs late fees.",
    whyItMatters: "Efficient AP management is crucial for cash flow optimization. By strategically timing payments, businesses can hold onto their cash longer (increasing liquidity) without defaulting on obligations. It also prevents fraud and duplicate payments through proper invoice verification processes.",
    realWorldExample: "A restaurant receives a $500 delivery of vegetables on Tuesday with 'Net 30' terms. The vegetables are used immediately, but the cash stays in the restaurant's bank account for 30 days. That $500 is recorded as an Account Payable until the check is cut.",
    proTip: "Try to negotiate longer payment terms (e.g., Net-45 or Net-60) with your main suppliers. This acts as an interest-free loan, keeping cash in your business longer to fund operations.",
    relatedTerms: ["Accounts Receivable (AR)", "Working Capital", "Cash Flow"]
  },
  {
    term: "Accounts Receivable (AR)",
    category: "Accounting",
    shortDef: "Money owed to a company by its customers for goods or services delivered but not yet paid for.",
    detailedDefinition: "Accounts Receivable (AR) represents the balance of money due to a firm for goods or services delivered or used but not yet paid for by customers. It is listed on the balance sheet as a current asset. AR is created when you extend credit to a client, allowing them to pay you after delivery. While AR counts as revenue on the Income Statement (under accrual accounting), it is not yet cash. High AR balances with low cash balances can lead to a liquidity crisis where a profitable company cannot pay its own bills.",
    whyItMatters: "AR is often the largest asset for service-based businesses, but it is risky. If a customer goes bankrupt or refuses to pay, that asset becomes worthless (Bad Debt). Minimizing the time it takes to collect AR (Days Sales Outstanding) is the fastest way to improve cash flow without increasing sales.",
    realWorldExample: "A web design agency completes a website for a client in January and sends a $5,000 invoice due in 30 days. The agency records $5,000 in Revenue and $5,000 in Accounts Receivable. No cash has actually entered the bank account yet.",
    proTip: "Automate your invoice follow-ups. Sending reminders 3 days before the due date, on the due date, and 3 days after significantly reduces late payments.",
    relatedTerms: ["Accounts Payable (AP)", "Bad Debt", "DSO"]
  },
  {
    term: "Accrual Accounting",
    category: "Accounting Principles",
    shortDef: "An accounting method that records revenues and expenses when they are incurred, regardless of when cash is exchanged.",
    detailedDefinition: "Accrual Accounting is one of two main accounting methods (the other being Cash Basis). It provides a more accurate picture of a company's financial health by matching revenues to the expenses incurred to generate them in the same period. Under this method, income is reported when it is earned (e.g., when the service is performed), and expenses are reported when they are incurred (e.g., when the bill is received), even if no cash has changed hands yet. This is required by GAAP for larger companies.",
    whyItMatters: "It prevents misleading financial reports. For example, if you pay $12,000 for annual insurance in January, Cash Basis would show a huge loss in January and artificial profit for the rest of the year. Accrual accounting spreads that expense over 12 months, showing the true monthly cost of doing business.",
    realWorldExample: "A construction company builds a deck in December 2023 but doesn't get paid until January 2024. Under Accrual Accounting, the revenue counts for the 2023 tax year. Under Cash Basis, it would count for 2024.",
    proTip: "Most startups should use Accrual Accounting for internal management to understand true profitability, even if they use Cash Basis for taxes to defer payments.",
    relatedTerms: ["Cash Basis Accounting", "GAAP", "Revenue Recognition"]
  },
  {
    term: "Amortization",
    category: "Accounting",
    shortDef: "The process of spreading the cost of an intangible asset over its useful life.",
    detailedDefinition: "Amortization is the practice of spreading the cost of an intangible asset (one without physical form) over its useful life. It is conceptually similar to depreciation, which applies to tangible assets. Amortization expenses appear on the income statement and reduce taxable income. Common items that are amortized include patents, trademarks, copyrights, franchise agreements, and software development costs. It also applies to loan repayments, where an amortization schedule shows how each payment is split between principal and interest.",
    whyItMatters: "It adheres to the 'matching principle' of accounting, ensuring that the cost of an asset is recognized in the same periods that the asset helps generate revenue. Without amortization, a company would take a massive hit to profitability in the year it bought a patent, and look artificially profitable in subsequent years.",
    realWorldExample: "A biotech company spends $100,000 to acquire a patent valid for 10 years. Instead of recording a $100,000 expense in Year 1, they record a $10,000 Amortization Expense each year for 10 years.",
    proTip: "Startup costs (up to $5,000) can be deducted immediately, but costs above that often need to be amortized over 15 years (180 months).",
    relatedTerms: ["Depreciation", "Intangible Assets", "EBITDA"]
  },
  {
    term: "Assets",
    category: "Accounting",
    shortDef: "Resources owned or controlled by a business that are expected to provide future economic benefit.",
    detailedDefinition: "Assets are anything of value owned by a business. They are listed on the Balance Sheet and are generally categorized as Current Assets (cash, inventory, AR - expected to be converted to cash within a year) or Non-Current/Fixed Assets (equipment, real estate, IP - expected to provide value for more than a year). The fundamental accounting equation is: Assets = Liabilities + Equity. This means every asset you own was funded either by borrowing money (liabilities) or by the owner's investment (equity).",
    whyItMatters: "Assets are the engine of your business. However, not all assets are created equal. 'Liquid' assets like cash keep the lights on, while illiquid assets like heavy machinery are harder to use to pay bills. Analyzing the ratio of assets to liabilities is key to understanding solvency.",
    realWorldExample: "Google's servers are fixed assets. The cash in their bank account is a current asset. The patent on their search algorithm is an intangible asset.",
    proTip: "Don't hoard 'dead' assets. If you have equipment or inventory that isn't generating revenue, sell it to convert it back into cash (a more useful asset).",
    relatedTerms: ["Liabilities", "Equity", "Balance Sheet"]
  },
  {
    term: "Audit",
    category: "Compliance",
    shortDef: "An official inspection of an individual's or organization's accounts, typically by an independent body.",
    detailedDefinition: "An audit is an objective examination and evaluation of the financial statements of an organization to ensure that the financial records are a fair and accurate representation of the transactions they claim to represent. Audits can be internal (conducted by employees to check controls) or external (conducted by a CPA firm). The IRS also conducts audits to verify tax compliance. Public companies are required by law to have an annual external audit.",
    whyItMatters: "Audits provide credibility. Investors and banks rarely lend large sums to unaudited companies because they can't trust the numbers. An unqualified ('clean') audit opinion is the gold standard of financial trust.",
    realWorldExample: "A startup raising Series B funding hires a 'Big 4' accounting firm to audit their books. The firm verifies that the $5M revenue reported actually exists by checking bank statements and contacting customers.",
    proTip: "The best audit defense is preparation. Keep digital copies of receipts for every expense over $75 and maintain a clean separation between business and personal funds.",
    relatedTerms: ["GAAP", "Compliance", "General Ledger"]
  },
  {
    term: "Balance Sheet",
    category: "Financial Statements",
    shortDef: "A financial statement that reports a company's assets, liabilities, and shareholders' equity at a specific point in time.",
    detailedDefinition: "The Balance Sheet provides a snapshot of what a company owns and owes, as well as the amount invested by shareholders. Unlike the Income Statement, which covers a period of time (e.g., 'Year 2023'), the Balance Sheet is for a single moment (e.g., 'As of Dec 31, 2023'). It is divided into two sides that must balance: Assets = Liabilities + Shareholder's Equity. It shows the company's net worth and liquidity.",
    whyItMatters: "While the P&L shows if you are profitable, the Balance Sheet shows if you are healthy. A company can be profitable but insolvent (bankrupt) if its liabilities exceed its assets or if it lacks cash to pay immediate debts.",
    realWorldExample: "A real estate company might show low profit on the P&L due to depreciation, but the Balance Sheet reveals they own $50M in property, proving they are a strong company.",
    proTip: "Review your Balance Sheet monthly. Watch the 'Current Ratio' (Current Assets / Current Liabilities). If it drops below 1.0, you are in danger of running out of cash.",
    relatedTerms: ["Income Statement", "Assets", "Liabilities"]
  },
  {
    term: "Bank Reconciliation",
    category: "Bookkeeping",
    shortDef: "The process of matching the balances in an entity's accounting records for a cash account to the corresponding information on a bank statement.",
    detailedDefinition: "Bank Reconciliation is the process of comparing your internal financial records (in software like QuickBooks or Xero) against the records provided by your bank. The goal is to ensure they match exactly. Discrepancies can arise from checks that haven't cleared, deposits in transit, bank fees you forgot to record, or errors in data entry. It is the primary control against fraud and accounting errors.",
    whyItMatters: "If you don't reconcile, you don't know how much money you actually have. You might spend money you think is there, only to bounce a check. It is also the first thing the IRS asks for during an audit to prove your books are reliable.",
    realWorldExample: "Your books say you have $10,000. The bank says $9,500. Reconciliation reveals a $500 check you wrote to a vendor last week that they haven't cashed yet. Your 'adjusted' bank balance matches your books.",
    proTip: "Reconcile strictly every month. Waiting until the end of the year turns a 30-minute task into a week-long nightmare of hunting for 12-month-old missing receipts.",
    relatedTerms: ["General Ledger", "Bookkeeping", "Audit"]
  },
  {
    term: "Bootstrapping",
    category: "Business",
    shortDef: "Building a company from the ground up with nothing but personal savings and the cash coming in from the first sales.",
    detailedDefinition: "Bootstrapping is starting a business without external help or capital (like Venture Capital or Angel Investment). Such startups fund the development of their company through internal cash flow and are cautious with their expenses. While growth may be slower compared to funded competitors, bootstrapped founders retain 100% equity and control over their business decisions.",
    whyItMatters: "It forces financial discipline. You cannot solve problems by throwing money at them; you must solve them with creativity and revenue. This often leads to stronger underlying business fundamentals and unit economics.",
    realWorldExample: "Mailchimp was bootstrapped for nearly 20 years before being acquired for $12 billion. They grew by focusing purely on customer revenue rather than investor metrics.",
    proTip: "Focus on cash flow from Day 1. Since you don't have a pile of VC money to burn, you need customers to pay you upfront to fund your product development.",
    relatedTerms: ["Venture Capital", "Equity", "Cash Flow"]
  },
  {
    term: "Break-Even Analysis",
    category: "Financial Metrics",
    shortDef: "A calculation of the point at which revenues equal expenses.",
    detailedDefinition: "Break-Even Analysis determines the number of units or amount of revenue needed to cover total costs (both fixed and variable). Below this point, the business operates at a loss; above it, at a profit. The formula is: Break-Even Point (Units) = Fixed Costs / (Revenue per Unit - Variable Cost per Unit). Knowing this number is essential for setting prices and sales targets.",
    whyItMatters: "It tells you the minimum performance required to survive. It answers the critical question: 'How many widgets must I sell just to keep the lights on?' It validates whether a business model is viable before you invest heavily.",
    realWorldExample: "A coffee shop has $5,000 in fixed monthly rent/salaries. They make $3 profit on every latte. They need to sell 1,667 lattes ($5000 / $3) per month just to break even.",
    proTip: "Lowering your fixed costs (overhead) lowers your break-even point, making your business more resilient to downturns.",
    relatedTerms: ["Fixed Costs", "Variable Costs", "Profit Margin"]
  },
  {
    term: "Burn Rate",
    category: "Startups",
    shortDef: "The rate at which a company spends its cash supply minus its cash income.",
    detailedDefinition: "Burn Rate is the speed at which a startup is 'burning' through its venture capital to finance overhead before generating positive cash flow. 'Gross Burn' is total spending. 'Net Burn' is spending minus revenue. Investors use this to calculate 'Runway'—the amount of time the company has left before it runs out of money. High burn rates are acceptable for high-growth startups, but only if they lead to significant milestones.",
    whyItMatters: "It is the ticking clock of a startup. If you don't raise more money or become profitable before your runway ends, the company dies. Monitoring burn rate helps founders make tough decisions about hiring and marketing spend.",
    realWorldExample: "A startup has $1M in the bank and spends $100k/month (Net Burn). Their runway is 10 months. They must raise Series A funding or reach profitability within 9 months to be safe.",
    proTip: "Investors often want to see 18-24 months of runway. Adjust your burn rate immediately if your fundraising timeline looks longer than expected.",
    relatedTerms: ["Runway", "Cash Flow", "Venture Capital"]
  },
  {
    term: "Capital Expenditure (CapEx)",
    category: "Accounting",
    shortDef: "Funds used by a company to acquire, upgrade, and maintain physical assets such as property, plants, buildings, technology, or equipment.",
    detailedDefinition: "Capital Expenditures (CapEx) are major investments in the business's future. Unlike Operating Expenses (OpEx) which are deducted immediately, CapEx is capitalized on the Balance Sheet as an asset and depreciated over time. Common CapEx includes buying a new factory, upgrading servers, or purchasing a fleet of vehicles. These are long-term bets on growth.",
    whyItMatters: "Classifying spend as CapEx vs. OpEx affects profit. CapEx makes profit look higher in the short term (because the cost isn't fully deducted yet) but drains cash immediately. Investors watch CapEx closely to see if a company is investing in growth or just maintaining the status quo.",
    realWorldExample: "Amazon spending $1B to build a new fulfillment center is CapEx. Paying the electric bill for that center is OpEx.",
    proTip: "Use the Section 179 tax deduction to deduct the full cost of qualifying CapEx (like equipment) in the current year, rather than waiting for depreciation.",
    relatedTerms: ["Operating Expenses (OpEx)", "Depreciation", "Assets"]
  },
  {
    term: "Capital Gains Tax",
    category: "Tax",
    shortDef: "A tax on the profit realized on the sale of a non-inventory asset.",
    detailedDefinition: "Capital Gains Tax is levied on the profit made from selling an asset (like stocks, real estate, or a business) for more than you paid for it. It is divided into Short-Term (assets held < 1 year, taxed at ordinary income rates) and Long-Term (assets held > 1 year, taxed at lower rates, typically 0%, 15%, or 20%). This structure encourages long-term investment.",
    whyItMatters: "For founders exiting a business or investors selling stock, the difference between short-term and long-term rates can be 20%+ of the total payout. Strategic timing of a sale can save millions in taxes.",
    realWorldExample: "You bought Bitcoin for $10,000 and sold it for $50,000. You have a $40,000 capital gain. If you held it for 11 months, you pay ~37% tax. If you held it for 13 months, you pay ~20% tax.",
    proTip: "Look into QSBS (Qualified Small Business Stock) exemptions. If eligible, founders can exclude up to $10M or 10x their basis from federal capital gains tax upon exit.",
    relatedTerms: ["Basis", "Tax Credits", "Depreciation Recapture"]
  },
  {
    term: "Cash Flow",
    category: "Finance",
    shortDef: "The total amount of money being transferred into and out of a business.",
    detailedDefinition: "Cash Flow is the movement of real money in and out of your accounts. Positive cash flow means more money is coming in than going out. Negative cash flow means the opposite. It is distinct from profit; a company can be profitable on paper (accrual basis) while having negative cash flow because clients haven't paid their invoices yet. Cash flow is categorized into Operations, Investing, and Financing activities.",
    whyItMatters: "Cash is oxygen. You can survive without profit for years (like Amazon did), but you cannot survive without cash for a single payroll cycle. 'Cash Flow Insolvency' is a common cause of bankruptcy for growing small businesses.",
    realWorldExample: "A company sells $100k of goods (Revenue) but allows clients 90 days to pay. They must pay their suppliers $50k immediately. They have $50k profit, but -$50k cash flow this month.",
    proTip: "Use a 13-Week Cash Flow Forecast to predict liquidity crunches before they happen. This gives you time to secure a line of credit.",
    relatedTerms: ["Burn Rate", "Liquidity", "Statement of Cash Flows"]
  },
  {
    term: "Chart of Accounts (COA)",
    category: "Accounting",
    shortDef: "An index of all the financial accounts in the general ledger of a company.",
    detailedDefinition: "The Chart of Accounts (COA) is the backbone of your accounting system. It is a numbered list of every bucket where money is stored or categorized: Assets, Liabilities, Equity, Revenue, and Expenses. A well-organized COA allows for granular reporting (e.g., splitting 'Marketing' into 'Ads', 'Events', and 'Content'). Standard numbering usually starts Assets with 1000, Liabilities with 2000, Equity with 3000, Revenue with 4000, and Expenses with 5000.",
    whyItMatters: "Messy COA = Messy Reports. If you mix 'Office Supplies' with 'Software Subscriptions', you won't know where to cut costs. A clean COA is essential for tax preparation and management decision-making.",
    realWorldExample: "Instead of a generic 'Travel' account, a good COA has sub-accounts: 'Travel - Airfare', 'Travel - Hotels', 'Travel - Meals'. This lets the CFO see exactly why the travel budget is over limit.",
    proTip: "Don't create a new account for every single vendor. Use general categories (e.g., 'Professional Services') and use the Vendor Name field to track specifics.",
    relatedTerms: ["General Ledger", "Bookkeeping", "Financial Statements"]
  },
  {
    term: "Cost of Goods Sold (COGS)",
    category: "Accounting",
    shortDef: "The direct costs attributable to the production of the goods sold in a company.",
    detailedDefinition: "COGS includes all the costs directly tied to creating the product you sell. For a manufacturer, this is raw materials and factory labor. For a SaaS company, it is server hosting fees and customer support. It excludes indirect costs like sales, marketing, and rent (which are Operating Expenses). Revenue minus COGS equals Gross Profit.",
    whyItMatters: "COGS determines your Gross Margin. If your COGS is too high, no amount of sales volume will make you profitable. Investors look at COGS to see how scalable the core product is.",
    realWorldExample: "A bakery sells a cake for $20. The flour, sugar, eggs, and baker's wage cost $8. The COGS is $8. The Gross Profit is $12.",
    proTip: "Regularly bid out your suppliers. A 5% reduction in COGS goes directly to your bottom line, whereas a 5% increase in sales is taxed by variable costs.",
    relatedTerms: ["Gross Margin", "Operating Expenses", "Revenue"]
  },
  {
    term: "Credit Note",
    category: "Bookkeeping",
    shortDef: "A document issued by a seller to a buyer notifying that a credit has been applied to their account.",
    detailedDefinition: "A Credit Note (or Credit Memo) is essentially a negative invoice. It is issued when a customer returns goods, when an invoice was overstated, or as a goodwill gesture/discount after the fact. It reduces the amount the customer owes (Accounts Receivable) without deleting the original audit trail of the invoice.",
    whyItMatters: "Properly using credit notes is vital for sales tax compliance. If you just delete an invoice, you might still owe the sales tax on it in the eyes of the government. A credit note proves the sale was reversed.",
    realWorldExample: "A client is unhappy with a $1,000 service. You agree to a 20% refund. You don't rewrite the invoice; you issue a $200 Credit Note. They now owe $800.",
    proTip: "Apply credit notes immediately to open invoices so your Aging Report reflects the true amount due.",
    relatedTerms: ["Invoice", "Accounts Receivable", "Refund"]
  },
  {
    term: "Depreciation",
    category: "Accounting",
    shortDef: "The allocation of the cost of a tangible asset over its useful life.",
    detailedDefinition: "Depreciation allows a business to write off the cost of a physical asset (like a truck or machine) over the years it is used, rather than all at once. This matches the expense to the revenue the asset helps generate. It is a non-cash expense, meaning it lowers your reported profit (and taxes) without lowering your bank balance in that year.",
    whyItMatters: "It significantly impacts tax liability and EBITDA. Understanding depreciation schedules (Straight-Line vs. Accelerated) is key to tax planning.",
    realWorldExample: "You buy a $50,000 delivery van expected to last 5 years. Using straight-line depreciation, you record a $10,000 expense each year for 5 years, reducing your taxable income by $10k annually.",
    proTip: "Bonus Depreciation (tax law) often allows 100% write-off in Year 1 for qualified assets, offering a massive tax shield for growing companies.",
    relatedTerms: ["Amortization", "Fixed Assets", "EBITDA"]
  },
  {
    term: "Double-Entry Bookkeeping",
    category: "Accounting",
    shortDef: "A system of accounting where every entry to an account requires a corresponding and opposite entry to a different account.",
    detailedDefinition: "Double-Entry is the global standard for accounting. It follows the rule that for every transaction, Total Debits must equal Total Credits. If you spend $100 cash (Credit Cash) to buy software (Debit Expense), the books balance. This system provides a self-checking mechanism that makes it easier to detect errors and fraud compared to single-entry systems (like a checkbook register).",
    whyItMatters: "It ensures the Accounting Equation (Assets = Liabilities + Equity) always stays true. Without double-entry, you cannot produce a Balance Sheet, only an Income Statement.",
    realWorldExample: "You take out a $10,000 loan. You Debit Cash $10,000 (Asset increases) and Credit Loans Payable $10,000 (Liability increases). The books are balanced.",
    proTip: "Modern accounting software (QuickBooks, Xero) does this automatically. You just enter the transaction, and it handles the debits and credits in the background.",
    relatedTerms: ["General Ledger", "Debit vs Credit", "Trial Balance"]
  },
  {
    term: "EBITDA",
    category: "Financial Metrics",
    shortDef: "Earnings Before Interest, Taxes, Depreciation, and Amortization.",
    detailedDefinition: "EBITDA is a measure of a company's overall financial performance and is used as an alternative to net income in some circumstances. By stripping out the costs of debt (interest), tax jurisdiction (taxes), and capital investments (depreciation/amortization), it attempts to show the pure operating profit of the business core. It is the primary metric used in business valuation (e.g., 'The company sold for 10x EBITDA').",
    whyItMatters: "It allows for 'apples-to-apples' comparisons between companies with different debt structures or in different tax environments. However, it can be misleading because it ignores the very real costs of capital expenditures.",
    realWorldExample: "Company A has $1M Net Income but paid $2M in Interest. Company B has $3M Net Income but paid $0 Interest. Their EBITDA might be identical, showing their operations are equally strong despite the net income difference.",
    proTip: "Don't rely solely on EBITDA. Check 'Free Cash Flow' to see if the business is actually generating cash.",
    relatedTerms: ["Net Income", "Valuation", "Operating Profit"]
  },
  {
    term: "Employer Identification Number (EIN)",
    category: "Tax",
    shortDef: "A unique nine-digit number assigned by the IRS to business entities operating in the United States.",
    detailedDefinition: "An EIN is essentially a Social Security Number for your business. It is required to open a business bank account, hire employees, and file business tax returns. Even sole proprietors often get one to avoid giving out their personal SSN to clients.",
    whyItMatters: "It is the first step in separating your business identity from your personal identity, which is crucial for liability protection (the 'Corporate Veil'). Without it, you are just an individual in the eyes of the IRS and banks.",
    realWorldExample: "Jane starts a graphic design LLC. Before she can accept a check made out to her company name, the bank requires an EIN to open the account.",
    proTip: "You can get an EIN for free instantly on the IRS website. Do not pay third-party services for this.",
    relatedTerms: ["LLC", "SS-4", "Tax Compliance"]
  },
  {
    term: "Equity",
    category: "Accounting",
    shortDef: "The value of the shares issued by a company, or the owner's claim on assets after liabilities are deducted.",
    detailedDefinition: "Equity represents the ownership interest in the business. On the Balance Sheet, Equity = Assets - Liabilities. It consists of the money originally invested by owners (Capital Contributions) plus the profits the company has retained over time (Retained Earnings). In a startup, equity is the currency used to attract investors and employees.",
    whyItMatters: "Positive equity means the company is worth something. Negative equity means the company owes more than it owns (insolvency). Protecting equity value is the primary fiduciary duty of the board of directors.",
    realWorldExample: "You buy a house for $500k with a $400k mortgage. Your equity is $100k. If the house value rises to $600k, your equity becomes $200k.",
    proTip: "Be careful giving away equity early. 'Expensive' money is giving up 20% of your company for $50k at the seed stage, which could be worth millions later.",
    relatedTerms: ["Assets", "Liabilities", "Retained Earnings"]
  },
  {
    term: "Fiscal Year",
    category: "Tax",
    shortDef: "A one-year period that companies and governments use for financial reporting and budgeting.",
    detailedDefinition: "A Fiscal Year is a 12-month accounting period that does not necessarily end on December 31st (Calendar Year). Companies often choose a fiscal year that aligns with their natural business cycle. For example, retailers often end their fiscal year in January to capture the full holiday return season before closing the books.",
    whyItMatters: "Choosing the right fiscal year can smooth out income reporting and simplify tax prep. However, IRS permission is often required to change it once set.",
    realWorldExample: "A school's fiscal year runs July 1 to June 30 to match the academic calendar. Reporting on a calendar year would split the school year in half, making the data less useful.",
    proTip: "If you are an S-Corp or Partnership, you are generally required to use a Calendar Year unless you have a valid business reason not to.",
    relatedTerms: ["Calendar Year", "Tax Year", "Compliance"]
  },
  {
    term: "Fixed Assets",
    category: "Accounting",
    shortDef: "Assets which are purchased for long-term use and are not likely to be converted quickly into cash.",
    detailedDefinition: "Fixed Assets (or Property, Plant, and Equipment - PP&E) are the physical tools a company uses to generate revenue. They include buildings, machinery, computers, furniture, and vehicles. Unlike inventory, they are not sold to customers. They are depreciated over their useful life.",
    whyItMatters: "Managing fixed assets is key to capital budgeting. They tie up large amounts of cash and require maintenance. Asset turnover ratios help measure how efficiently a company uses its fixed assets to generate sales.",
    realWorldExample: "An airline's planes are fixed assets. The fuel they burn is an expense. The tickets they sell are revenue.",
    proTip: "Maintain a 'Fixed Asset Register' to track the location, value, and depreciation status of every major item. This is critical for insurance claims if a fire or theft occurs.",
    relatedTerms: ["Current Assets", "Depreciation", "CapEx"]
  },
  {
    term: "General Ledger (GL)",
    category: "Accounting",
    shortDef: "The master set of accounts that summarizes all transactions occurring within an entity.",
    detailedDefinition: "The General Ledger is the central repository of all accounting data. Every transaction—sales, deposits, payments, journal entries—flows into the GL. It is organized by the Chart of Accounts. Financial statements (Balance Sheet, P&L) are essentially summaries generated from the GL data.",
    whyItMatters: "If it's not in the GL, it didn't happen. The integrity of the GL determines the accuracy of all reporting. Errors in the GL propagate to tax returns and investor reports.",
    realWorldExample: "When you record a $50 sale in QuickBooks, the software automatically updates the 'Cash' and 'Sales Revenue' accounts in the General Ledger.",
    proTip: "Review your GL detail for 'Uncategorized Expenses' monthly. This is a common dumping ground for lazy bookkeeping that triggers audit flags.",
    relatedTerms: ["Chart of Accounts", "Double-Entry", "Journal Entry"]
  },
  {
    term: "Gross Margin",
    category: "Financial Metrics",
    shortDef: "Net Sales minus the Cost of Goods Sold (COGS).",
    detailedDefinition: "Gross Margin represents the percent of total sales revenue that the company retains after incurring the direct costs associated with producing the goods and services it sells. Formula: (Revenue - COGS) / Revenue. It measures the efficiency of production. Software companies often have high gross margins (80%+), while retailers have low margins (20-30%).",
    whyItMatters: "It indicates the potential profitability of the business. If gross margins are low, you must sell massive volume to cover overhead. If high, you can survive on lower volume.",
    realWorldExample: "You sell software for $100. It costs $10 in server fees to host it. Your Gross Profit is $90. Your Gross Margin is 90%.",
    proTip: "Focus on improving Gross Margin before increasing ad spend. Improving margin flows to the bottom line immediately; increasing volume is harder.",
    relatedTerms: ["COGS", "Net Income", "Profit Margin"]
  },
  {
    term: "Income Statement (P&L)",
    category: "Financial Statements",
    shortDef: "A financial statement that reports a company's financial performance over a specific accounting period.",
    detailedDefinition: "The Income Statement, or Profit and Loss (P&L), summarizes revenues, costs, and expenses incurred during a specific period (e.g., Q1 2024). It starts with the top line (Revenue) and subtracts costs step-by-step to arrive at the bottom line (Net Income). It answers the question: 'Are we making money?'",
    whyItMatters: "It is the primary report used by managers to evaluate performance and by lenders to assess ability to repay loans. However, it does not show liquidity (that's the Cash Flow Statement).",
    realWorldExample: "Top Line: $1M Sales. Minus COGS ($400k) = Gross Profit $600k. Minus OpEx ($300k) = Operating Profit $300k. Minus Taxes ($50k) = Net Income $250k.",
    proTip: "Compare your P&L 'Year-Over-Year' (YOY). Comparing this December to last December is more useful than comparing December to November due to seasonality.",
    relatedTerms: ["Balance Sheet", "Revenue", "Net Income"]
  },
  {
    term: "Independent Contractor (1099)",
    category: "Tax",
    shortDef: "A person or entity contracted to perform work for—or provide services to—another entity as a non-employee.",
    detailedDefinition: "A 1099 contractor provides services but is not an employee. They control their own hours, tools, and methods. The hiring company does not withhold taxes or pay benefits. Contractors receive a Form 1099-NEC at year-end instead of a W-2. Misclassifying an employee as a contractor to save on taxes is a major DOL and IRS violation.",
    whyItMatters: "Hiring contractors offers flexibility and lower overhead (no payroll tax, no health insurance). However, if you treat them like employees (dictating 9-5 hours, providing laptops), you risk massive penalties.",
    realWorldExample: "You hire a designer to build a logo for $500. They are a contractor. You hire a receptionist to sit at a desk 40 hours a week. They are an employee.",
    proTip: "Always have a written Independent Contractor Agreement signed before work begins, explicitly stating they are not an employee.",
    relatedTerms: ["W-2", "Payroll Tax", "Compliance"]
  },
  {
    term: "Liabilities",
    category: "Accounting",
    shortDef: "A company's legal financial debts or obligations that arise during the course of business operations.",
    detailedDefinition: "Liabilities are what you owe. They are listed on the Balance Sheet. Current Liabilities are due within a year (AP, credit cards, short-term loans). Long-Term Liabilities are due after a year (mortgages, multi-year bonds). Liabilities are settled over time through the transfer of economic benefits including money, goods, or services.",
    whyItMatters: "Liabilities aren't bad; they are leverage. Using debt to finance growth can be cheaper than giving up equity. The danger is when liabilities exceed the ability to pay (insolvency).",
    realWorldExample: "Apple issuing bonds to raise cash is creating a liability. The cash received is an asset. They use the cash to build products to generate returns higher than the interest on the bonds.",
    proTip: "Watch your Debt-to-Equity ratio. Banks get nervous if your business is financed 90% by debt and only 10% by owner equity.",
    relatedTerms: ["Assets", "Equity", "Accounts Payable"]
  },
  {
    term: "Limited Liability Company (LLC)",
    category: "Business Formation",
    shortDef: "A business structure in the US that protects its owners from personal responsibility for its debts or liabilities.",
    detailedDefinition: "An LLC is a hybrid entity that combines the liability protection of a corporation with the tax simplicity of a partnership. Owners are called 'members'. If the LLC is sued or goes bankrupt, the members' personal assets (house, car) are generally safe. LLCs are 'pass-through' entities by default, meaning profits are taxed only on the members' personal tax returns, avoiding double taxation.",
    whyItMatters: "It is the most popular structure for small businesses because it is flexible and easy to set up. It creates the 'Corporate Veil' necessary for risk management.",
    realWorldExample: "Two friends start a consulting firm. They form an LLC. If the firm is sued for bad advice, the friends might lose the money in the business account, but they won't lose their personal homes.",
    proTip: "Single-Member LLCs are disregarded entities for tax purposes (filing Schedule C), but still provide legal protection.",
    relatedTerms: ["S-Corporation", "Sole Proprietorship", "Pass-Through Entity"]
  },
  {
    term: "Liquidity",
    category: "Finance",
    shortDef: "The efficiency or ease with which an asset or security can be converted into ready cash without affecting its market price.",
    detailedDefinition: "Liquidity measures how quickly you can pay your bills. Cash is the most liquid asset. Real estate is illiquid (it takes months to sell). A company is 'liquid' if it has enough cash to meet immediate obligations. Liquidity Ratios (Current Ratio, Quick Ratio) are key health metrics.",
    whyItMatters: "Solvency is long-term; liquidity is short-term. You can have $10M in assets (land), but if you have $0 cash and a $5k payroll due tomorrow, you are illiquid and in trouble.",
    realWorldExample: "During the 2008 crisis, many banks were solvent (assets > liabilities) but illiquid (couldn't sell assets fast enough to pay withdrawals), leading to collapse.",
    proTip: "Keep a 'Cash Buffer' of 3-6 months of expenses in a liquid savings account. Do not lock all your profit into long-term investments.",
    relatedTerms: ["Cash Flow", "Working Capital", "Solvency"]
  },
  {
    term: "Net Income",
    category: "Financial Metrics",
    shortDef: "The total profit (or loss) of the company after all expenses, including taxes, have been deducted from revenue.",
    detailedDefinition: "Net Income (the 'Bottom Line') is the final result of the Income Statement. Formula: Revenue - COGS - Expenses - Taxes = Net Income. It represents the actual increase in shareholder value for the period. It is the number used to calculate Earnings Per Share (EPS).",
    whyItMatters: "It is the ultimate scorecard of business success. While revenue shows size, net income shows efficiency and viability. Public companies are judged relentlessly on quarterly Net Income growth.",
    realWorldExample: "Company A sells $100M but spends $110M. Net Income is -$10M. Company B sells $10M but spends $8M. Net Income is $2M. Company B is profitable; A is not.",
    proTip: "Don't confuse Net Income with Cash Flow. You can have high Net Income but zero cash if all that income is tied up in unpaid invoices (AR).",
    relatedTerms: ["Revenue", "EBITDA", "Profit Margin"]
  },
  {
    term: "Nexus",
    category: "Tax",
    shortDef: "The level of connection between a business and a taxing jurisdiction (state) that requires the business to register and pay taxes there.",
    detailedDefinition: "Nexus is the concept of 'sufficient physical presence'. If you have nexus in a state, you must collect sales tax and pay income tax there. Traditionally, this meant having an office or employee. However, the 2018 'Wayfair' Supreme Court ruling established 'Economic Nexus', meaning selling over a certain dollar amount (usually $100k) or transaction count (200) in a state can trigger nexus even without physical presence.",
    whyItMatters: "E-commerce sellers often unknowingly trigger nexus in 20+ states. Failing to collect sales tax results in the business owing the back-tax plus penalties out of their own pocket.",
    realWorldExample: "A California company sells $200k of software to customers in New York. Even with no office in NY, they likely have Economic Nexus and must collect NY sales tax.",
    proTip: "Use automated tax software (like Avalara or TaxJar) to track your sales by state and alert you when you cross nexus thresholds.",
    relatedTerms: ["Sales Tax", "Use Tax", "Compliance"]
  },
  {
    term: "Operating Expenses (OpEx)",
    category: "Accounting",
    shortDef: "The expenses which are related to the operation of a business, or to the operation of a device, component, piece of equipment or facility.",
    detailedDefinition: "OpEx covers the day-to-day costs of running a business that are not directly tied to production (COGS). Examples include rent, utilities, marketing, R&D, legal fees, and administrative salaries. OpEx is fully tax-deductible in the year it is incurred.",
    whyItMatters: "Controlling OpEx is the primary way management influences profitability in the short term. 'Lean' operations focus on minimizing OpEx to maximize margins.",
    realWorldExample: "Uber's cost to pay drivers is COGS. Uber's cost to pay their engineers to code the app is R&D (a form of OpEx). Uber's Super Bowl ad is Marketing (OpEx).",
    proTip: "Review OpEx quarterly. Subscription bloat (SaaS tools nobody uses) is a common form of wasted OpEx in modern companies.",
    relatedTerms: ["CapEx", "COGS", "EBITDA"]
  },
  {
    term: "Qualified Business Income (QBI)",
    category: "Tax",
    shortDef: "A tax deduction that allows eligible self-employed and small-business owners to deduct up to 20% of their qualified business income.",
    detailedDefinition: "Introduced by the Tax Cuts and Jobs Act (TCJA) of 2017, the QBI deduction (Section 199A) allows owners of pass-through entities (LLCs, S-Corps, Sole Props) to deduct 20% of their business income from their personal taxes. This effectively lowers the effective tax rate on small business profits. There are income limits and restrictions for 'Specified Service Trades or Businesses' (SSTBs) like doctors, lawyers, and consultants.",
    whyItMatters: "It is a massive tax break. If you make $100k profit, you might only pay tax on $80k. Structuring your salary vs. profit distribution in an S-Corp can optimize this deduction.",
    realWorldExample: "Joe, a plumber (not an SSTB), makes $150k net profit. He can potentially deduct $30k (20%) from his taxable income, saving him thousands in federal tax.",
    proTip: "This calculation is complex. Always have a CPA run the numbers, especially if your income is over the phase-out thresholds ($191,950 for singles in 2024).",
    relatedTerms: ["Pass-Through Entity", "S-Corporation", "Tax Strategy"]
  },
  {
    term: "Return on Investment (ROI)",
    category: "Financial Metrics",
    shortDef: "A performance measure used to evaluate the efficiency or profitability of an investment.",
    detailedDefinition: "ROI measures the gain or loss generated on an investment relative to the amount of money invested. Formula: (Net Profit / Cost of Investment) x 100. It is the universal language for justifying spend. Positive ROI means the investment paid for itself and more.",
    whyItMatters: "It guides capital allocation. A business should pour money into high-ROI activities (e.g., a marketing channel returning 500%) and cut low-ROI activities. It forces emotion out of decision making.",
    realWorldExample: "You spend $1,000 on Google Ads and get $5,000 in sales. Your profit on those sales is $2,000. ROI = ($2,000 - $1,000 cost) / $1,000 cost = 100%.",
    proTip: "Consider the 'Time to ROI'. An investment that returns 20% in 1 month is better than one that returns 20% in 5 years.",
    relatedTerms: ["Profit Margin", "CapEx", "Break-Even Analysis"]
  },
  {
    term: "Runway",
    category: "Startups",
    shortDef: "The amount of time a company has until it goes out of business, assuming current income and expenses stay constant.",
    detailedDefinition: "Runway is a calculation of how many months a startup can keep operating before it runs out of cash. Formula: Current Cash Balance / Monthly Net Burn Rate. It is the most important survival metric for pre-revenue or loss-making companies.",
    whyItMatters: "It dictates strategy. If you have 24 months of runway, you can focus on long-term R&D. If you have 3 months, you must cut costs or raise funds immediately. Running out of runway usually means bankruptcy.",
    realWorldExample: "Startup X has $2 million in the bank. They lose $200,000 per month. They have 10 months of runway ($2M / $200k).",
    proTip: "Always plan to raise your next round when you have 6-9 months of runway left. Fundraising takes time, and you have zero leverage if you are desperate.",
    relatedTerms: ["Burn Rate", "Cash Flow", "Bootstrapping"]
  },
  {
    term: "S-Corporation",
    category: "Tax Structure",
    shortDef: "A tax designation for corporations that lets them pass their income, losses, deductions, and credits directly to shareholders without paying federal corporate tax.",
    detailedDefinition: "An S-Corp is not a legal entity type (like an LLC) but a tax election made with the IRS (Form 2553). It avoids 'double taxation' (paying tax at the corporate level and then again on dividends). The key benefit is that owners can split their income between 'Salary' (subject to expensive FICA taxes) and 'Distributions' (not subject to FICA taxes), potentially saving 15.3% on the distribution portion.",
    whyItMatters: "It is the go-to tax structure for profitable small businesses earning over ~$80k/year. The administrative cost (payroll, tax return) is outweighed by the FICA tax savings.",
    realWorldExample: "An owner makes $100k profit. As an LLC, they pay FICA on all $100k ($15k tax). As an S-Corp, they take a $50k salary (pay FICA on $50k) and $50k distribution (pay $0 FICA). Savings: ~$7,500.",
    proTip: "You must pay yourself a 'Reasonable Salary'. If you pay yourself $0 salary and $100k distribution to avoid all taxes, the IRS will audit and penalize you.",
    relatedTerms: ["LLC", "C-Corporation", "Payroll Tax"]
  },
  {
    term: "Working Capital",
    category: "Financial Metrics",
    shortDef: "The difference between a company’s current assets and its current liabilities.",
    detailedDefinition: "Working Capital measures a company's short-term financial health and operational efficiency. Formula: Current Assets - Current Liabilities. Positive working capital means the company can pay off its short-term debts and still have capital to invest in operations. Negative working capital implies potential liquidity trouble.",
    whyItMatters: "It represents the cash tied up in the business cycle. Growing businesses often need MORE working capital (to buy inventory for future sales). 'Working Capital Loans' exist specifically to bridge this gap.",
    realWorldExample: "Walmart has massive negative working capital because they sell inventory (Cash in) fast, but pay suppliers (Cash out) slowly. They use suppliers' money to fund operations. This is efficient power, not weakness.",
    proTip: "Improve working capital by collecting AR faster, turning inventory faster, and paying AP slower (but on time).",
    relatedTerms: ["Current Ratio", "Liquidity", "Cash Flow"]
  },
  {
    term: "Zero-Based Budgeting",
    category: "Finance",
    shortDef: "A method of budgeting in which all expenses must be justified for each new period.",
    detailedDefinition: "In Zero-Based Budgeting (ZBB), you don't start with last year's budget and add 5%. You start at zero. Every expense—whether it's a software subscription, a marketing campaign, or a headcount—must be justified from scratch for the new period. It forces managers to prove that an expense is essential for current goals.",
    whyItMatters: "It prevents 'budget bloat' and autopilot spending. It is highly effective for cost-cutting during downturns or for resetting the culture in a bloated organization.",
    realWorldExample: "Instead of assuming the Marketing Dept gets $50k because they had $50k last year, the CFO asks: 'What specific campaigns will you run, and what is the ROI?' If they can only justify $30k, the budget is $30k.",
    proTip: "ZBB is time-consuming. Don't do it every month. Doing a 'Zero-Base' reset once a year is usually sufficient.",
    relatedTerms: ["Forecasting", "OpEx", "Variance Analysis"]
  }
];