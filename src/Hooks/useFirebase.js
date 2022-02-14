import React, { useState } from 'react';
import initializeFirebase from '../Firebase/Firebase.init';
import {getAuth,  GoogleAuthProvider} from 'firebase/auth'


initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoadin, setIsLoading] = useState(false)
    const [authError, setAuthErro] = useState('')
    const auth = getAuth()
    const GoogleAuthProvider = new GoogleAuthProvider()
    
    
    
    
    
    
    return
};

export default useFirebase;