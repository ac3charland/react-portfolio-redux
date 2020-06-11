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
                {e: 'f'},
            ],
        }

        render = (changedProps = {}) => mount(<PortfolioCarousel {...props} {...changedProps} />)
    })

    it('renders and displays its projects', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`#projects`).prop('tabIndex')).toEqual('-1')
        expect(component.find(PortfolioCard).length).toEqual(9)
        expect(component.find(PortfolioCard).at(0).prop('disabled')).toEqual(true)
        expect(component.find(PortfolioCard).at(1).prop('disabled')).toEqual(true)
        expect(component.find(PortfolioCard).at(2).prop('disabled')).toEqual(true)
        expect(component.find(PortfolioCard).at(3).prop('id')).toEqual(3)
        expect(component.find(PortfolioCard).at(3).prop('project')).toEqual({a: 'b'})
        expect(component.find(PortfolioCard).at(3).prop('disabled')).toEqual(false)
        expect(component.find(PortfolioCard).at(4).prop('id')).toEqual(4)
        expect(component.find(PortfolioCard).at(4).prop('project')).toEqual({c: 'd'})
        expect(component.find(PortfolioCard).at(4).prop('disabled')).toEqual(false)
        expect(component.find(PortfolioCard).at(5).prop('id')).toEqual(5)
        expect(component.find(PortfolioCard).at(5).prop('project')).toEqual({e: 'f'})
        expect(component.find(PortfolioCard).at(5).prop('disabled')).toEqual(false)
        expect(component.find(PortfolioCard).at(6).prop('disabled')).toEqual(true)
        expect(component.find(PortfolioCard).at(7).prop('disabled')).toEqual(true)
        expect(component.find(PortfolioCard).at(8).prop('disabled')).toEqual(true)
    })

    it('does not crash with empty props', () => {
        props = {}
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
    })
})