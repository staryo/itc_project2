import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";

CompareContainer.propTypes = {
    symbols: PropTypes.object,
    remove: PropTypes.func,
}

export default function CompareContainer({symbols, remove}) {
    const queryParametersSearch = new URLSearchParams(window.location.search)
    const navigate = useNavigate()
    const [symbolsList, setList] = React.useState([...symbols]);

    useEffect(() => {
        setList([...symbols])
    }, [symbols]);

    async function handleSubmitfunc(route) {
        await navigate(route);
    }

    return (
        <>
            <div className="col-12">
                <button className={`btn btn-outline-light px-5 mx-3 ${
                    symbolsList.length < 2 ? "disabled" : ""
                }`} onClick={() => {
                    if (symbolsList.length > 1) {
                        return handleSubmitfunc(
                            `compare/?search=${queryParametersSearch.get("search")}&symbols=${symbolsList.toString()}`
                        )
                    }
                }}>
                    Compare
                </button>
                {symbolsList.map((symbol) => (
                    <button className="btn btn-outline-danger px-5 mx-3" key={symbol} onClick={() => {
                        remove(symbol)
                    }}>
                        {symbol}
                    </button>
                ))}
            </div>
        </>
    )
}
