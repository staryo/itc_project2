import '../styles.css'
import SearchString from "./SearchString.jsx"
import React from "react";
import CompanyList from "./CompanyList.jsx";
import Marquee from "react-fast-marquee";
import StockMarquee from "./StockMarquee.jsx";

function App() {
    const [list, setList] = React.useState([]);
    return (
        <>
            <div className="row w-100 mb-sm-5 mb-2">
                <div className="col">
                    <div className="p-3 rounded-2 box border">
                        <StockMarquee/>
                        <SearchString setList={setList}/>
                    </div>
                </div>
            </div>

            <div className="row w-100 mt-sm-5 mt-2">
                <CompanyList>{list}</CompanyList>
            </div>
        </>
    )
}

export default App
