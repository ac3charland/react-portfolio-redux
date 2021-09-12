import React from 'react'
import './bio.scss'
import {BEST_BUY_URL, BOOTCAMP_URL, MUSIC_URL, GITHUB_PROFILE_URL, NM_URL, EWIPATCHES_URL} from '../../utils/constants'

const cb = 'bio'

const Bio = () => (
    <div className={cb}>
        <div className={`${cb}__content-wrapper`}>
            <div className={`${cb}__flex`}>
                <div className={`${cb}__copy-wrapper`}>
                    <h2 className={`${cb}__heading`}>About</h2>
                    <p>Alex Charland is a full-stack developer specializing in React, Redux, Node.js, test-driven development, and accessible web design. He got his start building frontend applications on one of the <a href={BEST_BUY_URL}>most-trafficked ecommerce sites in the United States</a>, and learned full-stack skills building applications for field representatives at <a href={NM_URL}>Northwestern Mutual</a>. Driven and curious, with a love of collaboration and an eye for detail, he draws from experience in a variety of fields, including music, healthcare, and the biological sciences.</p>
                    <p>A graduate of the <a href={BOOTCAMP_URL}>University of Minnesota Coding Bootcamp</a>, he gained professional experience in React, Redux, CSS preprocessors (LESS), accessible web design, and test-driven, agile development (including unit, integration, and visual regression testing) on a team at Best Buy. From there, he gained full-stack experience working with Redux Toolkit, Express.js, MySQL, and MikroORM at Northwestern Mutual, again following agile practices like standups, sprints, retrospectives, and story-pointing.</p>
                    <p>Alex is also an avid freelancer, building websites and mobile applications for musicians, small businesses, and his own <a href={EWIPATCHES_URL}>ecommerce store</a>. Outside of work, he loves <a href={MUSIC_URL}>playing and writing music</a>, cooking, running, and learning new technologies through the creation of various <a href={GITHUB_PROFILE_URL}>side projects</a>.</p>
                </div>
            </div>
        </div>
        <div className={`${cb}__spacer`}/>
    </div>
)

export default Bio