import axios from "axios";

const stockExchangeURL = "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/"

export default async function getCompanyDetails(companyID, callback) {
    const companyDetails = await axios.get(`${stockExchangeURL}${companyID}`)
    return callback(companyDetails.data)
}