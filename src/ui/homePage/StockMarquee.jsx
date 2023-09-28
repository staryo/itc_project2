import Marquee from "react-fast-marquee";
import React, {useEffect} from "react";
import StockMarqueeListElement from "./StockMarqueeListElement.jsx";
import StockExchangeClass from "../../api/stockExchangeClass.js";


function StockMarquee() {
    const [topCompanies, updateTopCompanies] = React.useState([{
        symbol: "",
    }]);
    const fetcher = new StockExchangeClass();
    useEffect(() => {
        fetcher.getCompaniesForMarquee(updateTopCompanies);
    }, []);

    return (
        <>
            <div className="row">
                <div className="col">
                    <Marquee className="text-white">
                        {topCompanies.map((company =>
                                <StockMarqueeListElement
                                    key={company.symbol}
                                    name={company.name}
                                    symbol={company.symbol}
                                    price={company.price}
                                    changesPercentage={company.changesPercentage}
                                />
                        ))}
                    </Marquee>
                </div>
            </div>
        </>
    );
}

export default StockMarquee;
