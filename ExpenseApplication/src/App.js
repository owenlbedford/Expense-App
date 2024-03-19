import Mainpage from "./mainpage";
import MainpageLM from "./mainpageLM";
import MainpageAdmin from "./mainpageAdmin";
import Login from "./login";
import {Routes, Route} from "react-router-dom";
import SubmitClaim from "./submitClaim";
import ShowReport from "./showReports";
import SubmittedClaims from "./submittedClaims";
import ClaimApproval from "./claimApproval";
import React from 'react';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Login />}></Route>
    <Route path="/mainpage" element={<Mainpage />}></Route>
    <Route path="/mainpageAdmin" element={<MainpageAdmin />}></Route>
    <Route path="/mainpageLM" element={<MainpageLM />}></Route>
    <Route path="/submitClaim" element={<SubmitClaim />}></Route>
    <Route path="/submittedClaims" element={<SubmittedClaims />}></Route>
    <Route path="/showReports" element={<ShowReport />}></Route>
    <Route path="/claimApproval" element={<ClaimApproval />}></Route>
  </Routes>
  );
}

export default App;
