import HumanizedPercentage from "./logic/humanizedPercentage.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

function CompanyDetails(details) {
    const [imgSrc, setImgSrc] = useState("/not-found.svg");
    const [description, updateDescription] = useState("Description is absent");
    const [companyName, updateCompanyName] = useState("NOT FOUND");
    const [price, updatePrice] = useState("");
    const [changesPercentage, updatechangesPercentage] = useState("");
    let profileObject;
    profileObject = details.profile.profile
    useEffect(() => {
        if (profileObject !== undefined) {
            setImgSrc(profileObject.image)
            if (profileObject.description !== null) {
                updateDescription(profileObject.description.replace(/(.{500})..+/, "$1..."))
            }
            updateCompanyName(profileObject.companyName)
            updatePrice(profileObject.price)
            updatechangesPercentage(profileObject.changesPercentage)
        }
    }, [details])
    return (
        <>
            <div className="row justify-content-start">
                <div className="col-2">
                    <img src={imgSrc} className="rounded-2" width="100%" onError={() => setImgSrc("/not-found.svg")}/>

                    {/*<img src={profileObject.image} width="100%"/>*/}
                </div>
                <div className="col-8">
                    <p className="text-white h1">{companyName}</p>
                    <p className="h2 py-3 text-white">Stock
                        price: ${price}
                        <HumanizedPercentage number={changesPercentage}/>
                    </p>
                </div>
                <div className="col-2">
                    <Link to={"/"}>
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
