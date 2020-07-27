import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Tech from '../tech/tech'
import './technologies.scss'
import {TECHNOLOGIES_ID} from '../../utils/constants'
import {Technology} from '../../utils/constants'

const cb = 'technologies'

let reset: any

export interface TechnologiesProps {
    techs?: Array<Technology>
}

const Technologies = (props: TechnologiesProps) => {

    const [selectedTech, setSelectedTech] = useState('none')

    const techEnter = (id: string) => {
        clearTimeout(reset)
        setSelectedTech(id)
    }

    const techLeave = () => {
        reset = setTimeout(() => setSelectedTech('none'), 500)
    }

    const {techs = []} = props

    return (
        <div className={cb}>
            <div className={`${cb}__content-wrapper`}>
                <h2 id={TECHNOLOGIES_ID} className={`${cb}__heading`} tabIndex={-1}>Skills & Technologies</h2>
                <div className={`${cb}__techs-wrapper techs-container active-card-${selectedTech}`}>
                    {techs.map((tech: Technology, idx: number) => (
                        <div key={`tech-${idx}`} className={`${cb}__tech-wrapper`}>
                            <Tech
                                index={idx}
                                name={tech.name}
                                image={tech.image}
                                url={tech.url}
                                size='tech-normal'
                                onMouseEnter={() => techEnter(idx.toString())}
                                onMouseLeave={techLeave}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

Technologies.propTypes = {
    techs: PropTypes.array,
}

Technologies.defaultProps = {
    techs: [],
}

export default Technologies
