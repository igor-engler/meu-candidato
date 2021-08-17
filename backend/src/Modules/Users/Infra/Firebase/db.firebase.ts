import firebase from "firebase";
import { config } from "../../../../Config/config.firebase";

const db = firebase.initializeApp(config.firebaseConfig);

export { db }