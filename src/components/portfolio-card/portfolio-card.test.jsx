import PortfolioCard from './portfolio-card'
import Tech from '../Tech'

const cb = 'card'

describe('PortfolioCard', () => {
    let props, render

    beforeEach(() => {
        props = {
            project: {
                index: 42,
                name: 'Your mother was a hamster and your father smelled of elderberries',
                description: 'That sure is a long title',
                technologies: [4, 2],
                img: 'johncleese.jpg',
                url: 'montypythonisthebomb.com',
                gitHub: 'Creative github url string',
            },
        }

        render = (changedProps = {}) => mount(<PortfolioCard {...props} {...changedProps} />)
    })

    it('correctly passes values from project prop', () => {
        const component = render()

        expect(component.find(`.${cb}`).length).toEqual(1)

        expect(component.find(`.${cb}__heading`).text()).toEqual('Your mother was a hamster and your father smelled of elderberries')
        expect(component.find(`.${cb}__image`).prop('src')).toEqual('johncleese.jpg')
        expect(component.find(`.${cb}__image`).prop('alt')).toEqual('Screenshot of Your mother was a hamster and your father smelled of elderberries')
        expect(component.find(`.${cb}__description`).text()).toEqual('That sure is a long title')

        expect(component.find(Tech).length).toEqual(2)
        expect(component.find(Tech).at(0).prop('name')).toEqual('Javascript')
        expect(component.find(Tech).at(0).prop('url')).toEqual('images/Techs/javascript.png')
        expect(component.find(Tech).at(0).prop('size')).toEqual('tech-small')
        expect(component.find(Tech).at(1).prop('name')).toEqual('Bootstrap')
        expect(component.find(Tech).at(1).prop('url')).toEqual('images/Techs/bootstrap.png')
        expect(component.find(Tech).at(1).prop('size')).toEqual('tech-small')

        expect(component.find(`.${cb}__link`).at(0).prop('href')).toEqual('montypythonisthebomb.com')
        expect(component.find(`.${cb}__link`).at(0).prop('target')).toEqual('_blank')
        expect(component.find(`.${cb}__link`).at(0).prop('rel')).toEqual('noopener noreferrer')
        expect(component.find(`.${cb}__link i`).at(0).prop('aria-hidden')).toEqual('true')
        expect(component.find(`.${cb}__link .sr-only`).at(0).text()).toEqual('Link to Project (Opens a new window)')

        expect(component.find(`.${cb}__link`).at(1).prop('href')).toEqual('Creative github url string')
        expect(component.find(`.${cb}__link`).at(1).prop('target')).toEqual('_blank')
        expect(component.find(`.${cb}__link`).at(1).prop('rel')).toEqual('noopener noreferrer')
        expect(component.find(`.${cb}__link i`).at(1).prop('aria-hidden')).toEqual('true')
        expect(component.find(`.${cb}__link .sr-only`).at(1).text()).toEqual('Github Link (Opens a new window)')
    })


    it('does not render when project is undefined', () => {
        props.project = undefined
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(0)
    })

    it('does not crash when project is empty', () => {
        props.project = {}
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
    })
})