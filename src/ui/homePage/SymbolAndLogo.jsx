import PropTypes from "prop-types";
import highlightTextPart from "../../utils/highlightTextPart.jsx";
import {useNavigate} from "react-router-dom";

SymbolAndLogo.propTypes = {
    symbol: PropTypes.string,
    image: PropTypes.string
}

export default function SymbolAndLogo(props) {
    const queryParametersSearch = new URLSearchParams(window.location.search)
    const navigate = useNavigate()

    async function handleSubmitfunc(route) {
        await navigate(route);
    }

    return (
        <>
            {/*Symbols and logo*/}
            <th scope="row" className={`col-1 text-center px-3 py-2 ${
                props.symbol !== 'ERROR' ? "link-row" : ""
            }`} onClick={() => {
                if (props.symbol !== 'ERROR') {
                    return handleSubmitfunc(
                        `company/${props.symbol}?search=${queryParametersSearch.get("search")}`
                    )
                }
            }}>
                <div className="row flex-column justify-content-center align-content-center">
                    <div className="col">
                        <img alt={props.symbol} src={props.image} width="100%" onError={
                            (e) => (
                                e.target.src = "/not-found.svg"
                            )}/>
                    </div>
                    <div className="col">
                        {highlightTextPart(props.symbol, queryParametersSearch.get('search'))}
                    </div>
                </div>
            </th>
            {/*Symbols and logo*/}
        </>
    )
}

