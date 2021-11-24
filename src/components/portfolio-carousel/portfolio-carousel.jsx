import React, {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import './portfolio-carousel.scss'
import {PROJECTS_ID} from '../../utils/constants'
import PortfolioCard from '../portfolio-card/portfolio-card'

const cb = 'portfolio-carousel'
let slideShow
const numberOfProjectsToShow = 3
const animationSpeed = 300
const defaultTransition = `transform ${animationSpeed}ms cubic-bezier(0.455, 0.03, 0.515, 0.955)`

const PortfolioCarousel = ({projects}) => {
    const [transition, setTransition] = useState(defaultTransition)
    const [index, setIndex] = useState(numberOfProjectsToShow)
    const indexRef = useRef(index)
    indexRef.current = index

    const nextProject = manual => {
        if (manual) {
            clearInterval(slideShow)
        }
        setTransition(defaultTransition)
        setIndex(indexRef.current + 1)
    }

    const prevProject = () => {
        clearInterval(slideShow)
        setTransition(defaultTransition)
        setIndex(indexRef.current - 1)
    }

    const onFocus = idx => {
        clearInterval(slideShow)
        setTransition(defaultTransition)
        setIndex(idx)
    }

    useEffect(() => {
        const runSlideShow = () => {
            slideShow = setInterval(nextProject, 3500)
        }

        runSlideShow()
    }, [])

    useEffect(() => {
        if (index >= projects.length + numberOfProjectsToShow) {
            setTimeout(
                () => {
                    setTransition('none')
                    setIndex(numberOfProjectsToShow)
                },
                animationSpeed
            )
        }
        else if (index < numberOfProjectsToShow) {
            setTimeout(
                () => {
                    setTransition('none')
                    setIndex(projects.length + numberOfProjectsToShow - 1)
                },
                animationSpeed
            )
        }
    }, [index, projects])

    const duplicateBeforeProjects = projects.slice((-1 * numberOfProjectsToShow))
    const duplicateAfterProjects = projects.slice(0, numberOfProjectsToShow)
    const infiniteProjects = duplicateBeforeProjects.concat(projects).concat(duplicateAfterProjects)

    return (
        <>
            <div className='portfolio-divider-top'>
                <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
                    <path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' className='shape-fill'></path>
                </svg>
            </div>
            <div className={cb}>
                <h2 id={PROJECTS_ID} className={`${cb}__heading`} tabIndex='-1'>Work</h2>
                <div className={`${cb}__flex`}>
                    <div className={`${cb}__button-wrapper ${cb}__left`}>
                        <button className={`${cb}__button`} tabIndex={-1} onClick={prevProject}>
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
                                        const isDuplicate = idx < numberOfProjectsToShow || idx >= projects.length + numberOfProjectsToShow
                                        const tabIndex = isDuplicate ? -1 : 0
                                        return (
                                            <div
                                                key={idx}
                                                // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                                                tabIndex={tabIndex}
                                                onFocus={() => onFocus(idx)}
                                            >
                                                <PortfolioCard key={idx} project={project} id={idx} transition={transition} disabled={isDuplicate} handleFocus={() => onFocus(idx)} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className={`${cb}__button-wrapper ${cb}__right`}>
                        <button className={`${cb}__button`} tabIndex={-1} onClick={() => nextProject(true)}>
                            <i className='fa fa-chevron-right'></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className='portfolio-divider-bottom'>
                <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
                    <path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' className='shape-fill'></path>
                </svg>
            </div>
        </>
    )
}

PortfolioCarousel.propTypes = {
    projects: PropTypes.array,
}

PortfolioCarousel.defaultProps = {
    projects: [],
}

export default PortfolioCarousel
