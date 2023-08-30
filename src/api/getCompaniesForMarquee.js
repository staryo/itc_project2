import getCompanyDetails from "./getCompanyDetails.js";

const codesList = ['AAPL', 'TSLA', 'AOSL', 'MSFT', 'GOOGL']

export default async function getDetailsForListOfCompanies(callback) {
    let result = []
    await Promise.all(
        codesList.map(async (symbol) => {
            await getCompanyDetails(symbol, (response) => {
                result.push({
                    symbol: symbol,
                    name: response.profile.companyName,
                    image: response.profile.image,
                    price: response.profile.price,
                    changesPercentage: response.profile.changesPercentage
                })
            })
        }))
    return callback(result)
}