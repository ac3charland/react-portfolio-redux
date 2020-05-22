const baseURL = 'images/Projects/'

const data = {
    projects: [
        {
            name: 'Fransen Family Journal',
            index: 0,
            description: 'A client-facing, full stack blogging site built to keep an extended family connected.',
            technologies: [14, 20, 
                            // 9, 
                            2, 
                            // 5, 
                            8],
            img: baseURL + 'FFJ.jpg',
            url: 'https://fransenfamilyjournal.herokuapp.com/',
            gitHub: 'https://github.com/ac3charland/FransenFamilyJournal',
        },
        {
            name: 'Shreddit',
            index: 1,
            description: 'A full-stack MERN application allowing users to create short melodies in a grid-based sequencer.',
            technologies: [14, 17, 3, 
                            // 9, 
                            8],
            img: baseURL + 'Shreddit.png',
            url: 'https://shredditmern.herokuapp.com/',
            gitHub: 'https://github.com/ac3charland/Shreddit',
        },
        {
            name: 'Weather Wars',
            index: 2,
            description: 'A turn-based combat game that is affected by real-time weather data from around the world.',
            technologies: [19, 3, 21, 5],
            img: baseURL + 'WeatherWars.png',
            url: 'https://weatherwars.herokuapp.com/index.html',
            gitHub: 'https://github.com/ac3charland/WeatherWars',
        },
        {
            name: 'Star Wars Meme Trivia',
            index: 3,
            description: 'A timed trivia game based around the theme of Star Wars memes.',
            technologies: [2, 5, 4, 0],
            img: baseURL + 'Trivia.png',
            url: 'https://ac3charland.github.io/TriviaGame/',
            gitHub: 'https://github.com/ac3charland/TriviaGame',
        },
        {
            name: 'Hangman',
            index: 4,
            description: 'A hangman application built around the theme of U.S. presidents.',
            technologies: [2, 4, 0, 1],
            img: baseURL + 'Hangman.png',
            url: 'https://ac3charland.github.io/Word-Guess-Game/',
            gitHub: 'https://github.com/ac3charland/Word-Guess-Game',
        },
    ],
}

export default data