import './App.css';
import Login from './Login'
import React , {useState} from 'react' 
import Profile from './Profile'

function App() {
  const [showProfile , setShowProfile] = useState(false)
  return (
    <div className="App">
      {showProfile ? <Profile /> : <Login /> }



    </div>
  );
}

export default App;
