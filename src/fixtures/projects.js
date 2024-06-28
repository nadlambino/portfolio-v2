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
import phpmvc1 from './../assets/images/phpmvc/homepage.png'
import phpmvc2 from './../assets/images/phpmvc/installation.png'
import phpmvc3 from './../assets/images/phpmvc/commands.png'
import phpmvc4 from './../assets/images/phpmvc/registry.png'
import phpmvc5 from './../assets/images/phpmvc/provider.png'
import phpmvc6 from './../assets/images/phpmvc/view.png'
import landing from './../assets/images/sprintly/landing.png'
import registration from './../assets/images/sprintly/registration.png'
import login from './../assets/images/sprintly/login.png'
import status from './../assets/images/sprintly/status.png'
import kanban from './../assets/images/sprintly/kanban.png'
import task from './../assets/images/sprintly/task.png'
import subtask from './../assets/images/sprintly/subtask.png'
import dashboard from './../assets/images/sprintly/dashboard.png'
import uploadable1 from './../assets/images/uploadable/1.png'
import uploadable2 from './../assets/images/uploadable/2.png'
import uploadable3 from './../assets/images/uploadable/3.png'
import uploadable4 from './../assets/images/uploadable/4.png'
import uploadable5 from './../assets/images/uploadable/5.png'
import uploadable6 from './../assets/images/uploadable/6.png'
import uploadable7 from './../assets/images/uploadable/7.png'
import uploadable8 from './../assets/images/uploadable/8.png'

export default [
  {
    name: 'Inspira: MVC Framework',
    description: 'A Laravel-inspired framework. The sole purpose of this project is for me to understand how Laravel works under the hood, deepens my knowledge with PHP, and follow PSR convention.',
    features: ['Routing', 'View', 'Service Container', 'Collection'],
    stacks: ['php 8', 'docker', 'apache', 'psr'],
    images: [phpmvc1, phpmvc2, phpmvc3, phpmvc4, phpmvc5, phpmvc6],
    git_url: 'https://github.com/nadlambino/inspira-framework',
    live_url: ''
  },
  {
    name: 'Laravel Uploadable',
    description: 'An open source laravel package that automagically handles the file uploads for your uploadable models.',
    features: [
      'Automatically handle single or multiple file uploads for your uploadable models',
      'Create a database entry for each file uploaded in uploads table containing all the necessary information about the file and the model it is attached to',
      'Customize the file name and path location of the uploaded files',
      'With built in validation rules for different types like images, videos, and documents',
      'Ability to customize the validation rules or completely disable them if you already have your own validation rules in your form request',
      'Ability to manually handle the file upload if needed',
      'Ability to temporarily disable the file upload if needed',
      'Ability to either add the new uploads to and existing uploads or replace the existing uploads with the new ones when updating the uploadable model',
      'With built in relationship methods for your model to easily query the uploaded files attached to them',
      'Ability to run a callback function when a new file is uploaded',
      'Ability to put the file upload process into a queue and run it in the background'
    ],
    stacks: ['php', 'laravel'],
    images: [uploadable1, uploadable2, uploadable3, uploadable4, uploadable5, uploadable6, uploadable7, uploadable8],
    git_url: 'https://github.com/nadlambino/laravel-uploadable',
    live_url: 'https://packagist.org/packages/nadlambino/uploadable'
  },
  {
    name: 'Sprintly',
    description: 'A simple task management app built with simplicity in mind.',
    features: [
      'Sign up or sign in to an existing account', 
      'Create, edit, delete statuses',
      'Drag and drop status to sort it', 
      'Create, edit, and delete priority levels', 
      'Create, edit, delete, and manage tasks', 
      'Ability to create a task with images',
      'Ability to group tasks by creating a parent task', 
      'On kanban display, drag and drop task to move it to its new status',
      'On table display, move task to its new status forward or backward according to the ordering of the status',
      'Update user information in the profile section'
    ],
    stacks: ['html5', 'css3', 'tailwind', 'js', 'vue', 'inertia.js', 'php', 'laravel', 'mysql'],
    images: [landing, registration, login, status, kanban, task, subtask, dashboard],
    git_url: 'https://github.com/nadlambino/sprintly',
    live_url: ''
  },
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
      'redux',
      'nodejs',
      'express',
      'mongoose',
      'jwt',
      'docker'
    ],
    image: snapify1,
    images: [snapify1, snapify2, snapify3, snapify4, snapify5, snapify6],
    git_url: 'https://github.com/nadlambino/snapify',
    live_url: 'https://snapify-nadlambino.netlify.app'
  },
  {
    name: 'Dictionary App',
    description: 'A dictionary app with phonetics and audio.',
    features: ['Word of the day', 'Spelling Game'],
    stacks: ['html5', 'css3', 'tailwind', 'js', 'vue', 'nuxt'],
    images: [dictionary1, dictionary2, dictionary3, dictionary4],
    git_url: 'https://github.com/nadlambino/nuxt-dictionary',
    live_url: 'https://dictionary-nadlambino.netlify.app'
  },
  {
    name: 'Online TicTacToe',
    description: 'An online TicTacToe game where two players can play against each other.',
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
