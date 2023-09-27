import getCompanyDetails from "./getCompanyDetails.js";
import axios from "axios";
import chunkCompanyList from "../utils/chunkCompanyList.jsx";

const stockExchangeURL =
    "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/" +
    "api/v3/search?exchange=NASDAQ"
const limit = 100

export default async function searchCompany(searchString, callback) {
    const companyList = await axios.get(
        `${stockExchangeURL}&limit=${limit}&query=${searchString}`
    )
    let detailedList = await getDetailsForListOfCompanies(companyList.data)
    return callback(detailedList.sort((a, b) => (a.symbol > b.symbol) ? 1 : -1))
}

async function getDetailsForListOfCompanies(list) {
    let companiesDetails = {}
    const companyList = await list.map((row) => (row.symbol))
    const chunkedList = await chunkCompanyList(companyList)
    await Promise.all(await chunkedList.map(async (requestQueue) => {
        await getCompanyDetails(requestQueue, (response) => {
            /// If request was only for one company, there will be a little bit different answer
            if ('companyProfiles' in response) {
                response.companyProfiles.forEach(oneCompany => {
                    companiesDetails[oneCompany.symbol] = {
                        image: oneCompany.profile.image,
                        price: oneCompany.profile.price,
                        changesPercentage: oneCompany.profile.changesPercentage
                    }
                })
            } else {
                companiesDetails[response.symbol] = {
                    image: response.profile.image,
                    price: response.profile.price,
                    changesPercentage: response.profile.changesPercentage
                }
            }
        })
    }))
    await list.forEach((row) => {
        try {
            Object.assign(row, {
                image: companiesDetails[row.symbol].image,
                price: companiesDetails[row.symbol].price,
                changesPercentage: companiesDetails[row.symbol].changesPercentage
            })
        } catch (e) {
            console.log(e, row, companiesDetails[row.symbol])
        }

    })
    return list
}