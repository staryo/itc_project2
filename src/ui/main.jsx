import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import App from './homePage/App.jsx'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Company from "./homePage/Company.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "search/:query",
        element: <App/>,
    },
    {
        path: "company/:companyID",
        element: <Company/>,
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
