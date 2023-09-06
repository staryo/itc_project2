import {useNavigate} from "react-router-dom";
import HumanizedPercentage from "../../utils/humanizedPercentage.jsx";
import React, {useEffect} from "react";
import highlightTextPart from "../../utils/highlightTextPart.jsx";
import CompareButton from "./CompareButton.jsx";
import PropTypes from "prop-types";
import SymbolAndLogo from "./SymbolAndLogo.jsx";

const errorMessage = [{
    symbol: 'ERROR',
    name: 'NOT FOUND',
    image: '/not-found.svg'
}]

CompanyListRows.propTypes = {
    companyList: PropTypes.array,
    setCompareList: PropTypes.func,
    compareList: PropTypes.array
}

function CompanyListRows(props) {
    const queryParametersSearch = new URLSearchParams(window.location.search)
    const navigate = useNavigate()
    const [optionsList, setList] = React.useState(errorMessage);
    useEffect(() => {
        if (props.companyList.length > 0) {
            setList(props.companyList)
        } else {
            setList(errorMessage)
        }
    }, [props.companyList])

    async function handleSubmitfunc(route) {
        await navigate(route);
    }

    // TODO: Divide render to several functions
    return (
        <>
            {
                optionsList.map(option => (
                    <tr key={option.symbol} className="bg-transparent p-5 border-bottom">

                        <SymbolAndLogo symbol={option.symbol} image={option.image} />

                        {/*Company name and price*/}
                        <td className={`col text-center px-3 py-2 ${
                            option.symbol !== 'ERROR' ? "link-row" : ""
                        }`} onClick={() => {
                            if (option.symbol !== 'ERROR') {
                                return handleSubmitfunc(
                                    `company/${option.symbol}?search=${queryParametersSearch.get("search")}`
                                )
                            }
                        }}>
                            <div className="row">
                                <div className="col">
                                    {highlightTextPart(option.name, queryParametersSearch.get('search'))}
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
                        {/*Company name and price*/}

                        {/*Currency*/}
                        <td className={`col-2 text-center px-3 py-2 d-none d-lg-table-cell ${
                            option.symbol !== 'ERROR' ? "link-row" : ""
                        }`} onClick={() => {
                            if (option.symbol !== 'ERROR') {
                                return handleSubmitfunc(
                                    `company/${option.symbol}?search=${queryParametersSearch.get("search")}`
                                )
                            }
                        }}>
                            {option.currency}
                        </td>
                        {/*Currency*/}

                        <CompareButton
                            setCompareList={props.setCompareList}
                            symbol={option.symbol}
                            currentNumber={props.compareList.length}
                        />

                    </tr>
                ))
            }
        </>
    )
}

export default CompanyListRows
