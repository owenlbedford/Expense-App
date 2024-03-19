// JavaScript source code
import { useNavigate } from "react-router-dom";
import logo from './assets/logo.png';
import React, {useState} from'react';


const ClaimApproval = () => {

    let navigate = useNavigate();

    const onclick = () => {
        navigate("/mainpageLM")
    }
    const [claim1,setclaim1]=useState("Pending");
    const [claim2,setclaim2]=useState("Pending");
    const [claim3,setclaim3]=useState("Pending");
    const [claim4,setclaim4]=useState("Pending");

    function AppDen(method,message){
        var temp= window.confirm("Are you sure you want to Approve/Deny This claim?")
        if(temp){
            method(message);
        }
        else{
            return
        }
        
    }
   
    
    

    return (
        <>
            <div className="formpage">
                <a onClick={onclick}><img className="logoForm" src={logo}></img></a>
                <h1 className='form-title'>Manager Approval</h1>
                <form className="form"  align='middle'>
                    <fieldset text-align='center'>
                        <table className='center'>
                            <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>File</th>
                                <th>Approve/Deny</th>
                            </tr>
                            <tr>
                                <th>Amy Darwin</th>
                                <th>£12.75</th>
                                <th>{claim1}</th>
                                <th>Claim.pdf</th>
                                <th>{ claim1!=="Pending" ? <span>Setteled</span> : <><button onClick={() => AppDen(setclaim1, "Approved")} type="button" className="submitbutton"> Approve </button><button onClick={() => AppDen(setclaim1, "Denied")} type="button" className="submitbutton">Deny</button></>}</th>
                            </tr>
                            <tr>
                                <th>James Peters</th>
                                <th>£34.34</th>
                                <th>{claim2}</th>
                                <th>expense_claim.pdf</th>
                                <th>{ claim2!=="Pending" ? <span>Setteled</span> : <><button onClick={() => AppDen(setclaim2, "Approved")} type="button" className="submitbutton"> Approve </button><button onClick={() => AppDen(setclaim2, "Denied")} type="button" className="submitbutton">Deny</button></>}</th>
                            </tr>
                            <tr>
                                <th>Arch Mathis</th>
                                <th>£45.32</th>
                                <th>{claim3}</th>
                                <th>claim12.pdf</th>
                                <th>{ claim3!=="Pending" ? <span>Setteled</span> : <><button onClick={() => AppDen(setclaim3, "Approved")} type="button" className="submitbutton"> Approve </button><button onClick={() => AppDen(setclaim3, "Denied")} type="button" className="submitbutton">Deny</button></>}</th>
                            </tr>
                            <tr>
                                <th>Prince Eze</th>
                                <th>£23.45</th>
                                <th>{claim4}</th>
                                <th>claim.pdf</th>
                                <th>{ claim4!=="Pending" ? <span>Setteled</span> : <><button onClick={() => AppDen(setclaim4, "Approved")} type="button" className="submitbutton"> Approve </button><button onClick={() => AppDen(setclaim4, "Denied")} type="button" className="submitbutton">Deny</button></>}</th>
                            </tr>
                            </tbody>
                        </table>
                    </fieldset>
                    
                </form>
            </div>
        </>
    )

}

export default ClaimApproval;