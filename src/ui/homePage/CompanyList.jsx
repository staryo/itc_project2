import CompanyListRows from "./CompanyListRows.jsx";
import React, {useEffect} from "react";

function CompanyList(companyList) {
    const [list, setList] = React.useState([]);
    useEffect(() => {
        setList(companyList.children)
    }, [companyList])
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
                        <CompanyListRows>{list}</CompanyListRows>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default CompanyList
