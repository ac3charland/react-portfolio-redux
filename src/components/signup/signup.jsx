import React from 'react'
import PropTypes from 'prop-types'
import './signup.scss'

const cb = 'signup'

const Signup = ({title = 'Join my mailing list!'}) => (
    <div className={`${cb}__wrapper`}>
        <h2 className={`${cb}__heading`}>{title}</h2>
        <h3 className={`${cb}__subheading`}>Get one email a week with show info, music recommendations, and more.</h3>
        <div id='custom-substack-embed'></div>
    </div>
)

Signup.propTypes = {
    title: PropTypes.string,
}

export default Signup