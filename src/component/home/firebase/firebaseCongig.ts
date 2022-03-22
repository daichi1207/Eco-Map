import {initializeApp} from 'firebase/app'
import {getFirestore} from "firebase/firestore";





const firebaseConfig = {
    apiKey: "AIzaSyAtLjA18wC0M8RpzRtSqwnTV71uD9zGS8Q",
    authDomain: "eco-map-dev-kapikei.firebaseapp.com",
    projectId: "eco-map-dev-kapikei",
    storageBucket: "eco-map-dev-kapikei.appspot.com",
    messagingSenderId: "811374750990",
    appId: "1:811374750990:web:2663ff38034f2f4a903b5f",
    measurementId: "G-FTRBJ0ZWVN"
};

const app =initializeApp(firebaseConfig);
export const db =getFirestore(app)
