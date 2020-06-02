import React from 'react'
import PropTypes from 'prop-types'
import './tech.scss'
import NewWindowScreenReaderWarning from '../new-window-warning/new-window-warning'

const cb = 'tech'

const Tech = props => (
    <div id={`tech-wrapper-${props.index}`} className={cb}>
        <a href={props.url} target='_blank' rel='noopener noreferrer' onFocus={props.onMouseEnter} onBlur={props.onMouseLeave}>
            <div className={`${cb}__image-wrapper ${props.size}`}>
                <img
                    className={`${cb}__image`}
                    alt={props.name}
                    src={props.image}
                    onMouseEnter={props.onMouseEnter}
                    onMouseLeave={props.onMouseLeave}
                />
            </div>
            <div className={`${cb}__title-wrapper`}>
                <h3 className={`${cb}__title`}>{props.name}</h3>
                <NewWindowScreenReaderWarning/>
            </div>
        </a>
    </div>
)

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