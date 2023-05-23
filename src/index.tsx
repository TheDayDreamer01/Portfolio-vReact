import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import LiraeDataApp from "./pages/App";
import "./styles/styles.css";


const Root : ReactDOM.Root = ReactDOM.createRoot(
    document.querySelector("#root")!
);


Root.render(
    <React.StrictMode>
        <BrowserRouter>
            <LiraeDataApp />
        </BrowserRouter>
    </React.StrictMode>
);