import HumanizedPercentage from "./logic/humanizedPercentage.jsx";

function CompanyDetails(details) {
    console.log(details.profile)
    let profileObject;
    profileObject = details.profile.profile
    if (profileObject === undefined) {
        return (
            <>
            </>
        )
    }
    console.log(profileObject)
    return (
        <>
            <div className="col-12">
                <div className="p-3 rounded-2 box border">
                    <div className="row justify-content-start">
                        <div className="col-1">
                            <img src={profileObject.image} height="80px"/>
                        </div>
                        <div className="col-11">
                            <p className="text-white h1">{profileObject.companyName}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="h2 py-3 text-white">Stock
                                price: {profileObject.price}
                                <HumanizedPercentage number={profileObject.changesPercentage}/>
                            </p>
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col">
                            <p className="text-white">{profileObject.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyDetails
