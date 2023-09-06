import CompanyListRows from "./CompanyListRows.jsx";
import PropTypes from "prop-types";

CompanyList.propTypes = {
    companyList: PropTypes.object,
    setCompareList: PropTypes.func,
    compareList: PropTypes.array
}

function CompanyList(props) {
    return (
        <>
            <div className="col-12">
                <div className="p-3 rounded-2 box border well">
                    <p className="h5 text-end text-white align-self-center">Search result</p>
                    <table className="table table-hover table-scroll">
                        <thead className="bg-transparent">
                        <tr>
                            <th className="col-1 text-center" scope="col">Symbol</th>
                            <th className="col text-center" scope="col">Name</th>
                            <th className="col-2 text-center d-none d-lg-table-cell" scope="col">Currency</th>
                            <th className="col-2 text-center d-none d-lg-table-cell" scope="col"></th>
                        </tr>
                        </thead>
                        <tbody id="table-content" className="bg-transparent">
                        <CompanyListRows
                            companyList={props.companyList}
                            setCompareList={props.setCompareList}
                            compareList={[...props.compareList]}
                        />
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default CompanyList
