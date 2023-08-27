function CompanyList(companyList) {
    // console.log(companyList.children)
    let optionsList = [];
    if (companyList.children != undefined) {
        optionsList = companyList.children
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
                            <th className="col-2 text-center" scope="col">Currency</th>
                            <th className="col-4 text-center d-none d-lg-table-cell" scope="col">stockExchange</th>
                        </tr>
                        </thead>
                        <tbody id="table-content">
                        {
                            optionsList.map(option => (
                                <tr key={option.symbol}>
                                    <th scope="row" className="col-1 text-center">{option.symbol}</th>
                                    <td className="col-5 text-center">{option.name}</td>
                                    <td className="col-2 text-center">{option.currency}</td>
                                    <td className="col-4 text-center d-none d-lg-table-cell">{option.stockExchange}</td>
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
