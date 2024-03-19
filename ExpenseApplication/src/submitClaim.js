import logo from './assets/logo.png';
import {useNavigate} from "react-router-dom";
import React from 'react';
import emailjs from 'emailjs-com';



const SubmitClaim = () =>{
    let navigate = useNavigate();

    const onclick = (e) => {
        
        e.preventDefault();


        emailjs.sendForm('service_ss8r6yk', 'template_k93jl0i', e.target, 'S4SOf7LE2nNOMsFRc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
  
        navigate("/mainpage")
    }


    return(
        <>
        <div className="formpage">
            <a onClick={onclick}><img className="logoForm" src = {logo}></img></a>
            <h1 className='form-title'>New Expense</h1>
            <form className="form" onSubmit={onclick}>
                <fieldset>
                    <label>Upload Image of Receipt: </label><br></br>
                    <br></br>
                    <input type="file" className='image' accept="image/*"></input>
                </fieldset>
                <fieldset>
                    <label>Claim Type</label><br></br>
                        <select className="entry" name="currency" required>
                            <option disabled selected>Select Currency</option>
                            <option name="GBP">£ GBP</option>
                            <option name="USD">$ USD</option>
                            <option name="EUR">€ EUR</option>
                            <option name="YEN">¥ YEN</option>
                            <option name="other">...</option>
                        </select>
                    <label>Purchase Amount</label><br></br>
                    <input className="entry" type="text" name="purchaseAmount" placeholder="Amount" required></input>
                    <br></br>
                    <label>Description</label><br></br>
                    <input className="entry" type="text" name="description" placeholder="Enter text..." required></input>
                    <br></br>
                    <label>Claim Type</label><br></br>
                    <select className="entry" name="claimType" required>
                        <option disabled selected>Select Claim Type</option>
                        <option name="overnightStay">Overnight Stay</option>
                        <option name="itemsForEventOrMeeting">Event or Meeting</option>
                        <option name="travel">Travel</option>
                        <option name="food">Food</option>
                        <option name="equipment">Equipment</option>
                        <option name="miscellaneous">Miscellaneous</option>
                    </select> 
                    <br></br>
                    <label>Date</label><br></br>
                    <input className="entry" type="date" name="date" required></input>
                </fieldset>
                <div className='center'>
                    <button type="submit" className="submitbutton">Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}
export default SubmitClaim;
