import React, {Component} from 'react'
import './nav-bar.scss'
import Logo from './logo512.png'
import {RESUME_URL, PROJECTS_ID, CONTACT_ID, TECHNOLOGIES_ID, ROOT_URL} from '../../utils/constants'

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
                        <img className={`${cb}__logo`} src={Logo} alt='Alex Charland Frontend Web Developer Site Logo' />
                    </a>
                    <div className={`${cb}__links ${menuCSS}`}>
                        <button className={`icon ${menuCSS}`} onClick={() => this.toggleMenu()}><i className={`fa ${menuIcon}`}></i></button>
                        <a id={'resume-link'} className={`${cb}__link ${menuCSS}`} href={RESUME_URL}>Resume</a>
                        <a id={'projects-link'} className={`${cb}__link ${menuCSS}`} href={ROOT_URL + '#' + PROJECTS_ID}>Projects</a>
                        <a id={'technologies-link'} className={`${cb}__link ${menuCSS}`} href={ROOT_URL + '#' + TECHNOLOGIES_ID}>Skills</a>
                        <a id={'contact-link'} className={`${cb}__link ${menuCSS}`} href={ROOT_URL + '#' + CONTACT_ID}>Contact</a>
                    </div>
                </div>
            </div>
        )
    }

}
