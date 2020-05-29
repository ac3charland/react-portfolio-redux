import React, {Component} from 'react'
import './home-page.scss'
import {connect} from 'react-redux'
import {markHomePageAsVisited} from '../../actions/mark-home-page'
import PropTypes from 'prop-types'
import Landing from '../../components/landing/landing'
import Bio from '../../components/bio/bio'
import PortfolioCarousel from '../../components/portfolio-carousel/portfolio-carousel'
import Technologies from '../../components/technologies/technologies'
import {DISPLAY_PROJECTS, DISPLAY_TECHNOLOGIES} from '../../utils/constants'
 
const cb = 'home'

export default class HomePage extends Component {

    static propTypes = {
        markAsVisited: PropTypes.func,
        visited: PropTypes.bool,
    }

    componentDidMount() {
        this.props.markAsVisited()
    }

    render() {

        // eslint-disable-next-line no-unused-vars
        const {visited} = this.props

        return (
            <div className={cb}>
                <Landing/>
                <Bio/>
                <PortfolioCarousel projects={DISPLAY_PROJECTS}/>
                <Technologies techs={DISPLAY_TECHNOLOGIES}/>
            </div>
        )
    }

}

export const mapStateToProps = state => ({
    visited: state.app.homePageVisted,
})

const mapDispatchToProps = (dispatch) => ({
    markAsVisited: () => dispatch(markHomePageAsVisited()),
})

export const ConnectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage)