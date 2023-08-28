import HumanizedPercentage from "./logic/humanizedPercentage.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

function CompanyDetails(details) {
    const queryParameters = new URLSearchParams(window.location.search)
    const [companyData, updateCompanyData] = useState({
        image: "/not-found.svg",
        companyName: "NOT FOUND",
        price: "",
        changesPercentage: ""
    })
    const [description, updateDescription] = useState("Description is absent");
    let profileObject;
    profileObject = details.profile.profile
    useEffect(() => {
        if (profileObject !== undefined) {
            if (profileObject.description !== null) {
                updateDescription(profileObject.description.replace(/(.{500})..+/, "$1..."))
            }
            updateCompanyData(profileObject)
        }
    }, [details])
    return (
        <>
            <div className="row justify-content-start">
                <div className="col-2">
                    <img src={companyData.image} className="rounded-2" width="100%"
                         onError={() => updateCompanyData(current => {
                             return {...current, image: "/not-found.svg"}
                         })}
                    />

                    {/*<img src={profileObject.image} width="100%"/>*/}
                </div>
                <div className="col-8">
                    <p className="text-white h1">{companyData.companyName}</p>
                    <p className="h2 py-3 text-white">Stock
                        price: ${companyData.price}
                        <HumanizedPercentage number={companyData.changesPercentage}/>
                    </p>
                </div>
                <div className="col-2">
                    <Link to={`/?search=${queryParameters.get("search")}`}>
                        <img src={"/back.svg"} width={"100%"}/>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col">
                </div>
            </div>
            <div className="row py-3">
                <div className="col">
                    <p className="text-white">{description}</p>
                </div>
            </div>
        </>
    )
}

export default CompanyDetails
