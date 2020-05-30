import React from 'react'
import './contact.scss'
import ContactButtons from '../contact-buttons/contact-buttons'
import {CONTACT_ID} from '../../utils/constants'

const cb = 'contact'

const Contact = () => (
    <div className={cb}>
        <h2 id={CONTACT_ID} className={`${cb}__heading`} tabIndex='-1'>Contact</h2>
        <div className={`${cb}__buttons-wrapper`}>
            <ContactButtons />
        </div>
    </div>
)

export default Contact