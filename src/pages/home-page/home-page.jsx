import React, {Component} from 'react'
import './home-page.scss'
import {connect} from 'react-redux'
import {markHomePageAsVisited} from '../../actions/mark-home-page'
import PropTypes from 'prop-types'
import Landing from '../../components/landing/landing'
import Bio from '../../components/bio/bio'

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

        const {visited} = this.props

        return (
            <div className={cb}>
                <Landing/>
                <Bio/>
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