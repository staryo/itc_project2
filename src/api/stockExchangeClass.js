import axios from "axios";
import chunkCompanyList from "../utils/chunkCompanyList.jsx";

export default class StockExchangeClass {
    stockExchangeURL = "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3";
    searchCompanyURI = "/search?exchange=NASDAQ"
    companyDetailsURL = "/company/profile/"
    historyURI = "/historical-price-full/"
    limit = 100;
    marqueeCodesList = ["AAPL", "TSLA", "AOSL", "MSFT", "GOOGL", "ABNB", "NVDA", "AMZN", "ATVI"];

    async getCompanyDetails(companyID, callback) {
        const companyDetails = await axios.get(
            `${this.stockExchangeURL}${this.companyDetailsURL}${companyID}`
        );
        return callback(companyDetails.data);
    }

    async getCompanyHistory(companyID, callback) {
        const companyDetails = await axios.get(
            `${this.stockExchangeURL}${this.historyURI}${companyID}?serietype=line`
        );
        return callback(companyDetails.data);
    }

    async searchCompany(searchString, callback) {
        const companyList = await axios.get(
            `${this.stockExchangeURL}${this.searchCompanyURI}&limit=${this.limit}&query=${searchString}`
        );
        let detailedList = await this.getDetailsForListOfCompanies(companyList.data);
        return callback(detailedList.sort((a, b) => (a.symbol > b.symbol) ? 1 : -1));
    }

    async getDetailsForListOfCompanies(list) {
        let companiesDetails = {};
        const companyList = await list.map((row) => (row.symbol));
        const chunkedList = await chunkCompanyList(companyList);
        await Promise.all(await chunkedList.map(async (requestQueue) => {
            await this.getCompanyDetails(requestQueue, (response) => {
                /// If request was only for one company, there will be a little bit different answer
                console.log(response)
                if ("companyProfiles" in response) {
                    response.companyProfiles.forEach(oneCompany => {
                        companiesDetails[oneCompany.symbol] = {
                            image: oneCompany.profile.image,
                            name: oneCompany.profile.companyName,
                            price: oneCompany.profile.price,
                            changesPercentage: oneCompany.profile.changesPercentage
                        };
                    });
                } else {
                    companiesDetails[response.symbol] = {
                        image: response.profile.image,
                        name: response.profile.companyName,
                        price: response.profile.price,
                        changesPercentage: response.profile.changesPercentage
                    };
                }
            });
        }));
        await list.forEach((row) => {
            try {
                Object.assign(row, {
                    image: companiesDetails[row.symbol].image,
                    name: companiesDetails[row.symbol].name,
                    price: companiesDetails[row.symbol].price,
                    changesPercentage: companiesDetails[row.symbol].changesPercentage
                });
            } catch (e) {
                console.log(e, row, companiesDetails[row.symbol]);
            }

        });
        return list;
    }

    async getCompaniesForMarquee(callback) {
        const result = await this.getDetailsForListOfCompanies(
            this.marqueeCodesList.map(
                (eachSymbol) => {
                    return {symbol: eachSymbol};
                }
            )
        );
        return callback(result);
    }
}