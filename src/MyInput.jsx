import searchCompany from "./logic/getCompanies.js";


function MyInput(props) {
    return (
        <>
            <div className="col">
                <div className="p-3 rounded-2 box border">
                    <p className="h1 m-0 p-3 text-center text-white" id="result">
                    Choose company from the list:
                    </p>
                    <input className="form-control form-control-lg text-center" list="company" name="company" id="chosen_company" placeholder="Company name" onKeyUp={
                        (currentValue) => {
                            searchCompany(currentValue.target.value, props.setList)
                        }
                    }/>
                </div>
            </div>
        </>
    )
}

export default MyInput
