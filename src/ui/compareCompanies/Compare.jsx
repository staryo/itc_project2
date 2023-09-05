import '../styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import React, {useEffect} from "react";
import getCompanyDetails from "../../api/getCompanyDetails.js";
import getCompanyHistory from "../../api/getCompanyHistory.js";
import CompanyDetails from "../companyDetails/CompanyDetails.jsx";
import {ComparePriceChart} from "./ComparePriceChart.jsx";


function Compare() {
    const queryParameters = new URLSearchParams(window.location.search)
    const companiesList = queryParameters.get("symbols").split(',')
    const [profilesList, updateProfile] = React.useState({});
    const [historiesList, updateHistory] = React.useState([]);

    function addProfile(profile) {
        profile.profile.description = ''
        updateProfile((current) => {
            return {...current, [profile.symbol]: profile}
        })
    }

    function addHistory(history) {
        updateHistory((current) => {
            return {...current, [history.symbol]: history}
        })
    }

    useEffect(() => {
        companiesList.map((symbol) => {
            getCompanyDetails(symbol, addProfile)
            getCompanyHistory(symbol, addHistory)
        })
    }, [])
    return (
        <>
            <div className="row w-100 flex-nowrap">
                <div className="col">
                    <div className="p-3 rounded-2 box border">
                        <div className="row flex-xl-nowrap">
                            {companiesList.map((symbol) => {
                                if (symbol !== "") {
                                    return (
                                        <div key={symbol} className="col">
                                            <CompanyDetails
                                                profile={symbol in profilesList ? profilesList[symbol] : {}}/>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                        <div className="row flex-nowrap">
                            <div className="col">
                                <ComparePriceChart history={historiesList}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Compare
