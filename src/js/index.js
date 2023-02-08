// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

//Firebase stuff /////////////////////////////////////////////////////
//config oject for the firebase project
import firebaseConfig from './firebase2/config.js';

//The function to start using firebase stuff
import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth';

//init firebase app with the info on the firebaseConfig Object
initializeApp(firebaseConfig);

const auth = getAuth();

import { register } from './firebase2/auth';

const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    register(auth);
})