import './App.css'
import MyInput from "./MyInput.jsx"
import React from "react";
import CompanyList from "./CompanyList.jsx";

function App() {
    const [list, setList] = React.useState([]);

    return (
        <>
            <div className="row w-100 mb-sm-5 mb-2">
                <MyInput setList={setList}/>
            </div>

            <div className="row w-100 mt-sm-5 mt-2">
                <CompanyList>{list}</CompanyList>
            </div>
        </>
    )
}

export default App
