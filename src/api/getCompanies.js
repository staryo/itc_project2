import getCompanyDetails from "./getCompanyDetails.js";
import axios from "axios";

const stockExchangeURL = "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?exchange=NASDAQ"
const limit = 50
const queueLimit = 300

export default async function searchCompany(searchString, callback) {
    const companyList = await axios.get(`${stockExchangeURL}&limit=${limit}&query=${searchString}`)
    let detailedList = await getDetailsForListOfCompanies(companyList.data)
    return callback(detailedList.sort((a, b) => (a.symbol > b.symbol) ? 1 : -1))
}

async function getDetailsForListOfCompanies(list) {
    let newData = {}
    let queue = ''
    await Promise.all(
        await list.map(async (row, count) => {
            if (queue.length > queueLimit || count === list.length - 1) {
                queue += `${row.symbol}`
                await getCompanyDetails(queue, (response) => {
                    response.companyProfiles.map(oneCompany => {
                        newData[oneCompany.symbol] = {
                            image: oneCompany.profile.image,
                            price: oneCompany.profile.price,
                            changesPercentage: oneCompany.profile.changesPercentage
                        }

                    })
                })
                queue = ''
            }
            queue += `${row.symbol},`
        }))
    await list.map(async (row) => {
        Object.assign(row, {
            image: newData[row.symbol].image,
            price: newData[row.symbol].price,
            changesPercentage: newData[row.symbol].changesPercentage
        })
    })
    return list
}