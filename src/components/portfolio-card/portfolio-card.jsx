import React from 'react'
import PropTypes from 'prop-types'
import Tech from '../tech/tech'
import './portfolio-card.scss'
import NewWindowScreenReaderWarning from '../new-window-warning/new-window-warning'

const cb = 'card'

const PortfolioCard = ({project, id}) => {
    if (project) {
        const {name, desc, technologies = [], image, url, github} = project


        return (
            <div id={`card-${id}`} className={cb}>
                <div className={`${cb}__flex-column-wrapper`}>
                    <div className={`${cb}__title-wrapper`}>
                        <h3 className={`${cb}__heading`}>{name}</h3>
                        <a className={`${cb}__image-wrapper`} href={url ? url : github} target='_blank' rel='noopener noreferrer'>
                            <img className={`${cb}__image`} src={image} alt={`Screenshot of ${name}`} />
                            <NewWindowScreenReaderWarning />
                        </a>
                        <div className={`${cb}__description`}>{desc}</div>
                    </div>
                    <div className={`${cb}__technologies`}>
                        {technologies.map((tech, idx) => {
                            return (
                                <div key={'project-tech-' + idx} className={`${cb}__tech-wrapper`}>
                                    <Tech name={tech.name} url={tech.image} size='tech-small' />
                                </div>
                            )
                        })}
                    </div>
                    <div className={`${cb}__links`}>
                        {url &&
                            <div className={`${cb}__link-wrapper`}>
                                <a className={`${cb}__link`} href={url} target='_blank' rel='noopener noreferrer'>
                                    <i className='fa fa-link' aria-hidden='true'></i>
                                    <NewWindowScreenReaderWarning customMessage='Link to Project (Opens a new window)' />
                                </a>
                            </div>
                        }
                        {github &&
                            <div className={`${cb}__link-wrapper`}>
                                <a className={`${cb}__link`} href={github} target='_blank' rel='noopener noreferrer'>
                                    <i className='fa fa-github-square' aria-hidden='true'></i>
                                    <NewWindowScreenReaderWarning customMessage='Github Link (Opens a new window)' />
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
    project: PropTypes.object,
    id: PropTypes.number,
}

export default PortfolioCard