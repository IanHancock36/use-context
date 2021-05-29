import './App.css';
import Login from './Login'
import React , {useState} from 'react' 
import Profile from './Profile'
import {LoginContext} from './Contexts/LoginContext'


function App() {
  const [username, setUserName] = useState('')
  const [showProfile, setShowProfile] = useState(false)
  return (
    
    <div className="App">
      <LoginContext.Provider value={{username, setUserName, setShowProfile}}>
      
      {showProfile ? <Profile /> : <Login /> }

      </LoginContext.Provider>

    </div>
  );
}

export default App;
