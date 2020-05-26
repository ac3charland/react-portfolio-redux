import React, {Component} from 'react'
import data from './data'
import PortfolioCard from '../portfolio-card/portfolio-card'
import './portfolio-carousel.scss'

const cb = 'portfolio-carousel'

export default class PortfolioCarousel extends Component {

    state = {
        projects: data.projects,
        project: data.projects[0],
    };

    slideShow;

    nextProject = (manual) => {
        const component = this
        if (manual) {
            clearInterval(component.slideShow)
        }
        let newIndex = this.state.project.index + 1
        if (newIndex >= data.projects.length) {
            newIndex = 0
        }
        this.setState({
            projects: data.projects,
            project: data.projects[newIndex],
        })
    }

    prevProject = () => {
        clearInterval(this.slideShow)
        let newIndex = this.state.project.index - 1
        if (newIndex < 0) {
            newIndex = data.projects.length - 1
        }
        this.setState({
            projects: data.projects,
            project: data.projects[newIndex],
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
        const {projects, project} = this.state
        return (
            <div id='home-portfolio' className={cb}>
                <h2 className={`${cb}__heading`}>Projects</h2>
                <div className={`${cb}__flex`}>
                    <div className={`${cb}__button-wrapper ${cb}__left`}>
                        <button
                            className={`${cb}__button`}
                            onClick={() => this.prevProject()}
                        >
                            <i className='fa fa-chevron-left'></i>
                        </button>
                    </div>
                    <div className={`${cb}__slider-wrapper`}>
                        <div className={`cards-slider active-slide-${project.index}`} >
                            <div className='cards-slider-wrapper' style={{
                                transform: `translateX(-${project.index * (100 / projects.length)}%)`,
                            }}>
                                {
                                    projects.map(project => <PortfolioCard key={project.name} project={project} />)
                                }
                            </div>
                        </div>
                    </div>
                    <div className={`${cb}__button-wrapper ${cb}__right`}>
                        <button
                            className={`${cb}__button`}
                            onClick={() => this.nextProject(true)}
                        >
                            <i className='fa fa-chevron-right'></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
} 
