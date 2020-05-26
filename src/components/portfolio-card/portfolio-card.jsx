import React from 'react'
import PropTypes from 'prop-types'
import Tech from '../Tech'
import data from '../HomeTechs/data'
import './portfolio-card.scss'
import NewWindowScreenReaderWarning from '../new-window-warning/new-window-warning'

const cb = 'card'

const PortfolioCard = ({project}) => {
    if (project) {
        const {index, name, description, technologies = [], img, url, gitHub} = project
        const {techs} = data

        return (
            <div id={`card-${index}`} className={cb}>
                <div className={`${cb}__flex-column-wrapper`}>
                    <div className={`${cb}__image-wrapper`}>
                        <h3 className={`${cb}__heading`}>{name}</h3>
                        <img className={`${cb}__image`} src={img} alt={`Screenshot of ${name}`} />
                        <div className={`${cb}__description`}>{description}</div>
                    </div>
                    <div className={`${cb}__technologies`}>
                        {technologies.map(techIndex => {
                            const selected = techs.filter(tech => tech.index === techIndex)
                            return (
                                <div key={'project-tech-' + selected[0].index} className={`${cb}__tech-wrapper`}>
                                    <Tech name={selected[0].name} url={selected[0].url} size='tech-small' />
                                </div>
                            )
                        })}
                    </div>
                    <div className={`${cb}__links`}>
                        <div className={`${cb}__link-wrapper`}>
                            <a className={`${cb}__link`} href={url} target='_blank' rel='noopener noreferrer'>
                                <i className='fa fa-link' aria-hidden='true'></i>
                                <NewWindowScreenReaderWarning customMessage='Link to Project (Opens a new window)' />
                            </a>
                        </div>
                        <div className={`${cb}__link-wrapper`}>
                            <a className={`${cb}__link`} href={gitHub} target='_blank' rel='noopener noreferrer'>
                                <i className='fa fa-github-square' aria-hidden='true'></i>
                                <NewWindowScreenReaderWarning customMessage='Github Link (Opens a new window)' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
    return null
}

PortfolioCard.propTypes = {
    project: PropTypes.object,
}

export default PortfolioCard