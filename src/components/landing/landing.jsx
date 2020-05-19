import React from 'react'
import './landing.scss'

const cb = 'landing'

export default function Landing() {
    return (
        <div className={cb}>
            <div className={`${cb}__title-wrapper`}>
                <h1 className={`${cb}__heading ${cb}__slide-in`}>Alex Charland</h1>
                <h2 className={`${cb}__subheading ${cb}__slide-in`}>Test-Driven Frontend Developer</h2>
            </div>
        </div>
    )

}
