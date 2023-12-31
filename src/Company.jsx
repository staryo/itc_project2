import './App.css'
import {useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import CompanyDetails from "./CompanyDetails.jsx";
import React, {useEffect} from "react";
import getCompanyDetails from "./logic/getCompanyDetails.js";
import getCompanyHistory from "./logic/getCompanyHistory.js";
import {PriceChart} from "./priceChart.jsx";

function Company() {
    const {companyID} = useParams();
    const [profile, updateProfile] = React.useState({});
    const [history, updateHistory] = React.useState({});
    useEffect(() => {
        getCompanyDetails(companyID, updateProfile)
        getCompanyHistory(companyID, updateHistory)
    }, [companyID])
    return (
        <>
            <div className="row w-100">
                <div className="col-12">
                    <div className="p-3 rounded-2 box border">
                        <div className="row">
                            <div className="col">
                                <CompanyDetails profile={profile}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <PriceChart history={history}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Company
