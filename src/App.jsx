import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.config";
import { useDispatch } from "react-redux";
import { setUser } from "./store/auth-slice";

const App = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, user =>{
      if(user){
         dispatch(setUser({...user}))
         console.log(user);
      }else{
          navigate('/login')
      }
    })
  }, [])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/account" element={<Account/>} />
      </Routes>
    </>
  );
};

export default App;
