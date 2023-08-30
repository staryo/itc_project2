import getCompanyDetails from "./getCompanyDetails.js";

const codesList = ['AAPL', 'TSLA', 'AOSL', 'MSFT', 'GOOGL', 'ABNB', 'NVDA', 'AMZN']
const queueLimit = 300

export default async function getDetailsForListOfCompanies(callback) {
    let result = []
    let queue = ''
    await Promise.all(
        codesList.map(async (symbol, count) => {
            if (queue.length > queueLimit || count === codesList.length - 1) {
                queue += `${symbol}`
                await getCompanyDetails(queue, (response) => {
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
                queue = ''
            } else queue += `${symbol},`
        })
    )
    return callback(result)
}