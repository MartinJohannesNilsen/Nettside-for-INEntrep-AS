import firebase from "firebase/app";
import "firebase/analytics";

const config = {
	apiKey: "AIzaSyAAPXX9iJDHmEUZ5pgcTzAYyhhl-2t_m3k",
    authDomain: "ivarnilsenentreprenoras.firebaseapp.com",
    projectId: "ivarnilsenentreprenoras",
    storageBucket: "ivarnilsenentreprenoras.appspot.com",
    messagingSenderId: "348128964081",
    appId: "1:348128964081:web:254cff833b4e0941c12850",
    measurementId: "G-N30029KEB4"
};
const firebaseApp = firebase.initializeApp(config);
const analytics = firebase.analytics();

export { firebaseApp, analytics };
