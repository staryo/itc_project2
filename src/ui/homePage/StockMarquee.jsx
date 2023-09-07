import Marquee from "react-fast-marquee";
import React, {useEffect} from "react";
import getDetailsForListOfCompanies from "../../api/getCompaniesForMarquee.js";
import StockMarqueeListElement from "./StockMarqueeListElement.jsx";


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
                        {topCompanies.map((company =>
                                <StockMarqueeListElement key={company.symbol} company={company}/>
                        ))}
                    </Marquee>
                </div>
            </div>
        </>
    )
}

export default StockMarquee
