const stockExchangeURL = "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?exchange=NASDAQ"
const limit = 50

export default async function searchCompany(searchString, callback) {
    const response = await fetch(`${stockExchangeURL}&limit=${limit}&query=${searchString}`)
    const companyList = await response.json()
    return callback(companyList.sort((a, b) => (a.symbol > b.symbol) ? 1 : -1))
}