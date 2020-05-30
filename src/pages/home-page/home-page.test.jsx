import HomePage, {mapStateToProps} from './home-page'
import PortfolioCarousel from '../../components/portfolio-carousel/portfolio-carousel'
import Technologies from '../../components/technologies/technologies'

const cb = 'home'

describe('HomePage', () => {
    let props, render

    beforeEach(() => {
        props = {
            homePageVisted: true,
            markAsVisited: jest.fn(),
        }

        render = (changedProps = {}) => mount(<HomePage {...props} {...changedProps} />)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(PortfolioCarousel).prop('projects')).toEqual([{desc: 'An AWS-powered waffle timer to compensate for my waffle-maker\'s lack of sound.', github: 'https://github.com/ac3charland/waffle-timer', image: '/project-images/waffletimer.jpg', name: 'Waffle Timer', technologies: [{image: '/tech-logos/aws.jpg', name: 'Amazon Web Services'}, {image: '/tech-logos/react.jpg', name: 'React'}, {image: '/tech-logos/css.jpg', name: 'CSS3 (incl. Flexbox & Animations)'}], url: 'https://master.d2c8mxd7ephuq8.amplifyapp.com/'}, {desc: 'The perk of being a web developer is that you get to build your own wedding website!', github: 'https://github.com/ac3charland/CharlandsWedWebsite', image: '/project-images/charlandswed.jpg', name: 'Charlands Wed', technologies: [{image: '/tech-logos/react.jpg', name: 'React'}, {image: '/tech-logos/jest.jpg', name: 'Jest'}, {image: '/tech-logos/backstop.jpg', name: 'Backstop.js'}, {image: '/tech-logos/cypress.jpg', name: 'Cypress'}], url: 'https://www.charlandswed.com/'}, {desc: 'A side project that provides 3rd-party synthesizer patches for the Akai EWI 4000.', github: null, image: '/project-images/ewipatches.jpg', name: 'EWIPatches.com', technologies: [{image: '/tech-logos/aws.jpg', name: 'Amazon Web Services'}, {image: '/tech-logos/react.jpg', name: 'React'}, {image: '/tech-logos/jest.jpg', name: 'Jest'}, {image: '/tech-logos/cypress.jpg', name: 'Cypress'}], url: 'https://www.ewipatches.com/'}, {desc: 'A full-stack MERN application that allows users to create short melodies in a grid-based sequencer. This app was my capstone project at the University of Minnesota web development bootcamp.', github: 'https://github.com/ac3charland/Shreddit', image: '/project-images/shreddit.jpg', name: 'Shreddit', technologies: [{image: '/tech-logos/mongodb.jpg', name: 'MongoDB'}, {image: '/tech-logos/react.jpg', name: 'React'}, {image: '/tech-logos/node.jpg', name: 'Node.js'}], url: 'https://shredditmern.herokuapp.com/'}, {desc: 'A blogging site I built to keep my extended family connected. Technically, this was my first client-facing project!', github: 'https://github.com/ac3charland/FransenFamilyJournal', image: '/project-images/ffj.jpg', name: 'Fransen Family Journal', technologies: [{image: '/tech-logos/passport.jpg', name: 'Passport.js'}, {image: '/tech-logos/mongodb.jpg', name: 'MongoDB'}, {image: '/tech-logos/node.jpg', name: 'Node.js'}], url: 'https://fransenfamilyjournal.herokuapp.com/'}, {desc: 'A skeleton app with my preferred setup for UI, testing, and accessibility. A great place to learn more about my development preferences.', github: 'https://github.com/ac3charland/react-template', image: '/project-images/template.jpg', name: 'React/Redux Template', technologies: [{image: '/tech-logos/react.jpg', name: 'React'}, {image: '/tech-logos/redux.jpg', name: 'Redux'}, {image: '/tech-logos/jest.jpg', name: 'Jest'}, {image: '/tech-logos/backstop.jpg', name: 'Backstop.js'}, {image: '/tech-logos/cypress.jpg', name: 'Cypress'}], url: null}])
        expect(component.find(Technologies).prop('techs')).toEqual([{image: '/tech-logos/react.jpg', name: 'React'}, {image: '/tech-logos/redux.jpg', name: 'Redux'}, {image: '/tech-logos/jest.jpg', name: 'Jest'}, {image: '/tech-logos/backstop.jpg', name: 'Backstop.js'}, {image: '/tech-logos/cypress.jpg', name: 'Cypress'}, {image: '/tech-logos/git.jpg', name: 'Git (incl. Git Flow)'}, {image: '/tech-logos/aws.jpg', name: 'Amazon Web Services'}, {image: '/tech-logos/javascript.jpg', name: 'Javascript (ES6)'}, {image: '/tech-logos/sass.jpg', name: 'CSS Preprocessors (SASS & LESS)'}, {image: '/tech-logos/css.jpg', name: 'CSS3 (incl. Flexbox & Animations)'}, {image: '/tech-logos/html.jpg', name: 'HTML5 (incl. Accessible Design)'}, {image: '/tech-logos/jira.jpg', name: 'Atlassian Software (incl. Jira, Bitbucket, & Confluence)'}, {image: '/tech-logos/bash.jpg', name: 'Shell Scripting'}, {image: '/tech-logos/node.jpg', name: 'Node.js'}, {image: '/tech-logos/mongodb.jpg', name: 'MongoDB'}, {image: '/tech-logos/passport.jpg', name: 'Passport.js'}])
    })

    describe('mapStateToProps', () => {
        [
            {
                description: 'undefined props',
                state: {app: {}},
                expected: {},
            },
            {
                description: 'populated props',
                state: {app: {homePageVisted: true}},
                expected: {visited: true},
            },
        ].forEach(test => {
            it(`correctly maps state to props with ${test.description}`, () => {
                const result = mapStateToProps(test.state)
                expect(result).toEqual(test.expected)
            })
        })
    })
})