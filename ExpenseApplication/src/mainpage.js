import {useNavigate} from "react-router-dom";
import SubmitClaim from "./submitClaim";
import fileclaim from './assets/fileclaim.png';
import currentexpenses from './assets/currentexpenses.png';
import reports from './assets/reports.png';
import claimhistory from './assets/claimhistory.png';
import notif from './assets/notif.png';
import settings from './assets/settings.png';
import React from 'react';

const Mainpage = () =>{
    let navigate = useNavigate();
    const dateBuilder = (d) =>{
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day} ${date} ${month} ${year}`
    }
    
    const onClick = () =>{
        navigate("/")
    }

    const fileAClaim = () => {
        navigate("/submitClaim")
    }
    const viewClaims = () => {
        navigate("/submittedClaims")
    }
    return(
        <div className="app">
            <main>
                <div className="select-use">
                    <p className="title">Employee Home
                    <button type="login" className="login-button" onClick={onClick}>Logout</button>
                    </p>
                </div>
                <div className="location-box">
                    <div className="location">London, UK</div>
                    <div className="date">{dateBuilder(new Date())}</div>
                </div>
                <div className="overview">
                    <img className="claim" src = {fileclaim}></img>
                    <div className="main-overview" onClick={fileAClaim}>File A Claim</div>
                </div>
                <div className="overview2">
                    <img className="currentexpenses" src = {currentexpenses}></img>
                    <div className="current-expenses" onClick={viewClaims}>Current Expenses</div>
                </div>
                <div className="overview3">
                    <img className="reportsimg" src = {reports}></img>
                    <div className="reports"> Reports</div>
                </div>
                <div className="overview4">
                    <img className="chimg" src = {claimhistory}></img>
                    <div className="claimhistory">Claim History</div>
                </div>
            </main>
            
            <footer className="footer">
                <div>
                    <img className="notif" src = {notif}></img>
                    <img className="setting" src = {settings}></img>
                </div>
                <a className="footer-text">FDM Expense Tracker App</a>
            </footer>
        </div>
    );
}
export default Mainpage;

