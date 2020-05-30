import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './portfolio-carousel.scss'
import {PROJECTS_ID} from '../../utils/constants'
import PortfolioCard from '../portfolio-card/portfolio-card'

const cb = 'portfolio-carousel'

export default class PortfolioCarousel extends Component {

    state = {
        index: 0,
    };

    static propTypes = {
        projects: PropTypes.array,
    }

    static defaultProps = {
        projects: [],
    }

    slideShow;

    nextProject = (manual) => {
        const component = this
        if (manual) {
            clearInterval(component.slideShow)
        }
        let newIndex = this.state.index + 1
        if (newIndex >= this.props.projects.length) {
            newIndex = 0
        }
        this.setState({
            index: newIndex,
        })
    }

    prevProject = () => {
        clearInterval(this.slideShow)
        let newIndex = this.state.index - 1
        if (newIndex < 0) {
            newIndex = this.props.projects.length - 1
        }
        this.setState({
            index: newIndex,
        })
    }

    runSlideShow = () => {
        const component = this
        component.slideShow = setInterval(component.nextProject, 3500)
    }

    componentDidMount = () => {
        this.runSlideShow()
    }

    render() {
        const {index} = this.state
        const {projects} = this.props
        return (
            <div className={cb}>
                <h2 id={PROJECTS_ID} className={`${cb}__heading`} tabIndex='-1'>Projects</h2>
                <div className={`${cb}__flex`}>
                    <div className={`${cb}__button-wrapper ${cb}__left`}>
                        <button className={`${cb}__button`} onClick={() => this.prevProject()}>
                            <i className='fa fa-chevron-left'></i>
                        </button>
                    </div>
                    <div className={`${cb}__slider-wrapper`}>
                        <div className={`cards-slider active-slide-${index}`} >
                            <div className='cards-slider-wrapper' style={{transform: `translateX(-${index * (100 / projects.length)}%)`}}>
                                {
                                    projects.map((project, idx) => <PortfolioCard key={idx} project={project} id={idx}/>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className={`${cb}__button-wrapper ${cb}__right`}>
                        <button className={`${cb}__button`} onClick={() => this.nextProject(true)}>
                            <i className='fa fa-chevron-right'></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
} 
