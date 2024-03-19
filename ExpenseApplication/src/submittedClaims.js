// JavaScript source code
import { useNavigate } from "react-router-dom";
import logo from './assets/logo.png';
import React from 'react';

const ClaimApproval = () => {

    let navigate = useNavigate();

    const onclick = () => {
        navigate("/mainpage")
    }

    return (
        <>
            <div className="formpage">
                <a onClick={onclick}><img className="logoForm" src={logo}></img></a>
                <h1 className='form-title'>Claim List</h1>
                <form className="form" class='center' align='middle'>
                    <fieldset text-align='center'>
                        <table class='center'>
                            <tr>
                                <th>ID</th>
                                <th>Type</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th><a>Edit / Remove</a></th>
                            </tr>
                            <tr>
                                <th>1</th>
                                <th>Overnight Stay</th>
                                <th>£12.75</th>
                                <th>Approved</th>
                                <th><a>Edit / Remove</a></th>

                            </tr>
                            <tr>
                                <th>2</th>
                                <th>Event or Meeting</th>
                                <th>£34.34</th>
                                <th>Pending</th>
                                <th><a>Edit / Remove</a></th>
                            </tr>
                            <tr>
                                <th>3</th>
                                <th>Overnight Stay</th>
                                <th>£45.32</th>
                                <th>Approved</th>
                                <th><a>Edit / Remove</a></th>
                            </tr>
                            <tr>
                                <th>4</th>
                                <th>Travel</th>
                                <th>£23.45</th>
                                <th>Approved</th>
                                <th><a>Edit / Remove</a></th>
                            </tr>
                        </table>
                    </fieldset>
                    
                </form>
            </div>
        </>
    )

}

export default ClaimApproval;