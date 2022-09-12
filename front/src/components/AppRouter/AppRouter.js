import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../Page/Homepage/Homepage";
import StepPage from "../../Page/StepPage/Steppage";

const AppRouter =()=>{
    return(
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Step" element={<StepPage/>}/>
            </Routes>
        </Router>
        </>

    )
}
export default AppRouter;