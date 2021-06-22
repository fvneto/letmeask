import firebase from 'firebase/app';

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REAC_APP_API_KEY,
    authDomain: process.env.REAC_APP_AUTH_DOMAIN,
    databaseURL: process.env.REAC_APP_DATABASE_URL,
    projectId: process.env.REAC_APP_PROJECT_ID,
    storageBucket: process.env.REAC_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REAC_APP_MESSAGING_SENDER_ID,
    appId: process.env.REAC_APP_APP_ID
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const database = firebase.database();    