import React, {Component} from 'react'
import './nav-bar.scss'
import {RESUME_URL, SITE_LOGO} from '../../utils/constants'

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
                <a className={`${cb}__home`} href='/'>
                    <img className={`${cb}__logo`} src={SITE_LOGO} alt='Alex Charland Frontend Web Developer Site Logo'/>
                </a>
                <div className={`${cb}__links ${menuCSS}`}>
                    <button className={`icon ${menuCSS}`} onClick={() => this.toggleMenu()}><i className={`fa ${menuIcon}`}></i></button>
                    <a id={'secondary-link'} className={`${cb}__link ${menuCSS}`} href={RESUME_URL}>Resume</a>
                </div>
            </div>
        )
    }

}