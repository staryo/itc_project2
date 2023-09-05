import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function CompareContainer(props) {
    const queryParametersSearch = new URLSearchParams(window.location.search)
    const navigate = useNavigate()
    const [symbolsList, setList] = React.useState([...props.symbols]);

    useEffect(() => {
        setList([...props.symbols])
    }, [props]);

    async function handleSubmitfunc(route) {
        await navigate(route);
    }

    return (
        <>
            <div className="col-12">
                <button className={`btn btn-outline-light px-5 mx-3 ${
                    symbolsList.length === 0 ? "disabled" : ""
                }`} onClick={() => {
                    if (symbolsList.length > 0) {
                        return handleSubmitfunc(
                            `compare/?search=${queryParametersSearch.get("search")}&symbols=${symbolsList.toString()}`
                        )
                    }
                }}>
                    Compare
                </button>
                {symbolsList.map((symbol) => (
                    <button className="btn btn-outline-danger px-5 mx-3" key={symbol} onClick={() => {
                        props.remove(symbol)
                    }}>
                        {symbol}
                    </button>
                ))}
            </div>
        </>
    )
}
