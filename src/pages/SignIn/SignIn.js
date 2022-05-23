import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Button } from 'react-bootstrap';
import app from '../../firebase.init';
import { getAuth } from 'firebase/auth';
import useFirebase from '../../hooks/useFirebase';


const SignIn = () => {
    // const emailRef = useRef('');
    // const passwordRef = useRef('');
    const auth = getAuth(app)
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate('/home');
    }
    const location = useLocation();
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                // navigate(from, { replace: true })
            })
    }

    const handleSignIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password= event.target.password.value;
        // const email = emailRef.current.value;
        // const password = passwordRef.current.value;
        // signInWithEmailAndPassword(email, password);
        console.log(user)
    }
    return (
        <div>
            <h1 className='text-center bg-primary text-light py-2 '>Sign In</h1>
            

            <form onSubmit={handleSignIn} className="text-center mt-5 mb-3">

                <input type="email"  className='my-2 w-25 my-1 px-3 py-1 border rounded-pill text-primary' name="email" placeholder='Your Email' required /> <br />
                <input type="password"  className='my-2 w-25 my-1 px-3 py-1 border rounded-pill text-primary' name="password" placeholder='Password' required /> <br />
                <input type="submit" className='rounded-pill px-5 w-25 my-2 btn btn-primary' value="Sign In" />
            </form>
            <h4 className='text-center mb-2'>New User?</h4>
            <div className='text-center mt-3 mb-5 pb-5'>
                <Link to='/sign-up' className=' btn btn-primary rounded-pill px-5'>Sign Up here!</Link>
                <Button onClick={handleGoogleSignIn} className='rounded-pill  px-5 mx-2 '> Google SIgn In </Button>
            </div>
        </div>
    );
};

export default SignIn;