import searchCompany from "./logic/getCompanies.js";
import {useEffect, useState} from "react";


function MyInput({setList}) {
    const [inputValue, setInputValue] = useState("")
    const [debouncedInputValue, setDebouncedInputValue] = useState("");

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedInputValue(inputValue);
        }, 500);
        return () => clearTimeout(timeoutId);
    }, [inputValue, 500]);

    useEffect(() => {
        searchCompany(debouncedInputValue, setList)
    }, [debouncedInputValue]);
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
                            setInputValue(currentValue.target.value)
                        }
                    }/>
                </div>
            </div>
        </>
    )
}

export default MyInput
