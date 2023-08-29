import {useNavigate} from "react-router-dom";
import HumanizedPercentage from "./logic/humanizedPercentage.jsx";

function CompanyList(companyList) {
    const queryParameters = new URLSearchParams(window.location.search)
    const navigate = useNavigate()
    let optionsList = [{
        symbol: 'ERROR',
        name: 'NOT FOUND',
        image: '/not-found.svg'
    }];
    if (companyList.children.length > 0) {
        optionsList = companyList.children
    }

    async function handleSubmitfunc(route) {
        await navigate(route);
    }

    return (
        <>
            <div className="col-12">
                <div className="p-3 rounded-2 box border well">
                    <p className="h5 text-end text-white align-self-center">Search result</p>
                    <table className="table table-hover table-scroll">
                        <thead className="bg-transparent">
                        <tr>
                            <th className="col-1 text-center" scope="col">Symbol</th>
                            <th className="col-5 text-center" scope="col">Name</th>
                            <th className="col-2 text-center d-none d-lg-table-cell" scope="col">Currency</th>
                            <th className="col-4 text-center d-none d-lg-table-cell" scope="col">stockExchange</th>
                        </tr>
                        </thead>
                        <tbody id="table-content" className="bg-transparent">
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
                                        <div className="row flex-column justify-content-center">
                                            <div className="col">
                                                <img src={option.image} width="100%" onError={(e) => (
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
                                                        number={option.changesPercentage === undefined ? "" : option.changesPercentage}/>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default CompanyList
