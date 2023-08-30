import getCompanyDetails from "./getCompanyDetails.js";
import axios from "axios";

const stockExchangeURL = "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?exchange=NASDAQ"
const limit = 50

export default async function searchCompany(searchString, callback) {
    const companyList = await axios.get(`${stockExchangeURL}&limit=${limit}&query=${searchString}`)
    let detailedList = await getDetailsForListOfCompanies(companyList.data)
    return callback(detailedList.sort((a, b) => (a.symbol > b.symbol) ? 1 : -1))
}

async function getDetailsForListOfCompanies(list) {
    await Promise.all(
        list.map(async (row) => {
            await getCompanyDetails(row.symbol, (response) => {
                Object.assign(row, {
                    image: response.profile.image,
                    price: response.profile.price,
                    changesPercentage: response.profile.changesPercentage
                })
            })
        }))
    return list
}