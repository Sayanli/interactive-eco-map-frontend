import React from 'react';
import * as ReactDOMClient from "react-dom/client"
import { ProSidebarProvider } from "react-pro-sidebar";
import {BrowserRouter as Router} from 'react-router-dom'
import App from "./App"


const app = ReactDOMClient.createRoot(document.getElementById("app"))

app.render(
    <Router
        ><ProSidebarProvider>
            <App />
        </ProSidebarProvider>
    </Router>
    )