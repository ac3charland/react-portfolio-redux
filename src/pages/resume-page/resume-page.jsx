import React, {useEffect} from 'react'
import './resume-page.scss'
import {ROOT_URL, GITHUB_PROFILE_URL, TEMPLATE_APP, BASH_PROFILE_URL, READGEEK_SCRAPER_URL, WAFFLE_TIMER, RESUME_DOWNLOAD_URL, RESUME_ID} from '../../utils/constants'

const cb = 'resume'

const ResumePage = () => {

    useEffect(() => {
        const e = document.getElementById(RESUME_ID)
        if (e) {
            e.focus()
        }
    }, [])

    return (
        <div className={cb}>
            <h1 className={`${cb}__large`} id={RESUME_ID} tabIndex='-1'>Here's the thing...</h1>
            <p className={`${cb}__normal`}>You’re here because you want my resume, and you’re more than welcome to it&mdash;just click the download button below.</p>
            <h2 className={`${cb}__extra-large`}>But...</h2>
            <p className={`${cb}__normal`}>Many of the questions you want my resume to answer will probably be better answered if you:</p>
            <div className={`${cb}__button-wrapper`}>
                <a className={`${cb}__button`} href={ROOT_URL}><strong>Explore my portfolio</strong></a>
                <a className={`${cb}__button`} href={GITHUB_PROFILE_URL}><strong>Browse my Github </strong></a>
            </div>
            <h2 className={`${cb}__normal ${cb}__body-font`}>Why? Because these resources are better at answering questions like:</h2>
            <ul className={`${cb}__questions`}>
                <li className={`${cb}__question`}>
                    <h3 className={`${cb}__question-heading`}>What technologies does he know? How well does he know them?</h3>
                    <p className={`${cb}__normal`}>Anyone can slap a technology buzzword on their resume that they don’t actually know (and if you’ve reviewed enough tech resumes, you know many people do). <a href={GITHUB_PROFILE_URL}>Real-world projects</a>, on the other hand, allow you to judge competence directly by reviewing the source code and final product. Seeing is believing, after all—and you’ll find projects in my <a href={ROOT_URL}>portfolio</a> that concretely demonstrate every technology I put on my resume.</p>
                </li>
                <li className={`${cb}__question`}>
                    <h3 className={`${cb}__question-heading`}>Does he write readable, maintainable, testable code?</h3>
                    <p className={`${cb}__normal`}>This is another question that’s hard for a resume to answer. But if you browse the source code of my <a href={GITHUB_PROFILE_URL}>Github projects</a>, you’ll find that my priority, even for personal projects, is to commit code that is readable, maintainable, accessible, and fully tested.</p>
                </li>
                <li className={`${cb}__question`}>
                    <h3 className={`${cb}__question-heading`}>What are his coding preferences and opinions?</h3>
                    <p className={`${cb}__normal`}>Different developers have different styles, and it’s important that those styles are compatible within a team. If you’re curious about my approach to development, you can look at my <a href={TEMPLATE_APP.github}>react template app</a>, which has my preferred frontend setup, and my <a href={BASH_PROFILE_URL}>bash profile</a>, which has my preferred terminal setup.</p>
                </li>
                <li className={`${cb}__question`}>
                    <h3 className={`${cb}__question-heading`}>Does this guy truly love programming, or is it just his day job?</h3>
                    <p className={`${cb}__normal`}>For many developers, their <a href={GITHUB_PROFILE_URL}>Github history</a> goes silent once they land their first job. But my love of programming goes beyond my 9 to 5, and my numerous side projects are proof. I love exploring new technologies and making neat things—from a <a href={READGEEK_SCRAPER_URL}>script to organize the books I've read</a> to an <a href={WAFFLE_TIMER.github}>AWS AppSync-powered waffle timer app</a>. I find that making these outside-of-work projects is not only fun, but it teaches me many things that turn out to be relevant to my job.</p>
                </li>
            </ul>
            <h2 className={`${cb}__large`}>Still want the resume?</h2>
            <a className={`${cb}__download-button`} href={RESUME_DOWNLOAD_URL} download><strong>Download</strong></a>
        </div>
    )

}

export default ResumePage