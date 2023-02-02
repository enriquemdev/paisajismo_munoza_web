
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDwAv4dPHvXBGTXWk9N4lemF9P6vPhmEXQ",
    authDomain: "paisajismo-munoza.firebaseapp.com",
    databaseURL: "https://paisajismo-munoza-default-rtdb.firebaseio.com",
    projectId: "paisajismo-munoza",
    storageBucket: "paisajismo-munoza.appspot.com",
    messagingSenderId: "1013941730612",
    appId: "1:1013941730612:web:c1d3e7c6ded8f33d30f961",
    measurementId: "G-0B66K64DG6"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const register = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    auth.createUserWithEmailAndPassword(email, password)
    .then((res) => {
        console.log(res.user)
    })
    .catch((err) => {
        alert(err.message)
        console.log(err.code)
        console.log(err.message)
    })
}