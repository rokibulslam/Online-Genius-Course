
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import initializeFirebase from '../Firebase/Firebase.init';



initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoadin, setIsLoading] = useState(false)
    const [authError, setAuthError] = useState('')
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    
    //  Google SignIn
  const signInWithGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result?.user;
        setUser(user);
        
        setAuthError("");
        const destination = location?.state?.from || "/dashboard";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  const register = (name, password, email, navigation) => {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      setAuthError("")

      const newUser = userCredential.user
    });
  }
    
    
    
    
    return { signInWithGoogle };
};

export default useFirebase;