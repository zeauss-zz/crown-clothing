import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCsJANMFkgqGt2smJVQK1Ue_a7L5ukO9MU",
    authDomain: "crwn-db-d43e7.firebaseapp.com",
    databaseURL: "https://crwn-db-d43e7.firebaseio.com",
    projectId: "crwn-db-d43e7",
    storageBucket: "crwn-db-d43e7.appspot.com",
    messagingSenderId: "871945377532",
    appId: "1:871945377532:web:4ec466aa611d21a10ba979",
    measurementId: "G-9EYFH5FQFJ"
};

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set( {
                name : displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('Error creating user', error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
