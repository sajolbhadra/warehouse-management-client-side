import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, signOut } from "firebase/auth";
import app from '../firebase.init';

const useFirebase = () => {
    const [user, setUser] = useState({});


    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(user)
                setUser(user);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    const logOut = () => {
        signOut(auth)
        .then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user)
                console.log(user)
            } else {
                setUser({})
            }
        });
    }, [])

    return {
        user,
        signInWithGoogle,
        logOut
    }

};
export default useFirebase;