import firebase from 'firebase/app';
import 'firebase/firestore';

// Get a Firestore instance
export const db = firebase
    .initializeApp({
        apiKey: 'AIzaSyDcX22nBFb8oVog4VaJ4HoReGB0XVkBHh4',
        authDomain: 'den-gamle-by-94acb.firebaseapp.com',
        databaseURL: 'https://den-gamle-by-94acb.firebaseio.com',
        projectId: 'den-gamle-by-94acb',
        storageBucket: 'den-gamle-by-94acb.appspot.com',
        messagingSenderId: '7652343749',
        appId: '1:7652343749:web:ce8d325f5989e691e555ac',
        measurementId: 'G-LYWP5DZ5M2'
    })
    .firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };

// if using Firebase JS SDK < 5.8.0
// db.settings({ timestampsInSnapshots: true });
