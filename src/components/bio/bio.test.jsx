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
        expect(component.find(`.${cb}__image`).prop('alt')).toEqual('Headshot of Alex Charland, Frontend Web Developer')
        expect(component.find(`.${cb} a`).at(0).prop('href')).toEqual('https://www.bestbuy.com/')
        expect(component.find(`.${cb} a`).at(1).prop('href')).toEqual('https://developer.apple.com/swift/')
        expect(component.find(`.${cb} a`).at(2).prop('href')).toEqual('https://bootcamp.umn.edu/coding/')
        expect(component.find(`.${cb} a`).at(3).prop('href')).toEqual('https://alexfranzen.bandcamp.com/')
        expect(component.find(`.${cb} a`).at(4).prop('href')).toEqual('https://github.com/ac3charland')
    })
})