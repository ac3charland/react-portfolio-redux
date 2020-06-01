import ContactButtons from './contact-buttons'

const cb = 'contact-buttons'

describe('ContactButtons', () => {
    let props, render

    beforeEach(() => {
        props = {}

        render = (changedProps = {}) => mount(<ContactButtons {...props} {...changedProps} />)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.dark`).length).toEqual(0)

        expect(component.find(`.${cb}__button`).at(0).prop('href')).toEqual('https://www.linkedin.com/in/alex-charland/')
        expect(component.find(`.${cb}__button`).at(0).text()).toEqual('Link to LinkedIn Profile')
        expect(component.find(`.fa-linkedin-square`).prop('aria-hidden')).toEqual('true')

        expect(component.find(`.${cb}__button`).at(1).prop('href')).toEqual('https://github.com/ac3charland')
        expect(component.find(`.${cb}__button`).at(1).text()).toEqual('Link to Github Profile')
        expect(component.find(`.fa-github-square`).prop('aria-hidden')).toEqual('true')

        expect(component.find(`.${cb}__button`).at(2).prop('href')).toEqual('https://tinyurl.com/y8nas45z')
        expect(component.find(`.${cb}__button`).at(2).text()).toEqual('Send an email (Opens a new window)')
        expect(component.find(`.fa-envelope`).prop('aria-hidden')).toEqual('true')
    })

    it('applies darkmode styling', () => {
        props.darkMode = true
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.dark`).length).toEqual(1)
    })
})