import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
	apiKey: "AIzaSyA18EDh7YbnyFQnaiTdsT3snitarOjq5zE",
	authDomain: "rod-store.firebaseapp.com",
	projectId: "rod-store",
	storageBucket: "rod-store.appspot.com",
	messagingSenderId: "773133898794",
	appId: "1:773133898794:web:2fabae814c450855e9df53",
	measurementId: "G-42GX6X1FG7",
};

export const createUserProfileDoc = async (userAuth, otherData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();
	console.log(snapShot.data());

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...otherData,
			});
		} catch (err) {
			console.err("error creating an user:", err.message);
		}
	}
	return userRef;
};

export const addCollectionAndDocs = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();
	objectsToAdd.forEach((obj) => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return await batch.commit();
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
