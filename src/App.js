
import React, { useState } from 'react';
import './App.css';

import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = '#042743 ';
      showAlert("dark mode has been enable", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enable", "success")
    }
  }
  return (
    <>
     
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className='container'>
        
          <Textform
              mode={mode}
              showAlert={showAlert}
              heading="Enter the text to analyze"
            />

        </div>

     
    </>
  );
}

export default App;
