import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { app } from '../firebase.config'
function Login() {
    
    const navigate = useNavigate()
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const auth = getAuth(app)


    const onSubmit = async (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential=> {
                const user = userCredential.user
                console.log('Signed In : ', user);
                navigate('/')
            })
            .catch(error => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log('error : ', errorCode = 'message :', errorMessage);
            })
    }

  return (
    <div>
        <label htmlFor="email-address">
            Email Address
        </label>
        <input 
            type="email" 
            id="email-address"
            name='email'
            required
            placeholder='email'
            onChange={(e)=>setEmail(e.target.value)}
        />
        <label htmlFor="password">
            Password
        </label>
        <input 
            type="password" 
            id="password"
            name='password'
            required
            placeholder='Password'
            onChange={(e)=>setPassword(e.target.value)}
        />

        <div>
            <button onClick={onSubmit}>
                SignUp
            </button>
        </div>                              
    </div>
  )
}

export default Login
