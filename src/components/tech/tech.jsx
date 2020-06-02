import React from 'react'
import PropTypes from 'prop-types'
import './tech.scss'
import NewWindowScreenReaderWarning from '../new-window-warning/new-window-warning'

const cb = 'tech'

const Tech = props => {
    const {index, url, image, name, onMouseEnter, onMouseLeave, size} = props
    const isSmall = size === 'tech-small'
    return (
        <div id={`tech-wrapper-${index}`} className={cb}>
            <a href={url} target='_blank' rel='noopener noreferrer' onFocus={onMouseEnter} onBlur={onMouseLeave}>
                <div className={`${cb}__image-wrapper ${size}`}>
                    <img
                        className={`${cb}__image`}
                        alt={name}
                        src={image}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    />
                </div>
                <div className={`${cb}__title-wrapper`}>
                    {isSmall ?
                        <h4 className={`${cb}__title`}>{name}</h4> :
                        <h3 className={`${cb}__title`}>{name}</h3>
                    }
                    <NewWindowScreenReaderWarning />
                </div>
            </a>
        </div>
    )
}

Tech.propTypes = {
    index: PropTypes.number,
    size: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
}

export default Tech