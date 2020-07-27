import {Provider} from 'react-redux'
import HomePage from './home-page'
import PortfolioCarousel from '../../components/portfolio-carousel/portfolio-carousel'
import Technologies from '../../components/technologies/technologies'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockStore = configureStore([thunk])
const cb = 'home'

describe('HomePage', () => {
    let props, render, store

    beforeEach(() => {
        store = mockStore({})
        props = {
            homePageVisted: true,
            markAsVisited: jest.fn(),
        }

        render = (changedProps = {}) => mount(<Provider store={store}><HomePage {...props} {...changedProps} /></Provider>)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(PortfolioCarousel).prop('projects')).toEqual(expectedProjects)
        expect(component.find(Technologies).prop('techs')).toEqual(expectedTechnologies)
    })
})

const expectedProjects = [
    {
        name: 'Charlands Wed',
        desc: 'The perk of being a web developer is that you get to build your own wedding website!',
        technologies: [
            {name: 'React', image: '/tech-logos/react.jpg', url: 'https://reactjs.org/'},
            {name: 'Jest', image: '/tech-logos/jest.jpg', url: 'https://jestjs.io/'},
            {name: 'Backstop.js', image: '/tech-logos/backstop.jpg', url: 'https://garris.github.io/BackstopJS/'},
            {name: 'Cypress', image: '/tech-logos/cypress.jpg', url: 'https://www.cypress.io/'},
        ],
        image: '/project-images/charlandswed.jpg',
        url: 'https://www.charlandswed.com/',
        github: 'https://github.com/ac3charland/CharlandsWedWebsite',
    },
    {
        name: 'EWIPatches',
        desc: 'A side project that provides 3rd-party synthesizer patches for the Akai EWI 4000.',
        technologies: [
            {name: 'Amazon Web Services', image: '/tech-logos/aws.jpg', url: 'https://aws.amazon.com/'},
            {name: 'React', image: '/tech-logos/react.jpg', url: 'https://reactjs.org/'},
            {name: 'Jest', image: '/tech-logos/jest.jpg', url: 'https://jestjs.io/'},
            {name: 'Cypress', image: '/tech-logos/cypress.jpg', url: 'https://www.cypress.io/'},
        ],
        image: '/project-images/ewipatches.jpg',
        url: 'https://www.ewipatches.com/',
        github: undefined,
    },
    {
        name: 'Waffle Timer',
        desc: "An AWS-powered waffle timer to compensate for my waffle-maker's lack of sound.",
        technologies: [
            {name: 'Amazon Web Services', image: '/tech-logos/aws.jpg', url: 'https://aws.amazon.com/'},
            {name: 'React', image: '/tech-logos/react.jpg', url: 'https://reactjs.org/'},
            {name: 'CSS3 (incl. Flexbox & Animations)', image: '/tech-logos/css.jpg', url: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets'},
        ],
        image: '/project-images/waffletimer.jpg',
        url: 'https://master.d2c8mxd7ephuq8.amplifyapp.com/',
        github: 'https://github.com/ac3charland/waffle-timer',
    },
    {
        name: 'Shreddit',
        desc: 'A full-stack MERN application that allows users to create short melodies in a grid-based sequencer. This app was my capstone project at the University of Minnesota web development bootcamp.',
        technologies: [
            {name: 'MongoDB', image: '/tech-logos/mongodb.jpg', url: 'https://www.mongodb.com/'},
            {name: 'React', image: '/tech-logos/react.jpg', url: 'https://reactjs.org/'},
            {name: 'Node.js', image: '/tech-logos/node.jpg', url: 'https://nodejs.org/en/'},
        ],
        image: '/project-images/shreddit.jpg',
        url: 'https://shredditmern.herokuapp.com/',
        github: 'https://github.com/ac3charland/Shreddit',
    },
    {
        name: 'Fransen Family Journal',
        desc: 'A blogging site I built to keep my extended family connected. Technically, this was my first client-facing project!',
        technologies: [
            {name: 'Passport.js', image: '/tech-logos/passport.jpg', url: 'http://www.passportjs.org/'},
            {name: 'MongoDB', image: '/tech-logos/mongodb.jpg', url: 'https://www.mongodb.com/'},
            {name: 'Node.js', image: '/tech-logos/node.jpg', url: 'https://nodejs.org/en/'},
        ],
        image: '/project-images/ffj.jpg',
        url: 'https://fransenfamilyjournal.herokuapp.com/',
        github: 'https://github.com/ac3charland/FransenFamilyJournal',
    },
    {
        name: 'React/Redux Template',
        desc: 'A skeleton app with my preferred setup for UI, testing, and accessibility. A great place to learn more about my development preferences.',
        technologies: [
            {name: 'React', image: '/tech-logos/react.jpg', url: 'https://reactjs.org/'},
            {name: 'Redux', image: '/tech-logos/redux.jpg', url: 'https://redux.js.org/'},
            {name: 'Jest', image: '/tech-logos/jest.jpg', url: 'https://jestjs.io/'},
            {name: 'Backstop.js', image: '/tech-logos/backstop.jpg', url: 'https://garris.github.io/BackstopJS/'},
            {name: 'Cypress', image: '/tech-logos/cypress.jpg', url: 'https://www.cypress.io/'},
        ],

        image: '/project-images/template.jpg',
        url: undefined,
        github: 'https://github.com/ac3charland/react-template',
    },
]

const expectedTechnologies = [
    {name: 'React', image: '/tech-logos/react.jpg', url: 'https://reactjs.org/'},
    {name: 'Redux', image: '/tech-logos/redux.jpg', url: 'https://redux.js.org/'},
    {name: 'Jest', image: '/tech-logos/jest.jpg', url: 'https://jestjs.io/'},
    {name: 'Backstop.js', image: '/tech-logos/backstop.jpg', url: 'https://garris.github.io/BackstopJS/'},
    {name: 'Cypress', image: '/tech-logos/cypress.jpg', url: 'https://www.cypress.io/'},
    {name: 'Git (incl. Git Flow)', image: '/tech-logos/git.jpg', url: 'https://git-scm.com/'},
    {name: 'Amazon Web Services', image: '/tech-logos/aws.jpg', url: 'https://aws.amazon.com/'},
    {name: 'Javascript (ES6)', image: '/tech-logos/javascript.jpg', url: 'https://en.wikipedia.org/wiki/JavaScript'},
    {name: 'CSS Preprocessors (SASS & LESS)', image: '/tech-logos/sass.jpg', url: 'https://sass-lang.com/'},
    {name: 'CSS3 (incl. Flexbox & Animations)', image: '/tech-logos/css.jpg', url: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets'},
    {name: 'HTML5 (incl. Accessible Design)', image: '/tech-logos/html.jpg', url: 'https://en.wikipedia.org/wiki/HTML'},
    {name: 'Atlassian Software (incl. Jira, Bitbucket, & Confluence)', image: '/tech-logos/jira.jpg', url: 'https://www.atlassian.com/software'},
    {name: 'Shell Scripting', image: '/tech-logos/bash.jpg', url: 'https://en.wikipedia.org/wiki/Shell_script'},
    {name: 'Node.js', image: '/tech-logos/node.jpg', url: 'https://nodejs.org/en/'},
    {name: 'MongoDB', image: '/tech-logos/mongodb.jpg', url: 'https://www.mongodb.com/'},
    {name: 'Passport.js', image: '/tech-logos/passport.jpg', url: 'http://www.passportjs.org/'},
]