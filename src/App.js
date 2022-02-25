import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert=(massage,type)=>{
    setAlert({
      msg : massage,
      type : type 
          })
          setTimeout(()=>{
            setAlert(null)
          },2000);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#021426';
      showAlert("dark mode activate","success : ");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode activate","success : ");

    }
  }
  return (
    <>
          <Navbar title="ActionText" about="About Starboy" mode={mode} toggleMode={toggleMode}/>
                  <Alert alert={alert}/>
             <div className="container my-3" >
                   <TextForm heading="Word Counter | Remove Extra Spaces | Convert Lower/Upper Case" mode={mode}/>                    
             </div>
             <BrowserRouter>
             <Routes>
               <Route path="/about" element={<About mode={mode} />}></Route>
               
                           
          
              </Routes>
             </BrowserRouter>

         
          
    </>
  );
}

export default App;
