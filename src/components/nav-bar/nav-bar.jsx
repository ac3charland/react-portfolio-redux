import React, {Component} from 'react'
import './nav-bar.scss'
import {RESUME_URL, SITE_LOGO, PROJECTS_ID, CONTACT_ID, TECHNOLOGIES_ID} from '../../utils/constants'

const cb = 'navbar'

export default class NavBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false,
        }
    }

    toggleMenu() {
        this.setState({
            menuOpen: !this.state.menuOpen,
        })
    }

    render() {
        const menuCSS = this.state.menuOpen ? 'open' : 'closed'
        const menuIcon = this.state.menuOpen ? 'fa-times' : 'fa-bars'

        return (
            <div className={cb}>
                <div className={`${cb}__content-wrapper`}>
                    <a className={`${cb}__home`} href='/'>
                        <img className={`${cb}__logo`} src={SITE_LOGO} alt='Alex Charland Frontend Web Developer Site Logo' />
                    </a>
                    <div className={`${cb}__links ${menuCSS}`}>
                        <button className={`icon ${menuCSS}`} onClick={() => this.toggleMenu()}><i className={`fa ${menuIcon}`}></i></button>
                        <a id={'resume-link'} className={`${cb}__link ${menuCSS}`} href={RESUME_URL}>Resume</a>
                        <button id={'projects-link'} className={`${cb}__link ${menuCSS}`} onClick={() => scrollToElement(PROJECTS_ID)}>Projects</button>
                        <button id={'technologies-link'} className={`${cb}__link ${menuCSS}`} onClick={() => scrollToElement(TECHNOLOGIES_ID)}>Skills</button>
                        <button id={'contact-link'} className={`${cb}__link ${menuCSS}`} onClick={() => scrollToElement(CONTACT_ID)}>Contact</button>
                    </div>
                </div>
            </div>
        )
    }

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