import Marquee from "react-fast-marquee";
import React, {useEffect} from "react";
import getDetailsForListOfCompanies from "../../api/getCompaniesForMarquee.js";
import HumanizedPercentage from "../../utils/humanizedPercentage.jsx";


function StockMarquee() {
    const [topCompanies, updateTopCompanies] = React.useState([{
        symbol: '',
    }]);
    useEffect(() => {
        getDetailsForListOfCompanies(updateTopCompanies)
    }, [])

    return (
        <>
            <div className="row">
                <div className="col">
                    <Marquee className="text-white">
                        {
                            topCompanies.map(company => (
                                <div key={company.symbol} className="px-4">
                                    <span>
                                        {company.name === undefined ? '': company.name}
                                    </span>
                                    <span>
                                        {company.symbol === '' ? '': `(${company.symbol})`}
                                    </span>
                                    <span className="px-2">
                                        {company.price === undefined ? '': `$${company.price}`}
                                    </span>
                                    <HumanizedPercentage
                                        number={
                                            company.changesPercentage === undefined ? "" : company.changesPercentage
                                        }/>
                                </div>
                            ))
                        }
                    </Marquee>
                </div>
            </div>
        </>
    )
}

export default StockMarquee
