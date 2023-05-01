import FirestoreLogo from './images/firestore-logo.png';
import CloudSQLLogo from './images/cloud-sql-logo.png';
import './App.css';
import Feed from './feed/Feed.jsx';
import { useState } from 'react';

function App() {
  const [CloudSQL, setCloudSQL] = useState(true);

  const handleToggle = () => { 
    setCloudSQL(!CloudSQL); 
  }; 

  return (
    <div className="App">
      <div className='device-area'>
        <div className='platform-toggle-container'>
          <img src={CloudSQLLogo}/>
          <label className="switch">
            <input type="checkbox" onChange={handleToggle}/>
            <span className="slider round"></span>
          </label>
          <img src={FirestoreLogo}/>
        </div>
        
      <Feed CloudSQL={CloudSQL} />
      </div>
    </div>
  );
}

export default App;
