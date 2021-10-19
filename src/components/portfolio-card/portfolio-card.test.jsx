import PortfolioCard from './portfolio-card'
import Tech from '../tech/tech'

const cb = 'card'

describe('PortfolioCard', () => {
    let props, render

    beforeEach(() => {
        props = {
            project: {
                name: 'Your mother was a hamster and your father smelled of elderberries',
                desc: 'That sure is a long title',
                technologies: [
                    {
                        name: 'Javascript', 
                        image: 'images/Techs/javascript.png',
                        url: 'a.com',
                    },
                    {
                        name: 'Bootstrap',
                        image: 'images/Techs/bootstrap.png',
                        url: 'b.com',
                    },
                ],
                image: 'johncleese.jpg',
                url: 'montypythonisthebomb.com',
                github: 'Creative github url string',
                apple: 'Brought back magsafe!',
                google: 'Don\'t be evil?',
            },
            id: 42,
        }

        render = (changedProps = {}) => mount(<PortfolioCard {...props} {...changedProps} />)
    })

    it('correctly passes values from project prop', () => {
        const component = render()

        expect(component.find(`.${cb}`).length).toEqual(1)

        expect(component.find(`.${cb}__heading`).text()).toEqual('YOUR MOTHER WAS A HAMSTER AND YOUR FATHER SMELLED OF ELDERBERRIES')
        expect(component.find(`.${cb}__image`).prop('src')).toEqual('johncleese.jpg')
        expect(component.find(`.${cb}__image`).prop('alt')).toEqual('Screenshot of Your mother was a hamster and your father smelled of elderberries')
        expect(component.find(`.${cb}__description`).text()).toEqual('That sure is a long title')

        expect(component.find(Tech).length).toEqual(2)
        expect(component.find(Tech).at(0).prop('name')).toEqual('Javascript')
        expect(component.find(Tech).at(0).prop('url')).toEqual('a.com')
        expect(component.find(Tech).at(0).prop('image')).toEqual('images/Techs/javascript.png')
        expect(component.find(Tech).at(0).prop('size')).toEqual('tech-small')
        expect(component.find(Tech).at(1).prop('name')).toEqual('Bootstrap')
        expect(component.find(Tech).at(1).prop('url')).toEqual('b.com')
        expect(component.find(Tech).at(1).prop('image')).toEqual('images/Techs/bootstrap.png')
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

        expect(component.find(`.${cb}__link`).at(2).prop('href')).toEqual('Brought back magsafe!')
        expect(component.find(`.${cb}__link`).at(2).prop('target')).toEqual('_blank')
        expect(component.find(`.${cb}__link`).at(2).prop('rel')).toEqual('noopener noreferrer')
        expect(component.find(`.${cb}__link i`).at(2).prop('aria-hidden')).toEqual('true')
        expect(component.find(`.${cb}__link .sr-only`).at(2).text()).toEqual('Apple App Store Link (Opens a new window)')

        expect(component.find(`.${cb}__link`).at(3).prop('href')).toEqual('Don\'t be evil?')
        expect(component.find(`.${cb}__link`).at(3).prop('target')).toEqual('_blank')
        expect(component.find(`.${cb}__link`).at(3).prop('rel')).toEqual('noopener noreferrer')
        expect(component.find(`.${cb}__link i`).at(3).prop('aria-hidden')).toEqual('true')
        expect(component.find(`.${cb}__link .sr-only`).at(3).text()).toEqual('Google Play Link (Opens a new window)')
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

    it('sets hrefs to null when disabled flag is true', () => {
        props.disabled = true
        const component = render()
        expect(component.find(Tech).at(0).prop('url')).toEqual(null)
        expect(component.find(Tech).at(1).prop('url')).toEqual(null)
        expect(component.find(`.${cb}__link`).at(0).prop('href')).toEqual(null)
        expect(component.find(`.${cb}__link`).at(1).prop('href')).toEqual(null)
    })
})