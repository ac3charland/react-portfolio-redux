import Technologies from './technologies'
import Tech from '../tech/tech'

const cb = 'technologies'

describe('Technologies', () => {
    let props, render

    beforeEach(() => {
        props = {
            techs: [
                {name: 'Malbolge', image: 'malboge.wtf', url: 'https://en.wikipedia.org/wiki/Malbolge'},
                {name: 'LOLCODE', image: 'lolcat.jpg', url: 'https://en.wikipedia.org/wiki/LOLCODE'},
            ],
        }

        render = (changedProps = {}) => mount(<Technologies {...props} {...changedProps} />)
    })

    it('renders and displays its technologies', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`#technologies`).prop('tabIndex')).toEqual('-1')
        expect(component.find(`.${cb}__tech-wrapper`).length).toEqual(2)
        expect(component.find(Tech).at(0).prop('index')).toEqual(0)
        expect(component.find(Tech).at(0).prop('name')).toEqual('Malbolge')
        expect(component.find(Tech).at(0).prop('url')).toEqual('https://en.wikipedia.org/wiki/Malbolge')
        expect(component.find(Tech).at(0).prop('image')).toEqual('malboge.wtf')
        expect(component.find(Tech).at(1).prop('index')).toEqual(1)
        expect(component.find(Tech).at(1).prop('name')).toEqual('LOLCODE')
        expect(component.find(Tech).at(1).prop('url')).toEqual('https://en.wikipedia.org/wiki/LOLCODE')
        expect(component.find(Tech).at(1).prop('image')).toEqual('lolcat.jpg')
    })

    it('handles setting active technology', () => {
        const component = render()
        expect(component.find('.active-card-none').length).toEqual(1)
        component.setState({selectedTech: 1})
        expect(component.find('.active-card-none').length).toEqual(0)
        expect(component.find('.active-card-1').length).toEqual(1)
    })

    it('does not crash with empty props', () => {
        props = {}
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
    })
})