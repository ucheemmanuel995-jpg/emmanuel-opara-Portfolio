// Add a new project by adding another object to this array.
// category must be one of: "Data Analytics", "AI & Automation", "Statistics", "Research"
// Leave github/demo as null (not an empty placeholder URL) if a link doesn't exist yet —
// the UI will simply hide that button rather than link somewhere fake.

export const projects = [
  {
    id: 'walmart-retail-sales',
    title: 'Walmart Retail Sales Analysis',
    category: 'Data Analytics',
    tags: ['Data Analytics'],
    summary:
      'An end-to-end retail sales analysis using SQLite and Power BI to identify sales trends, store performance, holiday effects, and business patterns.',
    tech: ['SQLite', 'SQL', 'Power BI', 'Data Analysis'],
    highlights: [
      'Total sales analysis across the store network',
      'Store-by-store performance comparison',
      'Yearly sales trend tracking',
      'Holiday vs. non-holiday sales impact',
      'Store segmentation by performance tier',
    ],
    detail: {
      problem:
        'Retail sales data is scattered across transactions and store records, making it hard to see which stores and periods actually drive performance.',
      objective:
        'Build a repeatable pipeline that turns raw sales records into a clear, queryable view of store and seasonal performance.',
      approach:
        'Loaded and modeled the dataset in SQLite, wrote SQL queries to aggregate sales by store, week, and holiday flag, then built a Power BI dashboard on top for interactive exploration.',
    },
    github: 'https://github.com/ucheemmanuel995-jpg/Walmart-Retail-Sales-Analysis',
    demo: null,
  },
  {
    id: 'imo-infant-mortality',
    title:
      'Statistical Analysis of Nutritional Factors and Infant Mortality in Imo State, Nigeria (2010–2021)',
    category: 'Statistics',
    tags: ['Statistics', 'Research'],
    summary:
      'A statistical research project investigating nutritional factors associated with infant mortality using regression analysis and statistical diagnostics.',
    tech: ['R', 'Statistical Analysis', 'Multiple Linear Regression', 'Statistical Diagnostics', 'Research'],
    highlights: [
      'Multiple linear regression modeling of nutritional predictors',
      'Full statistical diagnostics on the fitted model',
      'Peer-reviewed and published research output',
      'Archived data record on Zenodo',
    ],
    detail: {
      problem:
        'Infant mortality in Imo State has known nutritional dimensions that had not been formally quantified across the 2010–2021 period.',
      objective:
        'Identify which nutritional factors are statistically associated with infant mortality rates over the study period.',
      approach:
        'Applied multiple linear regression in R, ran diagnostic checks on model assumptions, and interpreted coefficients against the nutritional variables studied.',
    },
    github: 'https://github.com/ucheemmanuel995-jpg/Imo-Infant-Mortality-Analysis',
    demo: null,
    publicationUrl: 'https://doi.org/10.9734/ajpas/2025/v27i9807',
    zenodoUrl: 'https://doi.org/10.5281/zenodo.22119655',
    isResearch: true,
  },

   {
    id: 'AJPAS.143681',
    title: 'A Comparative Analysis on the Impact of Household Size on Economic Prosperity in Developing Countries',      
    category: 'Statistics',
    tags: ['Statistics', 'Research'],
    summary:
      'This study investigates the relationship between household size and economic prosperity across five developing nations (Brazil, India, Nigeria, Ukraine, and Vietnam) using secondary data from 2010 to 2021. Employing Multiple Regression Analysis (MRA) alongside diagnostic tests and Ridge regression, the paper evaluates how health, education, and income indices affect average household size, highlighting country-specific socio-economic and cultural variations.',
    tech: ["Multiple Regression Analysis (MRA)", "Ridge Regression", "Diagnostic Testing (Homoscedasticity, Normality, Autocorrelation, Multicollinearity)"],
    highlights: [
      "Analyzes secondary panel/time-series data spanning 2010 to 2021 across five diverse developing nations: Brazil, India, Nigeria, Ukraine, and Vietnam.",
      "Applies Ridge regression to address severe multicollinearity detected in the empirical models for Nigeria and Vietnam.",
      "Reveals significant country-specific variations, demonstrating that variables such as education can exert opposing impacts on household size across different national contexts.",
    ],
    detail: {
      problem:
        'Disparities in healthcare access, spatial inequality, and varying demographic dynamics make it difficult to generalize how socio-economic factors affect household size and economic prosperity across low- and middle-income countries.',
      objective:
        'To evaluate and compare the impact of health, education, and income indices on average household size across five developing countries to inform targeted, nation-specific socio-economic policies.',
      approach:
        'Utilized secondary data from 2010 to 2021 to perform Multiple Regression Analysis, conducted statistical diagnostic tests for regression assumptions, applied Ridge regression where multicollinearity was present, and analyzed country-specific differences.',
    },
    publicationUrl: 'https://doi.org/10.9734/ajpas/2025/v27i9807',
    isResearch: true,
  },

  {
    id: 'log-automation',
    title: 'Log Automation',
    category: 'AI & Automation',
    tags: ['AI & Automation', 'Data Analytics'],
    summary:
      'An automated log analysis system that parses server logs, extracts structured information, analyzes errors and usage patterns, and generates reports.',
    tech: ['Python', 'Pandas', 'FastAPI', 'Docker', 'Data Processing', 'Automation'],
    highlights: [
      'Structured log parsing',
      'Error rate and pattern analysis',
      'User and endpoint-level usage analysis',
      'Automated report generation',
    ],
    detail: {
      problem:
        'Raw server logs are hard to inspect manually, so recurring errors and usage patterns go unnoticed until they cause problems.',
      objective:
        'Turn unstructured log files into structured, queryable data with automatic error and usage reporting.',
      approach:
        'Built a Python/Pandas parsing layer, exposed it through a small FastAPI service, and containerized it with Docker so it runs the same way anywhere.',
    },
    github: 'https://github.com/ucheemmanuel995-jpg/server-log-analyzer',
    githubIsPlaceholder: true,
    demo: 'https://server-log-analyzer.onrender.com/',
  },
  {
    id: 'ai-marketing-copilot',
    title: 'AI Marketing Copilot',
    category: 'AI & Automation',
    status: 'In Development',
    tags: ['AI & Automation'],
    summary:
      'An AI-powered marketing workflow that helps users generate campaign strategies, social media content, captions, and marketing assets.',
    tech: ['React', 'Vite', 'FastAPI', 'Gemini API', 'SQLite', 'AI', 'Automation'],
    workflow: ['Campaign', 'Strategy', 'Content', 'AI Generation', 'Review', 'Publish'],
    highlights: [
      'Campaign strategy generation',
      'AI-assisted social content and captions',
      'Structured review step before publishing',
    ],
    detail: {
      problem:
        'Small teams often lack the time to move from a campaign idea to structured, ready-to-review marketing content.',
      objective:
        'Give a single workflow that takes a campaign brief through strategy, content generation, and review.',
      approach:
        'A React/Vite front end drives a FastAPI backend that calls the Gemini API for generation, with SQLite persisting campaigns and drafts through each stage.',
    },
    github: null,
    demo: null,
  },
  {
    id: 'researchGen-ai',
    title: 'ResearchGenAI',
    category: 'Research',
    status: 'In Development',
    tags: ['Research', 'Statistics', 'AI & Automation'],
    summary:
      'An AI-powered research and statistical report automation platform designed to assist with statistical analysis, modeling, and report generation.',
    tech: ['Python', 'Streamlit', 'AI', 'Statistical Modeling', 'Time Series', 'Automation'],
    highlights: [
      'Exploratory data analysis',
      'Regression modeling',
      'Time-series analysis',
      'Statistical diagnostics',
      'Automated report generation',
    ],
    detail: {
      problem:
        'Producing a full statistical report — analysis, modeling, diagnostics, write-up — is repetitive and time-consuming to do from scratch each time.',
      objective:
        'Give researchers a single tool that runs standard statistical workflows and drafts the report around the results.',
      approach:
        'Built as a Streamlit app in Python, wiring standard regression and time-series routines to an automated report generator.',
    },
    github: 'https://github.com/ucheemmanuel995-jpg/ResearchGenAI',
    demo: 'https://researchgenai.streamlit.app/',
  },
]

export const filterCategories = ['All', 'Data Analytics', 'AI & Automation', 'Statistics', 'Research']
