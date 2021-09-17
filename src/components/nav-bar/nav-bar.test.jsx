import NavBar from './nav-bar'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

const mockStore = configureStore([thunk])
const cb = 'navbar'

describe('NavBar', () => {
    let props, render, store

    beforeEach(() => {
        props = {}
        store = mockStore({app: {}})

        render = (changedProps = {}) => mount(<Provider store={store}><NavBar {...props} {...changedProps} /></Provider>)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.${cb} a`).length).toEqual(4)
        expect(component.find(`.${cb} button`).length).toEqual(2)
        expect(component.find(`.${cb}__link`).at(0).prop('href')).toEqual('https://tinyurl.com/yc8h9fx3')
        expect(component.find(`.${cb}__link`).at(1).prop('href')).toEqual('/#projects')
        expect(component.find(`.${cb}__link`).at(2).prop('href')).toEqual('/#technologies')
        expect(component.find(`.${cb}__link`).at(3).prop('href')).toEqual('/#contact')
    })

    it('renders on home page with scroll buttons without crashing', () => {
        store = mockStore({app: {onHomePage: true}})
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.${cb} a`).length).toEqual(1)
        expect(component.find(`.${cb} button`).length).toEqual(6)
        expect(component.find(`.${cb}__link`).at(0).prop('href')).toEqual('https://tinyurl.com/yc8h9fx3')
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
})