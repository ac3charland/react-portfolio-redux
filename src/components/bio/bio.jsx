import React from 'react'
import './bio.scss'
import {HEADSHOT} from '../../utils/constants'

const cb = 'bio'

export default function Bio() {
    return (
        <div id='bio-section' className={cb}>
            <h2 className={`${cb}__heading`}>About Alex</h2>
            <div className={`${cb}__flex`}>
                <div className={`${cb}__image-wrapper`}>
                    <img className={`${cb}__image`} src={HEADSHOT} alt='Headshot of Alex Charland, Frontend Web Developer' />
                </div>
                <div className={`${cb}__copy-wrapper`}>
                    <p>I'm a native iOS and Full Stack Web Developer with experience in Consulting, Healthcare and Biological Sciences, as well as a UW Madison graduate with a double major in Biology and Jazz Studies. I'm currently self-taught in Swift (iOS) and have just acquired MERN stack skills at the University of Minnesota's Coding Bootcamp.</p>
                    <p>Some of the technologies and languages I'm familiar with include Swift, Javascript/jQuery, the MERN stack, Bootstrap, Materialize, and Firebase, along with software like Excel, Word, Access, VS Code, XCode, Eclipse, and IntelliJ. I'm driven and curious, with an eye for detail and a love of collaboration, and I'm eager to join a diverse environment with teamwork-based problem solving and opportunities to learn from others. If I sound like the kind of developer you'd want in your company, feel free to <a href='mailto:ac3charland@gmail.com'>contact me</a> with questions or inquiries.</p>
                </div>
            </div>
        </div>
    )
} 