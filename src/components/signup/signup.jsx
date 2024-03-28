import React from 'react'
import PropTypes from 'prop-types'
import './signup.scss'

const cb = 'signup'

const Signup = ({title = 'Join my mailing list!'}) => (
    <div className={`${cb}__wrapper`}>
        <h2 className={`${cb}__heading`}>{title}</h2>
        <h3 className={`${cb}__subheading`}>Get one email a week with show info, music recommendations, and more.</h3>
        <iframe title='Substack Signup' src='https://alexcharland.substack.com/embed' width='350' height='150' style={{border: '1px solid #EEE', borderRadius: '8px', background: 'white'}} frameBorder='0' scrolling='no'></iframe>
    </div>
)

Signup.propTypes = {
    title: PropTypes.string,
}

export default Signup