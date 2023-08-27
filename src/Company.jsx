import './App.css'
import {useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import CompanyDetails from "./CompanyDetails.jsx";
import React, {useEffect} from "react";
import getCompanyDetails from "./logic/getCompanyDetails.js";

function Company() {
    const {companyID} = useParams();
    const [profile, updateProfile] = React.useState({});
    useEffect(() => {
        getCompanyDetails(companyID, updateProfile)
    }, [])
    return (
        <>
            <div className="row w-100 mb-sm-5 mb-2">
                <CompanyDetails profile={profile}/>
            </div>
        </>
    )

}

export default Company
