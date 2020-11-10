export const ROOT_URL = '/'
export const RESUME_URL = '/resume'

export const emptyFunction = () => {}

// Section IDs
export const PROJECTS_ID = 'projects'
export const TECHNOLOGIES_ID = 'technologies'
export const CONTACT_ID = 'contact'
export const RESUME_ID = 'resume-heading'

// External URLs
export const LINKEDIN_URL = 'https://www.linkedin.com/in/alex-charland/'
export const GITHUB_PROFILE_URL = 'https://github.com/ac3charland'
export const EMAIL_URL = 'https://tinyurl.com/y8nas45z'
export const BASH_PROFILE_URL = 'https://github.com/ac3charland/BashProfile'
export const READGEEK_SCRAPER_URL = 'https://github.com/ac3charland/ReadGeekScraper'
export const RESUME_DOWNLOAD_URL = 'https://tinyurl.com/yc8h9fx3'
export const BEST_BUY_URL = 'https://www.bestbuy.com/'
export const SWIFT_URL = 'https://developer.apple.com/swift/'
export const BOOTCAMP_URL = 'https://bootcamp.umn.edu/coding/'
export const MUSIC_URL = 'https://alexfranzen.bandcamp.com/'
export const HTML_URL = 'https://en.wikipedia.org/wiki/HTML'
export const CSS_URL = 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets'
export const JS_URL = 'https://en.wikipedia.org/wiki/JavaScript'
export const GIT_URL = 'https://git-scm.com/'
export const REACT_URL = 'https://reactjs.org/'
export const REDUX_URL = 'https://redux.js.org/'
export const MONGODB_URL = 'https://www.mongodb.com/'
export const PASSPORT_URL = 'http://www.passportjs.org/'
export const JEST_URL = 'https://jestjs.io/'
export const BACKSTOP_URL = 'https://garris.github.io/BackstopJS/'
export const CYPRESS_URL = 'https://www.cypress.io/'
export const BASH_URL = 'https://en.wikipedia.org/wiki/Shell_script'
export const ATLASSIAN_URL = 'https://www.atlassian.com/software'
export const AWS_URL = 'https://aws.amazon.com/'
export const NODE_URL = 'https://nodejs.org/en/'
export const SASS_URL = 'https://sass-lang.com/'

// Image URLs
export const SITE_LOGO = 'logo512.png'
export const HEADSHOT = 'headshot.jpg'

// Project images
const generateProjectUrl = file => `/project-images/${file}.jpg`
export const FRANSEN_FAMILY_JOURNAL_IMAGE = generateProjectUrl('ffj')
export const SHREDDIT_IMAGE = generateProjectUrl('shreddit')
export const CHARLANDS_WED_IMAGE = generateProjectUrl('charlandswed')
export const EWIPATCHES_IMAGE = generateProjectUrl('ewipatches')
export const TEMPLATE_APP_IMAGE = generateProjectUrl('template')
export const WAFFLE_TIMER_IMAGE = generateProjectUrl('waffletimer')

// Tech logos
const generateLogoUrl = file => `/tech-logos/${file}.jpg`
export const HTML_ICON = generateLogoUrl('html')
export const CSS_ICON = generateLogoUrl('css')
export const JS_ICON = generateLogoUrl('javascript')
export const GIT_ICON = generateLogoUrl('git')
export const REACT_ICON = generateLogoUrl('react')
export const REDUX_ICON = generateLogoUrl('redux')
export const PASSPORT_ICON = generateLogoUrl('passport')
export const MONGO_ICON = generateLogoUrl('mongodb')
export const JEST_ICON = generateLogoUrl('jest')
export const BACKSTOP_ICON = generateLogoUrl('backstop')
export const CYPRESS_ICON = generateLogoUrl('cypress')
export const BASH_ICON = generateLogoUrl('bash')
export const JIRA_ICON = generateLogoUrl('jira')
export const AWS_ICON = generateLogoUrl('aws')
export const NODE_ICON = generateLogoUrl('node')
export const SASS_ICON = generateLogoUrl('sass')

// Redux Actions
export const ON_HOME_PAGE = 'ON_HOME_PAGE'
export const LEAVING_HOME_PAGE = 'LEAVING_HOME_PAGE'

// Technologies
class Technology {
    constructor(name, image, url) {
        this.name = name
        this.image = image
        this.url = url
    }
}

export const HTML = new Technology('HTML5 (incl. Accessible Design)', HTML_ICON, HTML_URL)
export const CSS = new Technology('CSS3 (incl. Flexbox & Animations)', CSS_ICON, CSS_URL)
export const JAVASCRIPT = new Technology('Javascript (ES6)', JS_ICON, JS_URL)
export const GIT = new Technology('Git (incl. Git Flow)', GIT_ICON, GIT_URL)
export const REACT = new Technology('React', REACT_ICON, REACT_URL)
export const REDUX = new Technology('Redux', REDUX_ICON, REDUX_URL)
export const MONGODB = new Technology('MongoDB', MONGO_ICON, MONGODB_URL)
export const PASSPORT = new Technology('Passport.js', PASSPORT_ICON, PASSPORT_URL)
export const JEST = new Technology('Jest', JEST_ICON, JEST_URL)
export const BACKSTOP = new Technology('Backstop.js', BACKSTOP_ICON, BACKSTOP_URL)
export const CYPRESS = new Technology('Cypress', CYPRESS_ICON, CYPRESS_URL)
export const BASH = new Technology('Shell Scripting', BASH_ICON, BASH_URL)
export const JIRA = new Technology('Atlassian Software (incl. Jira, Bitbucket, & Confluence)', JIRA_ICON, ATLASSIAN_URL)
export const AWS = new Technology('Amazon Web Services', AWS_ICON, AWS_URL)
export const NODE = new Technology('Node.js', NODE_ICON, NODE_URL)
export const SASS = new Technology('CSS Preprocessors (SASS & LESS)', SASS_ICON, SASS_URL)

export const DISPLAY_TECHNOLOGIES = [
    REACT,
    REDUX,
    JEST,
    BACKSTOP,
    CYPRESS,
    GIT,
    AWS,
    JAVASCRIPT,
    SASS,
    CSS,
    HTML,
    JIRA,
    BASH,
    NODE,
    MONGODB,
    PASSPORT,
]

// Projects
class Project {
    constructor(name, desc, technologies, image, url, github) {
        this.name = name
        this.desc = desc
        this.technologies = technologies || []
        this.image = image
        this.url = url
        this.github = github
    }
}

export const FRANSEN_FAMILY_JOURNAL = new Project(
    'Fransen Family Journal',
    'A blogging site I built to keep my extended family connected. Technically, this was my first client-facing project!',
    [PASSPORT, MONGODB, NODE],
    FRANSEN_FAMILY_JOURNAL_IMAGE,
    'https://fransenfamilyjournal.herokuapp.com/',
    'https://github.com/ac3charland/FransenFamilyJournal'
)

export const SHREDDIT = new Project(
    'Shreddit',
    'A full-stack MERN application that allows users to create short melodies in a grid-based sequencer. This app was my capstone project at the University of Minnesota web development bootcamp.',
    [MONGODB, REACT, NODE],
    SHREDDIT_IMAGE,
    'https://shredditmern.herokuapp.com/',
    'https://github.com/ac3charland/Shreddit'
)

export const CHARLANDS_WED = new Project(
    'Charlands Wed',
    'The perk of being a web developer is that you get to build your own wedding website!',
    [REACT, JEST, BACKSTOP, CYPRESS],
    CHARLANDS_WED_IMAGE,
    'https://www.charlandswed.com/',
    'https://github.com/ac3charland/CharlandsWedWebsite'
)

export const EWIPATCHES = new Project(
    'EWIPatches',
    'A side project that provides 3rd-party synthesizer patches for the Akai EWI 4000.',
    [AWS, REACT, JEST, CYPRESS],
    EWIPATCHES_IMAGE,
    'https://www.ewipatches.com/',
    null
)

export const WAFFLE_TIMER = new Project(
    'Waffle Timer',
    'An AWS-powered waffle timer to compensate for my waffle-maker\'s lack of sound.',
    [AWS, REACT, CSS],
    WAFFLE_TIMER_IMAGE,
    'https://master.d2c8mxd7ephuq8.amplifyapp.com/',
    'https://github.com/ac3charland/waffle-timer'
)

export const TEMPLATE_APP = new Project(
    'React/Redux Template',
    'A skeleton app with my preferred setup for UI, testing, and accessibility. A great place to learn more about my development preferences.',
    [REACT, REDUX, JEST, BACKSTOP, CYPRESS],
    TEMPLATE_APP_IMAGE,
    null,
    'https://github.com/ac3charland/react-template'
)

export const DISPLAY_PROJECTS = [
    CHARLANDS_WED, 
    EWIPATCHES,
    WAFFLE_TIMER, 
    TEMPLATE_APP,
]

