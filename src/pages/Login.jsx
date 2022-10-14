import React from 'react'
import Add from '../img/folder.png'
function Login() {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>Simple chat</span>
            <span className="title">Login</span>
            <form >
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password' />
                <button>Login</button>
            </form>
            <p>You do'nt have an account? Register</p>
        </div>
    </div>
  )
}

export default Login