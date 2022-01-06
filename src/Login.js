import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import {auth} from './firebase'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    // console.log(useState(''))
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        // firebase login stuff
        auth.signInWithEmailAndPassword(email, password).then((auth)=>{
            auth != null?
            navigate('/')
            :console.log("wrong identity");
        }).catch((error)=>{
            alert(error.message);
        })
    }

    const register = (e) => {
        e.preventDefault();

        // firebase register stuff
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            console.log("successfully created user with email and password", auth);
            auth != null?
            navigate('/')
            : console.log("gg");

        }).catch((error) => {
            alert(error.message);
        })
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img 
                className='login__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'alt='' 
                />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>

                    <button className='login__signInButton' onClick={signIn} type='submit'>Sign In</button>
                </form>

                    <p>
                        By signing-in you agree to the LILPIGGIE'S AMAZON Conditions of Use & Sale. Please
                        see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>

                    Don't have an account yet? <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>

            </div>
        </div>
    )
}

export default Login
