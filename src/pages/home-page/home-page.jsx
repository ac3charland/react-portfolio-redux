import React, {useEffect} from 'react'
import './home-page.scss'
import {useDispatch} from 'react-redux'
import {onHomePage, leavingHomePage} from '../../actions/navigation'
import Landing from '../../components/landing/landing'
import Bio from '../../components/bio/bio'
import PortfolioCarousel from '../../components/portfolio-carousel/portfolio-carousel'
import Technologies from '../../components/technologies/technologies'
import Contact from '../../components/contact/contact'
import {DISPLAY_PROJECTS, DISPLAY_TECHNOLOGIES} from '../../utils/constants'

const cb = 'home'

const HomePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(onHomePage())
        scrollToElement()

        return () => {
            dispatch(leavingHomePage())
        }
    }, [])

    return (
        <div className={cb}>
            <Landing />
            <Bio />
            <PortfolioCarousel projects={DISPLAY_PROJECTS} />
            <Technologies techs={DISPLAY_TECHNOLOGIES} />
            <Contact />
        </div>
    )
}

const scrollToElement = () => {
    const id = window.location.hash
    const e = id ? document.querySelector(id) : null
    if (e) {
        e.focus()
    }
}

export default HomePage