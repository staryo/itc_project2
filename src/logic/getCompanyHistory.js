const stockExchangeURL = "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/historical-price-full/"

export default function getCompanyHistory(companyID, callback) {
    fetch(`${stockExchangeURL}${companyID}?serietype=line`)
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