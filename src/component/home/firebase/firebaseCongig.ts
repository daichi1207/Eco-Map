import {initializeApp} from 'firebase/app'
import {getFirestore} from "firebase/firestore";





const firebaseConfig = {
    apiKey: "AIzaSyCUi2uYCrkIu7Ncj9ogv7tAWdc8Ip201d8",
    authDomain: "ecomap-d8c09.firebaseapp.com",
    projectId: "ecomap-d8c09",
    storageBucket: "ecomap-d8c09.appspot.com",
    messagingSenderId: "671038166229",
    appId: "1:671038166229:web:fecf1c6cd906a76d4bbe5c",
    measurementId: "G-B33XF9VKP6"
};

const app =initializeApp(firebaseConfig);
export const db =getFirestore(app)
