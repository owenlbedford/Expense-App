import {useNavigate} from "react-router-dom";
import {useState} from 'react';
import logo from './assets/logo.png';
import React from 'react';

const Login = () =>{
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    let navigate = useNavigate();
    const onClick = () =>{
        if ( username == "admin" && password == "Admin123"){
            navigate("/mainpageAdmin")
        }
        else if (username == "linemanager" && password == "Linemanager123"){
            navigate("/mainpageLM")
        }
        else if (username == "employee" && password == "Employee123"){
            navigate("/mainpage")
        }
        else{
            console.log("Incorrect username or password")
        }
      }

    return(
        <>
        <main className="login">
            <img className="logo" src = {logo}></img>
            <form className="login-form" onSubmit={onClick}>
                <input className="entry" type="text" name="userName" placeholder="Enter username..."  value ={username} onChange={(e)=>setusername(e.target.value)} required></input>
                <br></br>
                <input className="entry" type="password" name="pw" placeholder="Enter password..." value ={password} onChange={(e)=>setpassword(e.target.value)} required></input>
                <br></br>
                <button type="submit" className="loginbutton" onClick={onClick}>Login</button>
            </form>
        </main>
        <footer className="footerlogin">
            <a className="footer-text">FDM Expense Tracker App</a>
        </footer>
        </>
    )
}
export default Login;
