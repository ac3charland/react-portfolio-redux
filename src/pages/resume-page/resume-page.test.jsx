import ResumePage from './resume-page'

const cb = 'resume'

describe('ResumePage', () => {
    let props, render

    beforeEach(() => {
        props = {}

        render = (changedProps = {}) => mount(<ResumePage {...props} {...changedProps} />)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`#resume-heading`).prop('tabIndex')).toEqual('-1')

        expect(component.find(`.${cb}__button`).at(0).prop('href')).toEqual('/')
        expect(component.find(`.${cb}__button`).at(1).prop('href')).toEqual('https://github.com/ac3charland')
        expect(component.find(`.${cb}__download-button`).prop('href')).toEqual('https://tinyurl.com/5n6urxe8')

        expect(component.find(`.${cb}__question`).at(0).find('a').at(0).prop('href')).toEqual('https://github.com/ac3charland')
        expect(component.find(`.${cb}__question`).at(0).find('a').at(1).prop('href')).toEqual('/')
        
        expect(component.find(`.${cb}__question`).at(1).find('a').at(0).prop('href')).toEqual('https://github.com/ac3charland')
        
        expect(component.find(`.${cb}__question`).at(2).find('a').at(0).prop('href')).toEqual('https://github.com/ac3charland/react-template')
        expect(component.find(`.${cb}__question`).at(2).find('a').at(1).prop('href')).toEqual('https://github.com/ac3charland/BashProfile')
        
        expect(component.find(`.${cb}__question`).at(3).find('a').at(0).prop('href')).toEqual('https://github.com/ac3charland')
        expect(component.find(`.${cb}__question`).at(3).find('a').at(1).prop('href')).toEqual('https://github.com/ac3charland/ReadGeekScraper')
        expect(component.find(`.${cb}__question`).at(3).find('a').at(2).prop('href')).toEqual('https://github.com/ac3charland/waffle-timer')
    })
})