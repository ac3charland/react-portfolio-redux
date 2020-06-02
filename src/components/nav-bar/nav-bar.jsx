import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import './nav-bar.scss'
import Logo from './logo512.png'
import {RESUME_URL, PROJECTS_ID, CONTACT_ID, TECHNOLOGIES_ID, ROOT_URL} from '../../utils/constants'

const cb = 'navbar'

export default class NavBar extends Component {

    static propTypes = {
        onHomePage: PropTypes.bool,
    }

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
        const {onHomePage} = this.props
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

export const mapStateToProps = state => ({
    onHomePage: state.app.onHomePage,
})

const mapDispatchToProps = dispatch => ({})

export const ConnectedNavBar = connect(mapStateToProps, mapDispatchToProps)(NavBar)
