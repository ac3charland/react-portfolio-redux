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

        expect(component.find(`.${cb}__button`).at(0).prop('href')).toEqual('https://www.linkedin.com/in/alex-charland/')
        expect(component.find(`.${cb}__button`).at(0).prop('target')).toEqual('_blank')
        expect(component.find(`.${cb}__button`).at(0).text()).toEqual('Link to LinkedIn Profile (Opens a new window)')
        expect(component.find(`.fa-linkedin-square`).prop('aria-hidden')).toEqual('true')

        expect(component.find(`.${cb}__button`).at(1).prop('href')).toEqual('https://github.com/ac3charland')
        expect(component.find(`.${cb}__button`).at(1).prop('target')).toEqual('_blank')
        expect(component.find(`.${cb}__button`).at(1).text()).toEqual('Link to Github Profile (Opens a new window)')
        expect(component.find(`.fa-github-square`).prop('aria-hidden')).toEqual('true')

        expect(component.find(`.${cb}__button`).at(2).prop('href')).toEqual('mailto:ac3charland@gmail.com')
        expect(component.find(`.${cb}__button`).at(2).prop('target')).toEqual('_self')
        expect(component.find(`.${cb}__button`).at(2).text()).toEqual('Send an email (Opens a new window)')
        expect(component.find(`.fa-envelope`).prop('aria-hidden')).toEqual('true')
    })
})