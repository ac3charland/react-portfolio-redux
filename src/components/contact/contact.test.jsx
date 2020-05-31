import Contact from './contact'

const cb = 'contact'

describe('ContactButtons', () => {
    let props, render

    beforeEach(() => {
        props = {}

        render = (changedProps = {}) => mount(<Contact {...props} {...changedProps} />)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`#contact`).prop('tabIndex')).toEqual('-1')
    })
})