import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeFirebase = () => {
    return initializeApp(firebaseConfig);
}

export default initializeFirebase;