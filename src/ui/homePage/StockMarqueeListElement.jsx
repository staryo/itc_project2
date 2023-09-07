import HumanizedPercentage from "../../utils/humanizedPercentage.jsx";
import PropTypes from "prop-types";

StockMarqueeListElement.propTypes = {
    company: PropTypes.object,
}

export default function StockMarqueeListElement(props) {
    return (
        <div key={props.company.symbol} className="px-4">
            {props.company.name === undefined ? '' : props.company.name}
            {props.company.symbol === '' ? '' : `(${props.company.symbol})`}
            <span className="px-2">
                {props.company.price === undefined ? '' : `$${props.company.price}`}
            </span>
            <HumanizedPercentage
                number={
                    props.company.changesPercentage === undefined ? "" : props.company.changesPercentage
                }/>
        </div>
    )
}