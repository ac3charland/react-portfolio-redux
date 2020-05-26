import PortfolioCarousel from './portfolio-carousel'
import Tech from '../Tech'

const cb = 'portfolio-carousel'

describe('PortfolioCarousel', () => {
    let props, render

    beforeEach(() => {
        props = {}

        render = (changedProps = {}) => mount(<PortfolioCarousel {...props} {...changedProps} />)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
    })
})