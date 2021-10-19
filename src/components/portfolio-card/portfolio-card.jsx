import React from 'react'
import PropTypes from 'prop-types'
import Tech from '../tech/tech'
import './portfolio-card.scss'
import NewWindowScreenReaderWarning from '../new-window-warning/new-window-warning'
import {emptyFunction} from '../../utils/constants'

const cb = 'card'

const PortfolioCard = props => {
    const {project, id, transition = 'none', disabled, handleFocus = emptyFunction} = props
    
    if (project) {
        const {name, desc, technologies = [], image, url, github, apple, google} = project

        return (
            <div id={`card-${id}`} className={cb} style={{transition}}>
                <div className={`${cb}__flex-column-wrapper`}>
                    <div className={`${cb}__title-wrapper`}>
                        <h3 className={`${cb}__heading`}>{name?.toUpperCase()}</h3>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className={`${cb}__image-wrapper`} href={!disabled ? url ? url : github : null} target='_blank' rel='noopener noreferrer'>
                            <img className={`${cb}__image`} src={image} alt={`Screenshot of ${name}`} />
                            <NewWindowScreenReaderWarning />
                        </a>
                        <div className={`${cb}__description`}>{desc}</div>
                    </div>
                    <div className={`${cb}__technologies`}>
                        {technologies.map((tech, idx) => {
                            return (
                                <div key={'project-tech-' + idx} className={`${cb}__tech-wrapper`}>
                                    <Tech name={tech.name} image={tech.image} url={!disabled ? tech.url : null} size='tech-small' />
                                </div>
                            )
                        })}
                    </div>
                    <div className={`${cb}__links`}>
                        {url &&
                            <div className={`${cb}__link-wrapper`}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a className={`${cb}__link`} href={!disabled ? url : null} target='_blank' rel='noopener noreferrer' onFocus={() => handleFocus()}>
                                    <i className='fa fa-link' aria-hidden='true'></i>
                                    <NewWindowScreenReaderWarning customMessage='Link to Project (Opens a new window)' />
                                </a>
                            </div>
                        }
                        {github &&
                            <div className={`${cb}__link-wrapper`}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a className={`${cb}__link`} href={!disabled ? github : null} target='_blank' rel='noopener noreferrer' onFocus={() => handleFocus()}>
                                    <i className='fa fa-github-square' aria-hidden='true'></i>
                                    <NewWindowScreenReaderWarning customMessage='Github Link (Opens a new window)' />
                                </a>
                            </div>
                        }
                        {apple &&
                            <div className={`${cb}__link-wrapper`}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a className={`${cb}__link`} href={!disabled ? apple : null} target='_blank' rel='noopener noreferrer' onFocus={() => handleFocus()}>
                                <i className='fa fa-apple' aria-hidden='true'></i>
                                    <NewWindowScreenReaderWarning customMessage='Apple App Store Link (Opens a new window)' />
                                </a>
                            </div>
                        }
                        {google &&
                            <div className={`${cb}__link-wrapper`}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a className={`${cb}__link`} href={!disabled ? google : null} target='_blank' rel='noopener noreferrer' onFocus={() => handleFocus()}>
                                <i className='fa fa-android' aria-hidden='true'></i>
                                    <NewWindowScreenReaderWarning customMessage='Google Play Link (Opens a new window)' />
                                </a>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
    
    return null
}

PortfolioCard.propTypes = {
    disabled: PropTypes.bool,
    handleFocus: PropTypes.func,
    project: PropTypes.object,
    id: PropTypes.number,
    transition: PropTypes.string,
}

export default PortfolioCard