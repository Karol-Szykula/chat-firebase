import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCoM_qmmwglxmXZD4NYr-mSx5_NDiTvISc",
    authDomain: "test-backend-98861.firebaseapp.com",
    databaseURL: "https://test-backend-98861.firebaseio.com",
    projectId: "test-backend-98861",
    storageBucket: "test-backend-98861.appspot.com",
    messagingSenderId: "385519474449"
}

firebase.initializeApp(config)

export const database = firebase.database()