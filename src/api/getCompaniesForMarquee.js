import getCompanyDetails from "./getCompanyDetails.js";
import chunkCompanyList from "../utils/chunkCompanyList.jsx";

const codesList = ['AAPL', 'TSLA', 'AOSL', 'MSFT', 'GOOGL', 'ABNB', 'NVDA', 'AMZN', 'ATVI']

export default async function getDetailsForListOfCompanies(callback) {
    let result = []
    const chunkedList = await chunkCompanyList(codesList)
    await Promise.all(
        chunkedList.map(async (symbols) => {
            await getCompanyDetails(symbols, (response) => {
                response.companyProfiles.map(oneCompany => {
                    result.push({
                        symbol: oneCompany.symbol,
                        name: oneCompany.profile.companyName,
                        image: oneCompany.profile.image,
                        price: oneCompany.profile.price,
                        changesPercentage: oneCompany.profile.changesPercentage
                    })
                })
            })
        })
    )
    return callback(result)
}