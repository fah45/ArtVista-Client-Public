import { GithubAuthProvider, GoogleAuthProvider,  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Create User
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // update profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // Sign in User
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign In With Google
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // SignIn With Github
    const gitHubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider)
    }

      // SignOut
      const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            console.log("Observing : ", currentUser)
            setUser(currentUser)
            
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user, setLoading, signUp, signIn, logOut, googleSignIn, gitHubSignIn,  updateUserProfile, loading,setUser
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;