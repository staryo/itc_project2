const stockExchangeURL = "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/"

export default async function getCompanyDetails(companyID, callback) {
    const response = await fetch(`${stockExchangeURL}${companyID}`)
    const companyDetails = await response.json()
    return callback(companyDetails)
}