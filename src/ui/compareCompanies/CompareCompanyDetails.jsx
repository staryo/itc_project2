import HumanizedPercentage from "../../utils/humanizedPercentage.jsx";
import {useEffect, useState} from "react";

const notFound = {
    image: "/not-found.svg",
    companyName: "NOT FOUND",
    price: "",
    changesPercentage: ""
}

export default function CompareCompanyDetails(details) {
    const [companyData, updateCompanyData] = useState({})
    useEffect(() => {
        const profileObject = details.profile.profile
        if (profileObject !== undefined) {
            updateCompanyData({...profileObject, ...{symbol: details.profile.symbol}})
        } else {
            updateCompanyData(notFound)
        }
    }, [details])
    return (
        <>
            <div className="row justify-content-start h-100">
                <div className="col-3">
                    <img src={companyData.image} className="rounded-2" width="100%"
                         onError={() => updateCompanyData(current => {
                             return {...current, image: "/not-found.svg"}
                         })}
                     alt={companyData.symbol}/>
                </div>
                <div className="col-9 h-100">
                    <div className="row flex-column">
                        <div className="col h2 text-white">
                            {companyData.symbol}
                        </div>
                        <div className="col h5 py-2 text-white">
                            Stock price: ${companyData.price}
                            <HumanizedPercentage number={companyData.changesPercentage}/>
                        </div>
                        <div className="col text-white h-100">{companyData.companyName}</div>
                    </div>
                </div>
            </div>
        </>
    )
}