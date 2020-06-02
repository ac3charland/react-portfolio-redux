import Tech from './tech'

const cb = 'tech'

describe('Tech', () => {
    let props, render

    beforeEach(() => {
        props = {
            index: 42,
            size: 'Supersized',
            name: 'Malbolge',
            image: 'malboge.jpg',
            url: 'https://en.wikipedia.org/wiki/Malbolge',
            onMouseEnter: jest.fn(),
            onMouseLeave: jest.fn(),
        }

        render = (changedProps = {}) => mount(<Tech {...props} {...changedProps} />)
    })

    it('correctly passes values from project prop', () => {
        const component = render()

        expect(component.find(`.${cb}`).length).toEqual(1)

        expect(component.find(`.${cb}__title`).text()).toEqual('Malbolge')
        expect(component.find(`.${cb} a`).prop('href')).toEqual('https://en.wikipedia.org/wiki/Malbolge')
        expect(component.find(`.${cb} a`).text()).toEqual('Malbolge(Opens a new window)')
        expect(component.find(`.${cb}__image`).prop('src')).toEqual('malboge.jpg')
        expect(component.find(`.${cb}__image`).prop('alt')).toEqual('Malbolge')
        expect(component.find(`.${cb}__image`).prop('onMouseEnter')).toEqual(props.onMouseEnter)
        expect(component.find(`.${cb}__image`).prop('onMouseLeave')).toEqual(props.onMouseLeave)
        expect(component.find(`.Supersized`).length).toEqual(1)
    })

    it('does not crash when props are empty', () => {
        props = {}
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
    })
})