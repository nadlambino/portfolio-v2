import tictactoe1 from './../assets/images/tictactoe/1.png'
import tictactoe2 from './../assets/images/tictactoe/2.png'
import tictactoe3 from './../assets/images/tictactoe/3.png'
import tictactoe4 from './../assets/images/tictactoe/4.png'
import tictactoe5 from './../assets/images/tictactoe/5.png'
import snapify1 from './../assets/images/snapify/snapify-1.png'
import snapify2 from './../assets/images/snapify/snapify-2.png'
import snapify3 from './../assets/images/snapify/snapify-3.png'
import snapify4 from './../assets/images/snapify/snapify-4.png'
import snapify5 from './../assets/images/snapify/snapify-5.png'
import snapify6 from './../assets/images/snapify/snapify-6.png'
import dictionary1 from './../assets/images/dictionary/dictionary1.png'
import dictionary2 from './../assets/images/dictionary/dictionary2.png'
import dictionary3 from './../assets/images/dictionary/dictionary3.png'
import dictionary4 from './../assets/images/dictionary/dictionary4.png'
import ascii1 from './../assets/images/ascii/ascii1.png'
import ascii2 from './../assets/images/ascii/ascii2.png'
import ascii3 from './../assets/images/ascii/ascii3.png'

export default [
  {
    name: 'Snapify',
    description:
      'A simple social media app that allows user to upload images or videos, like, and comment to a post.',
    features: [
      'Sign up or sign in to an existing account',
      'Post up to 5 media such as images and videos',
      'Comment on a post',
      'Like a post',
      'Newsfeed algorithm based on engagement and recency'
    ],
    stacks: [
      'html5',
      'css3',
      'tailwind',
      'js',
      'typescript',
      'react',
      'nodejs',
      'express',
      'mongoose',
      'jwt'
    ],
    image: snapify1,
    images: [snapify1, snapify2, snapify3, snapify4, snapify5, snapify6],
    git_url: 'https://github.com/nadlambino/snapify',
    live_url: 'https://snapify-nadlambino.netlify.app'
  },
  {
    name: 'Dictionary App',
    description: 'An dictionary app with phonetics and audio.',
    features: ['Word of the day', 'Spelling Game'],
    stacks: ['html5', 'css3', 'tailwind', 'js', 'vue', 'nuxt'],
    images: [dictionary1, dictionary2, dictionary3, dictionary4],
    git_url: 'https://github.com/nadlambino/nuxt-dictionary',
    live_url: 'https://dictionary-nadlambino.netlify.app'
  },
  {
    name: 'Tic Tac Toe',
    description: 'An online Tic Tac Toe game where two players can play against each other.',
    stacks: ['html5', 'css3', 'sass', 'tailwind', 'js', 'react', 'socket.io'],
    images: [tictactoe1, tictactoe2, tictactoe3, tictactoe4, tictactoe5],
    git_url: 'https://github.com/nadlambino/tictactoe-react',
    live_url: 'https://tictactoe-nadlambino.netlify.app'
  },
  {
    name: 'Image to ASCII',
    description: 'An image processing application that converts images into ASCII characters.',
    features: ['Create an ASCII version of an image', 'Download the generated ASCII image'],
    stacks: ['html5', 'css3', 'js', 'vue'],
    images: [ascii1, ascii2, ascii3],
    git_url: 'https://github.com/nadlambino/vue-image-to-ascii',
    live_url: 'https://imagetoascii-nadlambino.netlify.app'
  }
]
