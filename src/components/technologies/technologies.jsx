import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Tech from '../tech/tech'
import './technologies.scss'
import {TECHNOLOGIES_ID} from '../../utils/constants'

const cb = 'technologies'

export default class Technologies extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedTech: 'none',
        }
    }

    static propTypes = {
        techs: PropTypes.array,
    }

    static defaultProps = {
        techs: [],
    }

    techEnter = (id) => {
        this.setState({
            selectedTech: id,
        })
    }

    techLeave = () => {
        this.setState({
            selectedTech: 'none',
        })
    }

    render() {
        const {selectedTech} = this.state
        const {techs} = this.props
        return (
            <div className={cb}>
                <div className={`${cb}__content-wrapper`}>
                    <h2 id={TECHNOLOGIES_ID} className={`${cb}__heading`} tabIndex='-1'>Skills & Technologies</h2>
                    <div className={`${cb}__techs-wrapper techs-container active-card-${selectedTech}`}>
                        {techs.map((tech, idx) => (
                            <div key={`tech-${idx}`} className={`${cb}__tech-wrapper`}>
                                <Tech
                                    index={idx}
                                    name={tech.name}
                                    url={tech.image}
                                    size='tech-normal'
                                    onMouseEnter={() => this.techEnter(idx)}
                                    onMouseLeave={this.techLeave}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
} 