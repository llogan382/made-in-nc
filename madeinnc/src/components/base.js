// Allows us to mirror our base with our firebase

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDwxMsWF8pD4GTTWI93zGjPDECJX1QuVXU",
    authDomain: "madeinnc-test.firebaseapp.com",
    databaseURL: "https://madeinnc-test.firebaseio.com",
    projectId: "madeinnc-test"

});
const db = firebaseApp.firestore();

// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyDwxMsWF8pD4GTTWI93zGjPDECJX1QuVXU",
//     authDomain: "madeinnc-test.firebaseapp.com",
//     databaseURL: "https://madeinnc-test.firebaseio.com",

// });

// this will return the database we have
// const base = Rebase.createClass(firebaseApp.database())


export default db;