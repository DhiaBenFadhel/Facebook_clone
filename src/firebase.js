import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCschTRMtuv1lZ4lxLoPkOXQPd2IiQlriw",
    authDomain: "eme-info-g1.firebaseapp.com",
    databaseURL: "https://eme-info-g1.firebaseio.com",
    projectId: "eme-info-g1",
    storageBucket: "eme-info-g1.appspot.com",
    messagingSenderId: "1095350250148",
    appId: "1:1095350250148:web:ed3e414228fe900aa19431",
    measurementId: "G-FG1RDBZS6J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;