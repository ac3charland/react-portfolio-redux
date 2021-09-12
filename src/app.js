import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import NavBar from './components/nav-bar/nav-bar'
import Footer from './components/footer/footer'
import HomePage from './pages/home-page/home-page'
import ResumePage from './pages/resume-page/resume-page'
import {SCROLL_CHANGE_THRESHOLD, RESUME_URL, ROOT_URL} from './utils/constants'
import {setBelowScrollThreshold, setAboveScrollThreshold} from './actions/scroll'
import {getIsNavBarActive} from './selectors/app'

const App = () => {
    const dispatch = useDispatch()
    const isBelowScrollThreshold = useSelector(getIsNavBarActive)

    useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY >= SCROLL_CHANGE_THRESHOLD && !isBelowScrollThreshold) {
                dispatch(setBelowScrollThreshold())
            }
            else if (window.scrollY < SCROLL_CHANGE_THRESHOLD && isBelowScrollThreshold) {
                dispatch(setAboveScrollThreshold())
            }
        }
        window.addEventListener('scroll', changeBackground, {passive: true})

        return () => window.removeEventListener('scroll', changeBackground)
    }, [isBelowScrollThreshold])

    return (
        <React.StrictMode>
            <Router>
                <div className='content-wrapper'>
                    <div className='flex'>
                        <NavBar />
                        <div className='page-wrapper'>
                            <Switch>
                                <Route exact path={ROOT_URL} component={HomePage} />
                                <Route component={HomePage} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        </React.StrictMode>
    )
}

export default App
