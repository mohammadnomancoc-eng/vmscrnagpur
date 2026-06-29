import './App.css';
import Login from './components/Login.jsx';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Wabcamp from './components/Wabcamp.jsx';
import Footer from './components/Footer.jsx';
import ContractInfo from './components/ContractInfo.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PrivateRouts from './components/auth/PrivateRouts.jsx';
import ContractorInfo from './components/ContractorInfo.jsx';

function App() {
  const navigate = useNavigate();
  // const baseUrl = "https://vmscrnagpur-1.onrender.com/"

  const baseUrl = "https://vmscrnagpur-1.onrender.com/";

  const [user, setUser] = useState(localStorage.getItem("AppUser") || null);
  const Token = JSON.parse(localStorage.getItem('Token')) || null;

  const getUser = async () => {
    try {
      const response = await axios.get(baseUrl + `/app/getUserDetails`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        }
      });
      const fetchedUser = response?.data?.user;
      if (fetchedUser) {
        // localStorage.setItem("AppUser", JSON.stringify(fetchedUser));
        setUser(fetchedUser);
        // navigate("/wabcamp");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // useEffect(() => {
  //   if (user) {
  //     navigate("/wabcamp");
  //   } else if (Token && !user) {
  //     getUser();
  //   } else {
  //     navigate("/");
  //   }
  // }, [user, navigate, Token]);

  useEffect(() => {
    if (Token) {
      getUser();
    }
    else {
      navigate("/");
    }
  }, [Token, navigate])

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/wabcamp' element={
          <PrivateRouts>
            <Wabcamp />
          </PrivateRouts>
        } />
        <Route path='/contractInfo' element={
          <PrivateRouts>
            <ContractInfo />
          </PrivateRouts>
        } />
        <Route path='/contractorInfo' element={
          <PrivateRouts>
            <ContractorInfo />
          </PrivateRouts>
        } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
