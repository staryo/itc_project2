const stockExchangeURL = "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/historical-price-full/"

export default async function getCompanyHistory(companyID, callback) {
    const response = await fetch(`${stockExchangeURL}${companyID}?serietype=line`)
    const companyDetails = await response.json()
    return callback(companyDetails)
}