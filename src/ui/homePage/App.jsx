import '../styles.css'
import SearchString from "./SearchString.jsx"
import React, {useEffect} from "react";
import CompanyList from "./CompanyList.jsx";
import StockMarquee from "./StockMarquee.jsx";
import CompareContainer from "./CompareContainer.jsx";

function App() {
    const queryParameters = new URLSearchParams(window.location.search)
    const [compareList, setCompareList] = React.useState(new Set());
    useEffect(() => {
        if (queryParameters.get("symbols") != null) {
            setCompareList(
                queryParameters.get("symbols").split(',')
            )
        }
    }, []);
    const [list, setList] = React.useState([]);

    function addSymbolInCompareList(symbol) {
        setCompareList((current) => {
            return new Set([...current, symbol])
        })
    }

    function removeSymbolFromCompareList(symbol) {
        setCompareList((current) => {
            return new Set([...current].filter((element) => element !== symbol))
        })
    }

    return (
        <>
            <div className="row w-100">
                <div className="col">
                    <div className="p-3 rounded-2">
                        <StockMarquee/>
                    </div>
                </div>
            </div>
            <div className="row w-100 mb-sm-3 mb-2">
                <div className="col">
                    <div className="p-3 rounded-2 box border">
                        <SearchString setList={setList}/>
                        <div className="d-md-flex d-none mt-4">
                            <CompareContainer symbols={compareList} remove={removeSymbolFromCompareList}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row w-100 mt-sm-3 mt-2">
                <CompanyList companyList={list} setCompareList={addSymbolInCompareList} compareList={compareList}/>
            </div>
        </>
    )
}

export default App
