import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAQjXQq6Sp6I3Uehxo_WfP4iYLCZCwtCqU",
    authDomain: "ecomm-db-8c5a2.firebaseapp.com",
    databaseURL: "https://ecomm-db-8c5a2.firebaseio.com",
    projectId: "ecomm-db-8c5a2",
    storageBucket: "ecomm-db-8c5a2.appspot.com",
    messagingSenderId: "893030645398",
    appId: "1:893030645398:web:4b693b1cb6c4da1bc7ccb7"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get()
    console.log(snapshot)

    if(!snapshot.exists){
        const { displayName, email, uid } = userAuth;
        const createdAt = new Date()

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('Error while creating user',error.message )
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;