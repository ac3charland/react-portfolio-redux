import Landing from './landing'
import ContactButtons from '../contact-buttons/contact-buttons'

const cb = 'landing'

describe('Landing', () => {
    let props, render

    beforeEach(() => {
        props = {}

        render = (changedProps = {}) => mount(<Landing {...props} {...changedProps} />)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(ContactButtons).prop('darkMode')).toEqual(true)
    })
})