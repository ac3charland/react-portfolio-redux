import React from 'react'
import PropTypes from 'prop-types'
import './tech.scss'

const cb = 'tech'

const Tech = props => (
    <div id={`tech-wrapper-${props.index}`} className={cb}>
        <div className={`${cb}__image-wrapper ${props.size}`}>
            <img 
                className={`${cb}__image`} 
                alt={props.name} 
                src={props.url}
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave} 
            /> 
        </div>
        <div className='row'>
            <h3 className={`${cb}__title`}>{props.name}</h3>
        </div>
    </div>
)

Tech.propTypes = {
    index: PropTypes.number,
    size: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
}

export default Tech