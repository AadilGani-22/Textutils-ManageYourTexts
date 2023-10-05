import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import { ReactDOM } from "react";
import TextForm from "./components/TextForm";
import React from "react";
import { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,Route,Routes
} from "react-router-dom";

function App() {
  //whether dark mode is enabled or not
  const [mode, setMode] = useState("light");
  const [alert , setAlert] = useState(null);

  const showAlert = (message , type)=>{
    setAlert ({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  } 



  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been enabled" , "succes");
      // document.title = 'TextUtils - Dark Mode'
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled" , "succes");
      // document.title = 'TextUtils - Light Mode'
    }
  };

  // const [ntext , setText] = useState('Enable Dark Mode');

  // const toggleText = ()=>{
  //   if(ntext === 'Enable Dark Mode'){
  //     setText('Enable Light Mode');
  //   }
  //   else{
  //     setText('Enable Dark Mode');
  //   }
  // }

  return (
    <>
    <Router>

      <Navbar
        title="TextUtils"
        aboutText="About us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      {/* <Navbar /> */}
      <div className="container my-3">
      <Routes>
          <Route path="/about" element={ <About  mode={mode} />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter , Character Counter " mode={mode} />} />
      </Routes>
        {/* <About/> */}
      </div>
    </Router>
    </>
  );
}

export default App;
