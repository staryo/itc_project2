import {useNavigate} from "react-router-dom";
import HumanizedPercentage from "../../utils/humanizedPercentage.jsx";
import React, {useEffect} from "react";

const errorMessage = [{
    symbol: 'ERROR',
    name: 'NOT FOUND',
    image: '/not-found.svg'
}]

function CompanyListRows(companyList) {
    const queryParameters = new URLSearchParams(window.location.search)
    const navigate = useNavigate()
    const [optionsList, setList] = React.useState(errorMessage);
    useEffect(() => {
        if (companyList.children.length > 0) {
            setList(companyList.children)
        } else {
            setList(errorMessage)
        }
    }, [companyList])

    async function handleSubmitfunc(route) {
        await navigate(route);
    }

    return (
        <>
            {
                optionsList.map(option => (
                    <tr key={option.symbol} className={
                        `bg-transparent p-5 border-bottom ${
                            option.symbol !== 'ERROR' ? "link-row" : ""
                        }`
                    } onClick={() => {
                        if (option.symbol !== 'ERROR') {
                            handleSubmitfunc(
                                `company/${option.symbol}?search=${queryParameters.get("search")}`
                            )
                        }
                    }}>
                        <th scope="row" className="col-1 text-center px-3 py-2">
                            <div className="row flex-column justify-content-center align-content-center">
                                <div className="col">
                                    <img alt={option.symbol} src={option.image} width="100%" onError={
                                        (e) => (
                                            e.target.src = "/not-found.svg"
                                        )}/>
                                </div>
                                <div className="col">
                                    {option.symbol}
                                </div>
                            </div>
                        </th>
                        <td className="col-5 text-center px-3 py-2">
                            <div className="row">
                                <div className="col">
                                    {option.name}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <span className="px-1">
                                        {option.price === undefined ? "" : `$${option.price}`}
                                        <HumanizedPercentage
                                            number={
                                            option.changesPercentage === undefined ? "" : option.changesPercentage
                                        }/>
                                    </span>
                                </div>
                            </div>
                        </td>
                        <td className="col-2 text-center px-3 py-2 d-none d-lg-table-cell">
                            {option.currency}
                        </td>
                        <td className="col-4 text-center d-none d-lg-table-cell px-3 py-2">
                            {option.stockExchange}
                        </td>
                    </tr>
                ))
            }
        </>
    )
}

export default CompanyListRows
