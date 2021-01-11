import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

const config = {
	apiKey: "AIzaSyAAPXX9iJDHmEUZ5pgcTzAYyhhl-2t_m3k",
    authDomain: "ivarnilsenentreprenoras.firebaseapp.com",
    projectId: "ivarnilsenentreprenoras",
    storageBucket: "ivarnilsenentreprenoras.appspot.com",
    messagingSenderId: "348128964081",
    appId: "1:348128964081:web:254cff833b4e0941c12850"
};
let firebaseConfig = firebase.initializeApp(config);
const storage = firebase.storage();

export {
	storage, firebaseConfig as default
}
