import React, {useState, useEffect, useRef} from 'react'
import './landing.scss'
import ContactButtons from '../contact-buttons/contact-buttons'
import Signup from '../signup/signup'

const cb = 'landing'

const titles = [
    {
        text: 'Developer',
        class: `${cb}__background-developer`,
    },
    {
        text: 'Saxophonist',
        class: `${cb}__background-musician`,
    },
    {
        text: 'Online Creator',
        class: `${cb}__background-creator`,
    },
]
const animationSpeed = 400
const defaultTransition = `${animationSpeed}ms cubic-bezier(0.455, 0.03, 0.515, 0.955)`

const Landing = () => {

    const [index, setIndex] = useState(0)
    const [nextIndex, setNextIndex] = useState(index + 1)
    const [transitioning, setTransitioning] = useState(false)
    const nextIndexRef = useRef(nextIndex)
    nextIndexRef.current = nextIndex

    const startTransition = () => {
        setTransitioning(true)
        let newNextIndex = nextIndexRef.current + 1
        if (newNextIndex >= titles.length) newNextIndex = 0
        setTimeout(
            () => {
                setTransitioning(false)
                setIndex(nextIndexRef.current)
                setNextIndex(newNextIndex)
            },
            animationSpeed
        )
    }

    useEffect(() => {
        const runSlideShow = () => {
            setInterval(startTransition, 4000)
        }

        runSlideShow()
    }, [])

    useEffect(() => {
        if (index >= titles.length) {
            setIndex(0)
        }
    }, [index])

    const transition = transitioning ? defaultTransition : 'none'

    return (
        <div className={cb}>
            {titles.map((title, i) =>
                <div key={`background-${i}`} className={`${cb}__background ${title.class} ${i === index ? `${cb}__background-active` : ''}`} />
            )}
            <div className={`${cb}__background-overlay`}>
                <div className={`${cb}__content-wrapper`}>
                    <div className={`${cb}__title-wrapper`}>
                        <h1 className={`${cb}__heading ${cb}__slide-in`}>Alex Charland</h1>
                        <div className={`${cb}__slideshow-wrapper ${cb}__slide-in ${cb}__subheading`}>
                            <div className={`${cb}__variable-word-container${transitioning ? '-transition' : ''}`} style={{transition}}>
                                <div className={`${cb}__current-word${transitioning ? '-transition' : ''}`} style={{transition}}>{titles[index].text}</div>
                                <div className={`${cb}__next-word${transitioning ? '-transition' : ''}`} style={{transition}}>{titles[nextIndex].text}</div>
                            </div>
                        </div>
                        <div className={`${cb}__fade-in`}>
                            <ContactButtons darkMode />
                        </div>
                    </div>
                    <div className={`${cb}__signup-wrapper`}>
                        <Signup />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
