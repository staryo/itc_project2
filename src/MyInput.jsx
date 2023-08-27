import searchCompany from "./logic/getCompanies.js";


function MyInput({setList}) {

    return (
        <>
            <div className="col">
                <div className="p-3 rounded-2 box border">
                    <p className="h1 m-0 p-3 text-center text-white" id="result">
                        Search company
                    </p>
                    <input className="form-control form-control-lg text-center" list="company" name="company"
                           id="chosen_company" placeholder="Company name" onKeyUp={
                        (currentValue) => {
                            searchCompany(currentValue.target.value, setList)
                        }
                    }/>
                </div>
            </div>
        </>
    )
}

export default MyInput
