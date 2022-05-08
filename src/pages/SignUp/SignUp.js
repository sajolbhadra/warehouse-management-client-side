import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const SignUp = () => {
    const navigate = useNavigate();
        const navigateLogin =() => {
            navigate('/home')
        }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const handleSignUp= (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password= event.target.password.value;

        createUserWithEmailAndPassword(email, password);
        console.log(user)
        console.log(loading)
        console.log(error)
        //to redirect after sign up
        if(user){
            navigate('/home');
        }
      }


    return (
        <div>
            <h1 className='text-center bg-primary text-light py-2 '>Sign Up</h1>

            <form onSubmit={handleSignUp} className="text-center mt-5 mb-3">

                <input type="text" className='w-25 my-1 px-3 py-1 border rounded-pill text-primary' name="name" placeholder='Your Name' required /> <br />
                <input type="email" className='w-25 my-1 px-3 py-1 border rounded-pill text-primary' name="email" placeholder='Your Email' required /> <br />
                <input type="password" className='w-25 my-1 px-3 py-1 border rounded-pill text-primary' name="password" placeholder='Password' required /> <br />
                {/* <input type="password" className='w-25 my-1 px-3 py-1 border rounded-pill text-primary' name="password2" placeholder='Re-type Your Password' required /> <br /> */}
                <input type="submit" className='rounded-pill px-5 w-25 my-2 btn btn-primary' value="Sign Up" />
            </form>
            <h4 className='text-center mb-2'>Already Signed Up?</h4>
            <div className='text-center mt-3 mb-5 pb-5'>
                <Link to='/sign-in' className=' btn btn-primary px-5 mx-3 rounded-pill'>Sign In With Email</Link>
                <Button className='rounded-pill  px-5 mx-2 '> Google SIgn In </Button>
            </div>
        </div>
    );
};

export default SignUp;