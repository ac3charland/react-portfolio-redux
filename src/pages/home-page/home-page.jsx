import React, {Component} from 'react'
import './home-page.scss'
import {connect} from 'react-redux'
import {onHomePage, leavingHomePage} from '../../actions/navigation'
import PropTypes from 'prop-types'
import Landing from '../../components/landing/landing'
import Bio from '../../components/bio/bio'
import PortfolioCarousel from '../../components/portfolio-carousel/portfolio-carousel'
import Technologies from '../../components/technologies/technologies'
import Contact from '../../components/contact/contact'
import {DISPLAY_PROJECTS, DISPLAY_TECHNOLOGIES, emptyFunction} from '../../utils/constants'

const cb = 'home'

export default class HomePage extends Component {

    static propTypes = {
        onHomePage: PropTypes.func,
        leavingHomePage: PropTypes.func,
        visited: PropTypes.bool,
    }

    static defaultProps = {
        onHomePage: emptyFunction,
        leavingHomePage: emptyFunction,
    }

    componentDidMount() {
        this.props.onHomePage()
        scrollToElement()
    }

    componentWillUnmount() {
        this.props.leavingHomePage()
    }

    render() {
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

}

const scrollToElement = () => {
    const id = window.location.hash
    const e = id ? document.querySelector(id) : null
    if (e) {
        e.focus()
    }
}

export const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    onHomePage: () => dispatch(onHomePage()),
    leavingHomePage: () => dispatch(leavingHomePage()),
})

export const ConnectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage)