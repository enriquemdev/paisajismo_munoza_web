// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();
import {createUserWithEmailAndPassword } from 'firebase/auth';

const register = ( auth ) => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
        console.log(res.user)
    })
    .catch((err) => {
        alert(err.message)
        console.log(err.code)
        console.log(err.message)
    })
}

export {register};