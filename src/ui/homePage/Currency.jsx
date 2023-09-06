import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

Currency.propTypes = {
    symbol: PropTypes.string,
    currency: PropTypes.string
}

export default function Currency(props) {
    const queryParametersSearch = new URLSearchParams(window.location.search)
    const navigate = useNavigate()

    async function handleSubmitfunc(route) {
        await navigate(route);
    }

    return (
        <>
            {/*Currency*/}
            <td className={`col-2 text-center px-3 py-2 d-none d-lg-table-cell ${
                props.symbol !== 'ERROR' ? "link-row" : ""
            }`} onClick={() => {
                if (props.symbol !== 'ERROR') {
                    return handleSubmitfunc(
                        `company/${props.symbol}?search=${queryParametersSearch.get("search")}`
                    )
                }
            }}>
                {props.currency}
            </td>
            {/*Currency*/}
        </>
    )
}

