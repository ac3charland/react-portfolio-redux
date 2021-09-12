import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import './nav-bar.scss'
import Logo from './logo512.png'
import {RESUME_URL, PROJECTS_ID, CONTACT_ID, TECHNOLOGIES_ID, ROOT_URL} from '../../utils/constants'
import {getIsNavBarActive} from '../../selectors/app'

const cb = 'navbar'

const NavBar = () => {

    const [menuOpen, setMenu] = useState(false)
    const onHomePage = useSelector(state => state.app.onHomePage)

    const toggleMenu = () => {
        setMenu(!menuOpen)
    }

    const menuCSS = menuOpen ? 'open' : 'closed'
    const menuIcon = menuOpen ? 'fa-times' : 'fa-bars'

    const isNavBarActive = useSelector(getIsNavBarActive)

    return (
        <div className={`${cb} ${isNavBarActive ? 'active' : ''}`}>
            <div className={`${cb}__content-wrapper`}>
                <a className={`${cb}__home`} href='/'>
                    <img className={`${cb}__logo`} src={Logo} alt='Alex Charland Frontend Web Developer Site Logo' />
                </a>
                <div className={`${cb}__links ${menuCSS}`}>
                    <button className={`icon ${menuCSS}`} onClick={toggleMenu}><i className={`fa ${menuIcon}`}></i></button>
                    <a id={'resume-link'} className={`${cb}__link ${menuCSS}`} href={RESUME_URL}>Resume</a>
                    {onHomePage ?
                        <React.Fragment>
                            <button id={'projects-link'} className={`${cb}__link ${menuCSS}`} onClick={() => scrollToElement(PROJECTS_ID)}>Projects</button>
                            <button id={'technologies-link'} className={`${cb}__link ${menuCSS}`} onClick={() => scrollToElement(TECHNOLOGIES_ID)}>Skills</button>
                            <button id={'contact-link'} className={`${cb}__link ${menuCSS}`} onClick={() => scrollToElement(CONTACT_ID)}>Contact</button>
                        </React.Fragment> :
                        <React.Fragment>
                            <a id={'projects-link'} className={`${cb}__link ${menuCSS}`} href={ROOT_URL + '#' + PROJECTS_ID}>Projects</a>
                            <a id={'technologies-link'} className={`${cb}__link ${menuCSS}`} href={ROOT_URL + '#' + TECHNOLOGIES_ID}>Skills</a>
                            <a id={'contact-link'} className={`${cb}__link ${menuCSS}`} href={ROOT_URL + '#' + CONTACT_ID}>Contact</a>
                        </React.Fragment>
                    }
                </div>
            </div>
        </div>
    )
}

const scrollToElement = id => {
    const e = document.getElementById(id)
    if (e) {
        e.scrollIntoView({
            behavior: 'smooth',
        })
        setTimeout(() => e.focus(), 1000)
    }
}

export default NavBar