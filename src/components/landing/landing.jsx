import React from 'react'
import './landing.scss'
import ContactButtons from '../contact-buttons/contact-buttons'

const cb = 'landing'

export default function Landing() {
    return (
        <div className={cb}>
            <div className={`${cb}__background-overlay`}>
                <div className={`${cb}__content-wrapper`}>
                    <div className={`${cb}__title-wrapper`}>
                        <h1 className={`${cb}__heading ${cb}__slide-in`}>Alex Charland</h1>
                        <h2 className={`${cb}__subheading ${cb}__slide-in`}>Test-Driven Frontend Developer</h2>
                        <div className={`${cb}__fade-in`}>
                            <ContactButtons darkMode/>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
