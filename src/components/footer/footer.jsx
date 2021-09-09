import React from 'react'
import './footer.scss'
import moment from 'moment'

const cb = 'footer'

const Footer = () => (
    <div className={cb}>
        <div className={`${cb}__text`}>Copyright &copy; {moment().format('YYYY')} Alex Charland</div>
        <div className={`${cb}__disclaimer`}>This site was built using React and tested with Jest, Backstop.js, and Cypress.</div>
        <div className={`${cb}__disclaimer`}>It is designed to be accessible to keyboard and screen reader users.</div>
    </div>
)

export default Footer
