import {Provider} from 'react-redux'
import HomePage from './home-page'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockStore = configureStore([thunk])
const cb = 'home'

describe('HomePage', () => {
    let props, render, store

    beforeEach(() => {
        store = mockStore({})
        props = {
            homePageVisted: true,
            markAsVisited: jest.fn(),
        }

        render = (changedProps = {}) => mount(<Provider store={store}><HomePage {...props} {...changedProps} /></Provider>)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
    })
})
