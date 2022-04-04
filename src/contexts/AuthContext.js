import { createContext, useContext, useEffect, useState } from "react"; 
import { auth, db } from "../firebase-config";
import { GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth'
import { collection, doc, getDoc, getDocFromCache, getDocs } from "firebase/firestore";
import { stringify } from "@firebase/util";


const AuthContext = createContext({
    currentUser: null,
    signup: () => Promise,
    login: () => Promise,
    signOut: () => Promise,
    signInWithGoogle: () => Promise,
    forgetPassword: () => Promise,
})

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(()=> {
        const unscribe = onAuthStateChanged(auth, user => {
            const userEmail = stringify(user.email)
            console.log(userEmail)
            const userRef = collection(db, "users")
            getDocs(userRef)
                .then((res) => {
                    const userList = res.docs.map((doc) => ({...doc.data(), id: doc.id}))
                    const userNew = userList.filter((userFilter) => userFilter.email === user.email)
                    setCurrentUser(userNew[0])
                })
 
        })
        return () => {
            unscribe()
        }
    }, [])

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function signInWithGoogle() {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }

    function forgetPassword(email) {
        return sendPasswordResetEmail(auth, email, {url: 'http://localhost:3000/login', })
    }

    function signOut() {
        return signOut(auth)
    }

    const value = {
        currentUser,
        signup,
        login,
        signOut,
        signInWithGoogle,
        forgetPassword,
    }
    return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider> 
    )   
}