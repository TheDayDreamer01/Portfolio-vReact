import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Home";


const LiraeDataApp : React.FC = () => {
    return (
        <>

            <Routes>
                <Route index element={
                    <HomePage />
                } />
                
            </Routes>
        
        </>
    );
};

export default LiraeDataApp;