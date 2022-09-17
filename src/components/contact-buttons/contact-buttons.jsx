import React from 'react'
import PropTypes from 'prop-types'
import './contact-buttons.scss'
import {LINKEDIN_URL, GITHUB_PROFILE_URL, EMAIL_URL, INSTAGRAM_URL} from '../../utils/constants'

const cb = 'contact-buttons'

const ContactButtons = ({darkMode}) => {
    const darkCSS = darkMode ? 'dark' : ''
    return (
        <div className={`${cb} ${darkCSS}`}>
            <div className={`${cb}__flex-wrapper`}>
                <ContactButton
                    href={LINKEDIN_URL}
                    icon='fa-linkedin-square'
                    srMessage='Link to LinkedIn Profile'
                />
                <ContactButton
                    href={GITHUB_PROFILE_URL}
                    icon='fa-github-square'
                    srMessage='Link to Github Profile'
                />
                <ContactButton
                    href={EMAIL_URL}
                    icon='fa-envelope'
                    srMessage='Send an email (Opens a new window)'
                />
                <ContactButton
                    href={INSTAGRAM_URL}
                    icon='fa-instagram'
                    srMessage='Link to Github Profile'
                />
            </div>
        </div>
    )
}

ContactButtons.propTypes = {
    darkMode: PropTypes.bool,
}

const ContactButton = ({href, icon, srMessage}) => (
    <a className={`${cb}__button`} href={href}>
        <div className={`${cb}__button-wrapper`}>
            <i className={`fa ${icon}`} aria-hidden='true'></i>
            <span className='sr-only'>{srMessage}</span>
        </div>
    </a>
)

ContactButton.propTypes = {
    href: PropTypes.string,
    icon: PropTypes.string,
    srMessage: PropTypes.string,
}

export default ContactButtons