import axios from "axios";

const stockExchangeURL = "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/historical-price-full/"

export default async function getCompanyHistory(companyID, callback) {
    const companyDetails = await axios.get(`${stockExchangeURL}${companyID}?serietype=line`)
    return callback(companyDetails.data)
}