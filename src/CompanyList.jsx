import {useNavigate} from "react-router-dom";

function CompanyList(companyList) {
    const queryParameters = new URLSearchParams(window.location.search)
    const navigate = useNavigate()
    let optionsList = [{
        symbol: 'ERROR',
        name: 'NOT FOUND'
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
                                <tr key={option.symbol} className="bg-transparent p-5 border-bottom link-row" onClick={() => {
                                    handleSubmitfunc(`company/${option.symbol}?search=${queryParameters.get("search")}`)
                                }}>
                                    <th scope="row" className="col-1 text-center px-3 py-2">{option.symbol}</th>
                                    <td className="col-5 text-center px-3 py-2">{option.name}</td>
                                    <td className="col-2 text-center px-3 py-2 d-none d-lg-table-cell">{option.currency}</td>
                                    <td className="col-4 text-center d-none d-lg-table-cell px-3 py-2">{option.stockExchange}</td>
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
