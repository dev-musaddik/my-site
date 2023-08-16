import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Contract from "./components/Contract/Contract";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import { HashLoader } from "react-spinners";
import Portfolio from "./Portfolio/Portfolio";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
          }}
        >
          <HashLoader color="#4C5270" />
        </div>
      ) : (
        <div className={`App ${darkMode ? "dark-mode" : ""}`}>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Home darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Portfolio darkMode={darkMode}/>
          <Services darkMode={darkMode} />
          <Contract darkMode={darkMode} />
          
        </div>
      )}
    </>
  );
}

export default App;
