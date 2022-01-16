import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyApWbN6QU_TNFqquSrrXqefC2KpVU8TiQE",
    authDomain: "netflix-clone-d5b12.firebaseapp.com",
    projectId: "netflix-clone-d5b12",
    storageBucket: "netflix-clone-d5b12.appspot.com",
    messagingSenderId: "84086284374",
    appId: "1:84086284374:web:c7e6f1c6edd0491a951bf7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;