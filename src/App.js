import "./App.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Login/Login";



function App() {
  const [login, setLogin] = useState(false);
  const [cookie] = useCookies([""]);

  let navigate = useNavigate();
  
  // console.log(cookie);
  useEffect(() => {
    if (!cookie.eload_token) {
      setLogin(false);
      navigate('/login');

    } else {
      setLogin(true);
      // navigate('/dashboard');
    }
  }, []);

console.log(login,'login')
  return (
    <>
      {login ? <Layout setLogin={setLogin} /> : <Login setLogin={setLogin} /> }

    </>
  );
}

export default App;
