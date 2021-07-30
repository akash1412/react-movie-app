import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCfj9fu9aQdXlYZ-Ci47Ul6uwqDWgN1cdA',
	authDomain: 'movie-app-ac5e9.firebaseapp.com',
	projectId: 'movie-app-ac5e9',
	storageBucket: 'movie-app-ac5e9.appspot.com',
	messagingSenderId: '221698485235',
	appId: '1:221698485235:web:1ac640a9a8cb556d644086',
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const DB = firebase.firestore();

export { DB };
