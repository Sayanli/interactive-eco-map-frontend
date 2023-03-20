import React from 'react';
import * as ReactDOMClient from "react-dom/client"
import { ProSidebarProvider } from "react-pro-sidebar";
import App from "./App"


const app = ReactDOMClient.createRoot(document.getElementById("app"))

app.render(
    <ProSidebarProvider>
        <App />
    </ProSidebarProvider>)