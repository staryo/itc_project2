import '../styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import React, {useEffect} from "react";
import getCompanyDetails from "../../api/getCompanyDetails.js";
import getCompanyHistory from "../../api/getCompanyHistory.js";
import {ComparePriceChart} from "./ComparePriceChart.jsx";
import CompareCompanyDetails from "./CompareCompanyDetails.jsx";
import {Link} from "react-router-dom";


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
                        <div className="row flex-md-row flex-column flex-md-nowrap">
                            {companiesList.map((symbol) => {
                                if (symbol !== "") {
                                    return (
                                        <div key={symbol} className="col py-2">
                                            <CompareCompanyDetails
                                                profile={symbol in profilesList ? profilesList[symbol] : {}}/>
                                        </div>
                                    )
                                }
                            })}
                            <div className="col-1 d-md-flex d-none">
                                <Link
                                    to={queryParameters.get("search") === null ? '/' : `/?search=${queryParameters.get("search")}&symbols=${queryParameters.get("symbols")}`}>
                                    <img src={"/back.svg"} width={"100%"}/>
                                </Link>
                            </div>
                        </div>
                        <div className="row">
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
