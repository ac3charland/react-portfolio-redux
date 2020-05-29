import React from 'react'
import './footer.scss'
import moment from 'moment'

const cb = 'footer'

export default function Footer(props) {
    return (
        <div className={cb}>
            <div className={`${cb}__text`}>Copyright &copy; {moment().format('YYYY')} Alex Charland</div>
            <div className={`${cb}__disclaimer`}>This site was built using React and tested with Jest, Backstop.js, and Cypress.</div>
        </div>
    )
}