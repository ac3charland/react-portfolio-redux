import NavBar, {mapStateToProps} from './nav-bar'

const cb = 'navbar'

describe('NavBar', () => {
    let props, render

    beforeEach(() => {
        props = {}

        render = (changedProps = {}) => mount(<NavBar {...props} {...changedProps} />)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.${cb} a`).length).toEqual(5)
        expect(component.find(`.${cb} button`).length).toEqual(1)
        expect(component.find(`.${cb}__home`).prop('href')).toEqual('/')
        expect(component.find(`.${cb}__link`).at(0).prop('href')).toEqual('/resume')
        expect(component.find(`.${cb}__link`).at(1).prop('href')).toEqual('/#projects')
        expect(component.find(`.${cb}__link`).at(2).prop('href')).toEqual('/#technologies')
        expect(component.find(`.${cb}__link`).at(3).prop('href')).toEqual('/#contact')
    })

    it('renders on home page with scroll buttons without crashing', () => {
        props.onHomePage = true
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.${cb} a`).length).toEqual(2)
        expect(component.find(`.${cb} button`).length).toEqual(4)
        expect(component.find(`.${cb}__home`).prop('href')).toEqual('/')
        expect(component.find(`.${cb}__link`).at(0).prop('href')).toEqual('/resume')
    })

    it('toggles between open and closed', () => {
        const component = render()

        expect(component.find('button.closed').length).toEqual(1)
        expect(component.find('button.open').length).toEqual(0)
        expect(component.find('.fa-bars').length).toEqual(1)
        expect(component.find('.fa-times').length).toEqual(0)

        component.find('.icon').simulate('click')
        
        expect(component.find('button.closed').length).toEqual(0)
        expect(component.find('button.open').length).toEqual(1)
        expect(component.find('.fa-bars').length).toEqual(0)
        expect(component.find('.fa-times').length).toEqual(1)
    })

    describe('mapStateToProps', () => {
        [
            {
                description: 'undefined props',
                state: {app: {}},
                expected: {},
            },
            {
                description: 'populated props',
                state: {app: {onHomePage: true}},
                expected: {onHomePage: true},
            },
        ].forEach(test => {
            it(`correctly maps state to props with ${test.description}`, () => {
                const result = mapStateToProps(test.state)
                expect(result).toEqual(test.expected)
            })
        })
    })
})