import FirestoreLogo from './images/firestore-logo.png';
import CloudSQLLogo from './images/cloud-sql-logo.png';
import './App.css';
import Feed from './feed/Feed.jsx';
import React, { useState } from 'react';
import Stats from './stats/Stats';


export const CloudSQLPerfContext = React.createContext()
export const FirestorePerfContext = React.createContext()
export const CloudSQLCountContext = React.createContext()
export const FirestoreCountContext = React.createContext()

export const JSONContext = React.createContext()

export const SamePageContext = React.createContext()

export const AverageTimeContext = React.createContext()



function App() {
  const [CloudSQL, setCloudSQL] = useState(true);
  const [CloudSQLPerf, setCloudSQLPerf] = useState(0.0);
  const [FirestorePerf, setFirestorePerf] = useState(0.0);
  const [CloudSQLCount, setCloudSQLCount] = useState(0);
  const [FirestoreCount, setFirestoreCount] = useState(0);

  const [currentJSON, setCurrentJSON] = useState({});
  const [useSamePage, setUseSamePage] = useState(false);
  const [useAverageTime, setUseAverageTime] = useState(true);

  const handleToggle = () => { 
    setCloudSQL(!CloudSQL); 
  }; 

  return (
    <div className="App">
      <CloudSQLPerfContext.Provider value={{CloudSQLPerf, setCloudSQLPerf}}>
        <FirestorePerfContext.Provider value={{FirestorePerf, setFirestorePerf}}>
          <CloudSQLCountContext.Provider value={{CloudSQLCount, setCloudSQLCount}}>
            <FirestoreCountContext.Provider value={{FirestoreCount, setFirestoreCount}}>
              <JSONContext.Provider value={{currentJSON, setCurrentJSON}}>
                <SamePageContext.Provider value={{useSamePage, setUseSamePage}}>
                  <AverageTimeContext.Provider value={{useAverageTime, setUseAverageTime}}>

                    <div className='device-area'>
                      <div className='platform-toggle-container'>
                        <img src={CloudSQLLogo}/>
                        <label className="switch">
                          <input type="checkbox" onChange={handleToggle}/>
                          <span className="slider round"></span>
                        </label>
                        <img src={FirestoreLogo}/>
                      </div>
                      
                      <Feed CloudSQL={CloudSQL}/>
                      <p className='mark'>Made in Leimen</p>
                    
                    </div>
                    <Stats CloudSQL={CloudSQL}/>

                  </AverageTimeContext.Provider>
                </SamePageContext.Provider>
              </JSONContext.Provider>
            </FirestoreCountContext.Provider>
          </CloudSQLCountContext.Provider>
        </FirestorePerfContext.Provider>
      </CloudSQLPerfContext.Provider>
    </div>
  );
}

export default App;
