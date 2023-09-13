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

export default function CompanyNameAndPrice({symbol, name, price, changesPercentage}) {
    const queryParametersSearch = new URLSearchParams(window.location.search)
    const navigate = useNavigate()

    async function handleSubmitfunc(route) {
        await navigate(route);
    }

    return (
        <>
            {/*Company name and price*/}
            <td className={`col text-center px-3 py-2 ${
                symbol !== 'ERROR' ? "link-row" : ""
            }`} onClick={() => {
                if (symbol !== 'ERROR') {
                    return handleSubmitfunc(
                        `company/${symbol}?search=${queryParametersSearch.get("search")}`
                    )
                }
            }}>
                <div className="row">
                    <div className="col">
                        {highlightTextPart(name, queryParametersSearch.get('search'))}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                                    <span className="px-1">
                                        {price === undefined ? "" : `$${price}`}
                                        <HumanizedPercentage
                                            number={
                                                changesPercentage === undefined ? "" : changesPercentage
                                            }/>
                                    </span>
                    </div>
                </div>
            </td>
            {/*Company name and price*/}
        </>
    )
}

