import React from 'react'
import './bio.scss'
import {BEST_BUY_URL, BOOTCAMP_URL, NM_URL, BIO_ID, IMPROVING_URL, AOMTY_URL, DARN_KNIT_ANYWAY, BRAHMULUS_URL, FRINGE_URL, RITT_URL, INSTAGRAM_URL, LEFT_FIELD_URL, SHOW_YOUR_WORK_URL} from '../../utils/constants'

const cb = 'bio'

const Bio = () => (
    <div className={cb}>
        <div className={`${cb}__content-wrapper`}>
            <div className={`${cb}__flex`}>
                <div className={`${cb}__copy-wrapper`}>
                    <h2 className={`${cb}__heading`} id={BIO_ID} tabIndex='-1'>About</h2>
                    <p>Hi there! 👋 I'm a software engineer, musician, and online creator. When not working as a full-stack developer at <a href={NM_URL}>Northwestern Mutual</a>, I play saxophone throughout the midwest and produce short-form videos on <a href={INSTAGRAM_URL}>Instagram</a>.</p>
                    <p>As a developer, I specialize in mobile and web development: React & React Native, TypeScript backends, accessible web design, and test-driven development. After graduating from the <a href={BOOTCAMP_URL}>University of Minnesota Coding Bootcamp</a> in 2018, I got my start building frontend applications on <a href={BEST_BUY_URL}>one of the most-trafficked ecommerce sites</a> in the United States. Then I learned full-stack skills at <a href={NM_URL}>Northwestern Mutual</a> as a consultant before joining full-time in 2025. In between, I worked as a <a href={DARN_KNIT_ANYWAY.apple}>freelance React Native developer</a> for the <a href={'https://www.darnknitanyway.com/'}>best yarn shop in the midwest</a>. 😉</p>
                    <p>As a musician, I regularly perform and record on saxophone, clarinet, and EWI throughout the midwest. I've been fortunate enough to share stages with Laura Caviani, Freddie Cole, Juan de Marcos Gonzalez, and the award-winning Roseville High School Jazz Ensemble I as a featured soloist and composer. I've recorded with <a href={BRAHMULUS_URL}>Brahmulus</a>, <a href={FRINGE_URL}>Fringe Character</a>, <a href={RITT_URL}>Ritt Deitz</a>, the <a href={LEFT_FIELD_URL}>Left Field Quartet</a>, and composed, recorded, and produced my solo record <a href={AOMTY_URL}>All of Me to You</a> (that's also how I proposed to my wife).</p>
                    <p>In March 2022, after reading Austin Kleon's <a href={SHOW_YOUR_WORK_URL}>Show Your Work</a>, I created an <a href={INSTAGRAM_URL}>Instagram</a> with the goal of building musical community online. Weirdly enough people seemed to like it! After a hiatus to focus on my coding career, I plan to refocus on content creation in the fall of 2025.</p>
                </div>
            </div>
        </div>
        <div className={`${cb}__spacer`}/>
    </div>
)

export default Bio