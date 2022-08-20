import React from "react";
import Login_page from "./login_page";
import Signin_page from "./signin_page";
import Home from "./Home";
import Forgot from "./forgot_password";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Welcome from "./welcome_page";
import { useState } from "react";
import { auth } from "./firebase"; 
import {createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        onAuthStateChanged,
        signOut,
        } from "firebase/auth"
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [email, setEmail] = useState("");
  const [user,setUser] = useState("")
  // const navigate = useNavigate()
  function handleLogOut(){
    signOut(auth).then(()=>{
      console.log("logout successful")
      // navigate("/")

    }).catch((error)=>{
      console.log(error)
    })
  }
  function handleInfo(){
    if(user){
      console.log(user.email)
    }else{
      console.log("plz login")
    }
  }

  useEffect(()=>{
    console.log("use effect")
      const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
          setUser(currentUser)
      })
      return ()=>{unsubscribe()}
  },[])


  return (
    <Router>
      <div className="bg-yellow-50 py-[2px]">
        <div className="flex justify-center m-4">
          <div className="px-4 hover:bg-yellow-100 rounded-md py-1">
            <button>
              <Link to="/">Home</Link>
            </button>
          </div>
          <div className="px-4 hover:bg-yellow-100 rounded-md py-1">
            <button onClick={handleInfo}>User Info</button>
          </div>

          <div className="px-4 hover:bg-yellow-100 rounded-md py-1">
            <button>
              <Link to="/signin">Sign up</Link>
            </button>
          </div>
          <div className="px-4 hover:bg-yellow-100 rounded-md py-1">
            <button>
              <Link to="/login">Log in</Link>
            </button>
          </div>
          <div className="px-4 hover:bg-yellow-100 rounded-md py-1">
            <button onClick={handleLogOut}><Link to="/">log out</Link></button>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login_page email={email} setEmail={setEmail} />} />
        <Route path="/signin" element={<Signin_page email={email} setEmail={setEmail}/>} />
        <Route path="/welcome" element={<Welcome email={email} setEmail={setEmail}/>} />
        <Route path="/forgot-password" element={<Forgot email={email} setEmail={setEmail}/>} />
      </Routes>
    </Router>
  );
}
