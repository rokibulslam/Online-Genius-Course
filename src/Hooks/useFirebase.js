import { useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import initializeFirebase from "../Firebase/Firebase.init";

// Initialize firebase

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // Google SignIn
  const signInWithGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result?.user;
        setUser(user);

        // Save user to database
        saveUserData(user?.email, user?.displayName, "PUT");
        setAuthError("");
        const destination = location?.state?.from || "/dashboard";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // Register New User
  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user to Database
        saveUserData(email, name, "POST");
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        navigate("/");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // Login User
  const loginUser = (email, password, location, navigate) =>{
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/dashboard";
        navigate(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // Observe User's State
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // Logout User
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };
  // Get user role from database
  useEffect(() => {
    fetch()
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user?.email]);
  // Save user to database
  const saveUserData = (email, name, method) => {
    const userData = { email, name };
    fetch('', {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    }).then();
  };

  return {
    user,
    isLoading,
    signInWithGoogle,
    logout,
    authError,
    registerUser,
    loginUser,
    admin,
  };
};
export default useFirebase;
