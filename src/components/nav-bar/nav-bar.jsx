import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import './nav-bar.scss'
import Logo from './logo512.png'
import {RESUME_DOWNLOAD_URL, PROJECTS_ID, CONTACT_ID, TECHNOLOGIES_ID, ROOT_URL, BIO_ID, HOME_ID} from '../../utils/constants'
import {getIsNavBarActive} from '../../selectors/app'

const cb = 'navbar'

const NavBar = () => {

    const [menuOpen, setMenu] = useState(false)
    const onHomePage = useSelector(state => state.app.onHomePage)

    const toggleMenu = () => {
        setMenu(!menuOpen)
    }

    const scrollToElement = id => {
        const e = document.getElementById(id)
        if (e) {
            setMenu(false)
            let offset = 100
            if (id === PROJECTS_ID) {
                offset = 170
            }
            const bodyRect = document.body.getBoundingClientRect().top
            const elementRect = e.getBoundingClientRect().top
            const elementPosition = elementRect - bodyRect
            const offsetPosition = elementPosition - offset
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            })
            setTimeout(() => e.focus(), 1000)
        }
    }

    const menuCSS = menuOpen ? 'open' : 'closed'
    const menuIcon = menuOpen ? 'fa-times' : 'fa-bars'

    const isNavBarActive = useSelector(getIsNavBarActive)

    return (
        <div className={`${cb} ${isNavBarActive ? 'active' : ''}`}>
            <div className={`${cb}__content-wrapper`}>
                <button id={HOME_ID} className={`${cb}__home`} onClick={() => {
                    window.scrollTo({top: 0, behavior: 'smooth'})
                    const e = document.getElementById(HOME_ID)
                    setTimeout(() => e.blur(), 1000)
                }
                }>
                    <img className={`${cb}__logo`} src={Logo} alt='Alex Charland Frontend Web Developer Site Logo' />
                </button>
                <div className={`${cb}__links ${menuCSS}`}>
                    <button className={`icon ${menuCSS}`} onClick={toggleMenu}><i className={`fa ${menuIcon}`}></i></button>
                    <a id={'resume-link'} className={`${cb}__link ${menuCSS}`} href={RESUME_DOWNLOAD_URL}>RESUME</a>
                    {onHomePage ?
                        <React.Fragment>
                            <button id={'projects-link'} className={`${cb}__link ${menuCSS}`} onClick={() => scrollToElement(PROJECTS_ID)}>PROJECTS</button>
                            <button id={'projects-link'} className={`${cb}__link ${menuCSS}`} onClick={() => scrollToElement(BIO_ID)}>ABOUT</button>
                            <button id={'technologies-link'} className={`${cb}__link ${menuCSS}`} onClick={() => scrollToElement(TECHNOLOGIES_ID)}>SKILLS</button>
                            <button id={'contact-link'} className={`${cb}__link ${menuCSS}`} onClick={() => scrollToElement(CONTACT_ID)}>CONTACT</button>
                        </React.Fragment> :
                        <React.Fragment>
                            <a id={'projects-link'} className={`${cb}__link ${menuCSS}`} href={ROOT_URL + '#' + PROJECTS_ID}>PROJECTS</a>
                            <a id={'technologies-link'} className={`${cb}__link ${menuCSS}`} href={ROOT_URL + '#' + TECHNOLOGIES_ID}>SKILLS</a>
                            <a id={'contact-link'} className={`${cb}__link ${menuCSS}`} href={ROOT_URL + '#' + CONTACT_ID}>CONTACT</a>
                        </React.Fragment>
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBar