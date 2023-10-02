/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase.config";

export const AuthContext = createContext(null)


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
        
    }

    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
        
    }
    
    // sign up with email and password
    const createUser = (name, email,img, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }
// sign in
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const handleUpdateProfile = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL:photo
        })
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) =>{
            setUser(user)
            setLoading(false);
        })
    },[])
    console.log(user)

    const authentications ={
        googleLogin,
        createUser,
        signIn,
        githubLogin,
        logOut,
        user,
        loading,
        handleUpdateProfile
    }
    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;