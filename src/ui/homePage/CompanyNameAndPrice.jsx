import PropTypes from "prop-types";
import highlightTextPart from "../../utils/highlightTextPart.jsx";
import {useNavigate} from "react-router-dom";
import HumanizedPercentage from "../../utils/humanizedPercentage.jsx";

CompanyNameAndPrice.propTypes = {
    symbol: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    changesPercentage: PropTypes.string
}

export default function CompanyNameAndPrice(props) {
    const queryParametersSearch = new URLSearchParams(window.location.search)
    const navigate = useNavigate()

    async function handleSubmitfunc(route) {
        await navigate(route);
    }

    return (
        <>
            {/*Company name and price*/}
            <td className={`col text-center px-3 py-2 ${
                props.symbol !== 'ERROR' ? "link-row" : ""
            }`} onClick={() => {
                if (props.symbol !== 'ERROR') {
                    return handleSubmitfunc(
                        `company/${props.symbol}?search=${queryParametersSearch.get("search")}`
                    )
                }
            }}>
                <div className="row">
                    <div className="col">
                        {highlightTextPart(props.name, queryParametersSearch.get('search'))}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                                    <span className="px-1">
                                        {props.price === undefined ? "" : `$${props.price}`}
                                        <HumanizedPercentage
                                            number={
                                                props.changesPercentage === undefined ? "" : props.changesPercentage
                                            }/>
                                    </span>
                    </div>
                </div>
            </td>
            {/*Company name and price*/}
        </>
    )
}

