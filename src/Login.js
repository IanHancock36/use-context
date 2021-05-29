import React,{useState, useContext} from 'react'
import {LoginContext} from './Contexts/LoginContext'

const Login = () => {
 const {setUserName, setShowProfile} = useContext(LoginContext)
    return (
        <div>
            <input type='text' placeholder='First Name' onChange={(event)=>{
                setUserName(event.target.value)
            }}
                />
            <input type='text' placeholder='Password'/>
            
            <button onClick ={() => {setShowProfile(true)}}>
                Login
            </button>
            
        </div>
    )
}

export default Login
