import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import App from './homePage/App.jsx'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Company from "./companyDetails/Company.jsx";
import Compare from "./compareCompanies/Compare.jsx";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

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
    },
    {
        path: "compare/",
        element: <Compare/>,
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
