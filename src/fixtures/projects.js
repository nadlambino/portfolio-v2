import dictionaryGif from './../assets/images/dictionary.gif'
import tictactoeGif from './../assets/images/tictactoe.gif'

export default [
    {
        name: 'Tic Tac Toe',
        description: 'An online Tic Tac Toe game where two players can play against each other.',
        stacks: ['html5', 'css3', 'sass', 'tailwind', 'js', 'react', 'socket.io'],
        image: tictactoeGif,
        git_url: 'https://github.com/nadlambino/tictactoe-react',
        live_url: 'https://tictactoe-nadlambino.netlify.app'
    },
    {
        name: 'Dictionary App',
        description: 'An dictionary app with phonetics and audio.',
        features: [
            'Word of the day',
            'Spelling Game'
        ],
        stacks: ['html5', 'css3', 'tailwind', 'js', 'vue', 'nuxt'],
        image: dictionaryGif,
        git_url: 'https://github.com/nadlambino/nuxt-dictionary',
        live_url: 'https://dictionary-nadlambino.netlify.app'
    },
    {
        name: 'Snapify',
        description: 'A simple social media app that allows user to upload images or videos, react, and comment to a post.',
        features: [
            'Create or login to an existing account',
            'Post up to 5 media such as images and videos',
            'Comment on a post',
            'React on a post'
        ],
        stacks: ['html5', 'css3', 'tailwind', 'js', 'typescript', 'react', 'nodejs', 'express', 'mongoose', 'jwt'],
        image: '',
        git_url: 'https://github.com/nadlambino/snapify',
        live_url: 'https://snapify-nadlambino.netlify.app'
    },
    {
        name: 'Image to ASCII',
        description: 'An image processing application that converts images into ASCII characters.',
        features: [
            'Create an ASCII version of an image',
            'Download the generated ASCII image'
        ],
        stacks: ['html5', 'css3', 'js', 'vue'],
        image: '',
        git_url: 'https://github.com/nadlambino/vue-image-to-ascii',
        live_url: 'https://imagetoascii-nadlambino.netlify.app'
    },
    {
        name: 'Appointment Booking App',
        description: 'An appointment booking application.',
        stacks: ['html5', 'css3', 'vue', 'js', 'php', 'laravel', 'mysql'],
        image: '',
        git_url: 'https://github.com/nadlambino/appointment-booking',
        live_url: ''
    },
]
