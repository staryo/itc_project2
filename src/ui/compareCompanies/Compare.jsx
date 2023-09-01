import '../styles.css'
import {useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import React, {useEffect} from "react";
import getCompanyDetails from "../../api/getCompanyDetails.js";
import getCompanyHistory from "../../api/getCompanyHistory.js";
import CompanyDetails from "../companyDetails/CompanyDetails.jsx";
import {PriceChart} from "../companyDetails/PriceChart.jsx";

function Compare() {
    const {firstCompanyID, secondCompanyID} = useParams();
    const [firstProfile, updateFirstProfile] = React.useState({});
    const [firstHistory, updateFirstHistory] = React.useState({});
    const [secondProfile, updateSecondProfile] = React.useState({});
    const [secondHistory, updateSecondHistory] = React.useState({});
    useEffect(() => {
        getCompanyDetails(firstCompanyID, updateFirstProfile)
        getCompanyHistory(firstCompanyID, updateFirstHistory)
    }, [firstCompanyID])
    useEffect(() => {
        getCompanyDetails(secondCompanyID, updateSecondProfile)
        getCompanyHistory(secondCompanyID, updateSecondHistory)
    }, [secondCompanyID])
    return (
        <>
            <div className="row w-100">
                <div className="col-xl-6">
                    <div className="p-3 rounded-2 box border">
                        <div className="row">
                            <div className="col">
                                <CompanyDetails profile={firstProfile}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <PriceChart history={firstHistory}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="p-3 rounded-2 box border">
                        <div className="row">
                            <div className="col">
                                <CompanyDetails profile={secondProfile}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <PriceChart history={secondHistory}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Compare
