import React,{useState} from 'react'

const Login = () => {
const [username, setUserName] = useState('')
const [showProfile, setShowProfile] = useState(false)
    return (
        <div>
            <input type='text' placeholder='First Name' onChange={(event)=>{
                setUserName(event.target.value)
            }}
                />
            <input type='text' placeholder='Password'/>
            
            <button onClick={()=> {
                setShowProfile(true)
            }}>
                Login
            </button>
            {showProfile && <h1> {username}  </h1>}
        </div>
    )
}

export default Login
