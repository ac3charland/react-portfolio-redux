import React from 'react'
import './contact.scss'
import ContactButtons from '../contact-buttons/contact-buttons'

const cb = 'contact'

const Contact = () => (
    <div className={cb}>
        <h2 className={`${cb}__heading`}>Contact</h2>
        <div className={`${cb}__buttons-wrapper`}>
            <ContactButtons />
        </div>
    </div>
)

export default Contact