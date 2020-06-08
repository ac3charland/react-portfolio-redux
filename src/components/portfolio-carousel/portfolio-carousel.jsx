import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './portfolio-carousel.scss'
import {PROJECTS_ID} from '../../utils/constants'
import PortfolioCard from '../portfolio-card/portfolio-card'

const cb = 'portfolio-carousel'
const numberOfProjectsToShow = 3
const animationSpeed = 300
const defaultTransition = `transform ${animationSpeed}ms cubic-bezier(0.455, 0.03, 0.515, 0.955)`

export default class PortfolioCarousel extends Component {

    state = {
        index: numberOfProjectsToShow,
        transition: defaultTransition,
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
        if (newIndex >= this.props.projects.length + numberOfProjectsToShow) {
            this.setState(
                {index: newIndex},
                () => setTimeout(
                    () => {
                        this.setState({index: numberOfProjectsToShow, transition: 'none'})
                    },
                    animationSpeed
                )
            )
        }
        else {
            this.setState({
                index: newIndex,
                transition: defaultTransition,
            })
        }
    }

    prevProject = () => {
        clearInterval(this.slideShow)
        let newIndex = this.state.index - 1
        if (newIndex < numberOfProjectsToShow) {
            this.setState(
                {index: newIndex},
                () => setTimeout(
                    () => {
                        this.setState({index: this.props.projects.length + numberOfProjectsToShow - 1, transition: 'none'})
                    },
                    animationSpeed
                )
            )
        }
        else {
            this.setState({
                index: newIndex,
                transition: defaultTransition,
            })
        }
    }

    onFocus = idx => {
        clearInterval(this.slideShow)
        this.setState({index: idx})
    }

    runSlideShow = () => {
        const component = this
        component.slideShow = setInterval(component.nextProject, 3500)
    }

    componentDidMount = () => {
        this.runSlideShow()
    }

    render() {
        const {index, transition} = this.state
        const {projects} = this.props
        const duplicateBeforeProjects = projects.slice((-1 * numberOfProjectsToShow))
        const duplicateAfterProjects = projects.slice(0, numberOfProjectsToShow)
        const infiniteProjects = duplicateBeforeProjects.concat(projects).concat(duplicateAfterProjects)

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
                            <div
                                className='cards-slider-wrapper'
                                style={{transform: `translate3d(-${index * (100 / infiniteProjects.length)}%, 0px, 0px)`, transition}}
                            >
                                {
                                    infiniteProjects.map((project, idx) => {
                                        const isDuplicate = idx < numberOfProjectsToShow || idx > projects.length + numberOfProjectsToShow
                                        const tabIndex = isDuplicate ? -1 : 0
                                        return (
                                            <div
                                                key={idx}
                                                // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                                                tabIndex={tabIndex}
                                                onFocus={() => this.onFocus(idx)}
                                            >
                                                <PortfolioCard key={idx} project={project} id={idx} transition={transition} />
                                            </div>
                                        )
                                    })
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
