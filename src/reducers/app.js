import {ON_HOME_PAGE, LEAVING_HOME_PAGE, ABOVE_SCROLL_THRESHOLD, BELOW_SCROLL_THRESHOLD} from '../utils/constants'

export function app(state = {}, action = {}) {
    switch(action.type) {
        case ON_HOME_PAGE:
            return {...state, onHomePage: true}
        case LEAVING_HOME_PAGE:
            return {...state, onHomePage: undefined}
        case ABOVE_SCROLL_THRESHOLD:
            return {...state, isBelowScrollThreshold: false}
        case BELOW_SCROLL_THRESHOLD:
            return {...state, isBelowScrollThreshold: true}
        default:
            return state
    }
}