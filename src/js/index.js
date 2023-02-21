// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

////////////////////////////////////  Firebase stuff  /////////////////////////////////////////////////////
//config oject for the firebase project
import firebaseConfig from './firebase2/config.js';

//Firebase library imports
import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth';

//Callings to firebase´s functions
initializeApp(firebaseConfig); //init firebase app with the info on the firebaseConfig Object
const auth = getAuth();

//Imports for my structure of files to use firebase
import { register } from './firebase2/auth';

//Use of my own functions to use firebase
const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    register(auth);
})