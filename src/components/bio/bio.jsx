import React from 'react'
import './bio.scss'
import {HEADSHOT, BEST_BUY_URL, SWIFT_URL, BOOTCAMP_URL, MUSIC_URL, GITHUB_PROFILE_URL} from '../../utils/constants'

const cb = 'bio'

const Bio = () => (
    <div className={cb}>
        <div className={`${cb}__content-wrapper`}>
            <h2 className={`${cb}__heading`}>About</h2>
            <div className={`${cb}__flex`}>
                <div className={`${cb}__image-wrapper`}>
                    <img className={`${cb}__image`} src={HEADSHOT} alt='Headshot of Alex Charland, Frontend Web Developer' />
                </div>
                <div className={`${cb}__copy-wrapper`}>
                    <p>Alex Charland is a frontend developer specializing in React, Redux, test-driven development, and accessible web design. He got his start building applications on the <a href={BEST_BUY_URL}>sixth-most-trafficked ecommerce site in the United States</a>, and is currently learning full-stack skills at Northwestern Mutual. Driven and curious, with a love of collaboration and an eye for detail, he draws from experience in a variety of fields, including music, healthcare, and the biological sciences.</p>
                    <p>After graduating from the University of Wisconsin Madison with a Bachelor of Science, Alex originally planned to be a physician assistant. However, instead of going straight to PA school, he decided to take a gap year to try something completely different&mdash;programming. After spending a year teaching himself <a href={SWIFT_URL}>Swift</a>, Alex realized he had found his true calling, and enrolled in the <a href={BOOTCAMP_URL}>University of Minnesota Coding Bootcamp</a>. There, he gained a solid footing in full-stack web development, including fundamentals like HTML, CSS, and Javascript, and modern technologies like React, Node.js, and MongoDB.</p>
                    <p>From there, he landed his first position on a team at Best Buy, where he began his “second bootcamp”&mdash;this time learning Redux, CSS preprocessors (LESS), accessible web design, and test-driven development (including unit, integration, and visual regression testing). Outside of work, he loves <a href={MUSIC_URL}>playing and writing music</a>, cooking, running, and learning new technologies through the creation of various <a href={GITHUB_PROFILE_URL}>side projects</a>.</p>
                </div>
            </div>
        </div>
    </div>
)

export default Bio