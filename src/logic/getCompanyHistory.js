const stockExchangeURL = "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/"

export default function getCompanyDetails(companyID, callback) {
    fetch(`${stockExchangeURL}${companyID}`)
        .then(
            (response) => response.json()
        )
        .then((companyDetails) => {
                // console.log(companyID)
                // console.log(companyDetails)
                return callback(companyDetails)
            }
        ).catch((err) => {
        console.log(err)
    })
}