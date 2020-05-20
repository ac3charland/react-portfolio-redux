import Bio from './bio'

const cb = 'bio'

describe('Bio', () => {
    let props, render

    beforeEach(() => {
        props = {}

        render = (changedProps = {}) => mount(<Bio {...props} {...changedProps} />)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.${cb}__image`).prop('src')).toEqual('headshot.jpg')
        expect(component.find(`.${cb}__image`).prop('alt')).toEqual('Headshot of Alex Charland, Frontend Web Developer')
    })
})