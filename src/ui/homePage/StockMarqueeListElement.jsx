import HumanizedPercentage from "../../utils/humanizedPercentage.jsx";
import PropTypes from "prop-types";

StockMarqueeListElement.propTypes = {
    name: PropTypes.string,
    symbol: PropTypes.string,
    price: PropTypes.number,
    changesPercentage: PropTypes.string,
}

export default function StockMarqueeListElement({name, symbol, price, changesPercentage}) {
    return (
        <div key={symbol} className="px-4">
            {name === undefined ? '' : name}
            {symbol === '' ? '' : `(${symbol})`}
            <span className="px-2">
                {price === undefined ? '' : `$${price}`}
            </span>
            <HumanizedPercentage
                number={
                    changesPercentage === undefined ? "" : changesPercentage
                }/>
        </div>
    )
}