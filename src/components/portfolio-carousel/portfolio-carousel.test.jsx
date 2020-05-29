import PortfolioCarousel from './portfolio-carousel'
import PortfolioCard from '../portfolio-card/portfolio-card'

const cb = 'portfolio-carousel'

describe('PortfolioCarousel', () => {
    let props, render

    beforeEach(() => {
        props = {
            projects: [
                {a: 'b'},
                {c: 'd'},
            ],
        }

        render = (changedProps = {}) => mount(<PortfolioCarousel {...props} {...changedProps} />)
    })

    it('renders and displays its projects', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(PortfolioCard).length).toEqual(2)
        expect(component.find(PortfolioCard).at(0).prop('id')).toEqual(0)
        expect(component.find(PortfolioCard).at(0).prop('project')).toEqual({a: 'b'})
        expect(component.find(PortfolioCard).at(1).prop('id')).toEqual(1)
        expect(component.find(PortfolioCard).at(1).prop('project')).toEqual({c: 'd'})
    })

    it('does not crash with empty props', () => {
        props = {}
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
    })
})