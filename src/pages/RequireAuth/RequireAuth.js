import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import app from '../../firebase.init';


const RequireAuth = ({children}) => {
    const auth = getAuth(app);
    const [user] = useAuthState(auth);
    const location = useLocation();

    if(!user){
        return <Navigate to="/sign-in" state={{from: location}} replace></Navigate>
    }
    return children;
};

export default RequireAuth;