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
                    <p>Alex Charland is a software engineer, musician, and online creator. When not working as a consultant for <a href={IMPROVING_URL}>Improving Inc.</a>, he plays saxophone throughout the midwest and produces short-form videos on <a href={INSTAGRAM_URL}>Instagram</a> that have gathered tens of thousands of views.</p>
                    <p>As a developer, Alex specializes in React, TypeScript backends, accessible web design, and test-driven development. After graduating from the <a href={BOOTCAMP_URL}>University of Minnesota Coding Bootcamp</a> in 2018, he got his start building frontend applications on <a href={BEST_BUY_URL}>one of the most-trafficked ecommerce sites</a> in the United States. He then learned full-stack skills at <a href={NM_URL}>Northwestern Mutual</a> before joining Improving Inc. (formerly Object Partners) in 2021. In between, he worked as a <a href={DARN_KNIT_ANYWAY.apple}>freelance React Native developer</a>, giving him a wide variety of experience that allows him contribute in multiple programming contexts, be it frontend, backend, or mobile.</p>
                    <p>As a musician, Alex regularly performs and records on saxophone, clarinet, and EWI throughout the midwest. He has shared stages with Laura Caviani, Freddie Cole, Juan de Marcos Gonzalez, and the award-winning Roseville High School Jazz Ensemble I as a featured soloist and composer. He has recorded with <a href={BRAHMULUS_URL}>Brahmulus</a>, <a href={FRINGE_URL}>Fringe Character</a>, <a href={RITT_URL}>Ritt Deitz</a>, the <a href={LEFT_FIELD_URL}>Left Field Quartet</a>, and composed, recorded, and produced his solo record <a href={AOMTY_URL}>All of Me to You</a>.</p>
                    <p>In March 2022, after reading Austin Kleon's <a href={SHOW_YOUR_WORK_URL}>Show Your Work</a>, Alex created an <a href={INSTAGRAM_URL}>Instagram</a> with the goal of building musical community online. Through his videos on music theory, practice, and technology, he's accumulated tens of thousands of views and hundreds of followers.</p>
                </div>
            </div>
        </div>
        <div className={`${cb}__spacer`}/>
    </div>
)

export default Bio