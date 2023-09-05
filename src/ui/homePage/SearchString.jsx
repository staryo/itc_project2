import searchCompany from "../../api/getCompanies.js";
import {useEffect, useState} from "react";


function SearchString({setList}) {
    const queryParameters = new URLSearchParams(window.location.search)
    const [inputValue, setInputValue] = useState(queryParameters.get("search"))
    const [debouncedInputValue, setDebouncedInputValue] = useState(queryParameters.get("search"));

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (inputValue !== "") {
                setDebouncedInputValue(inputValue);
            }
        }, 500);
        return () => clearTimeout(timeoutId);
    }, [inputValue]);

    useEffect(() => {
        if (debouncedInputValue === null) return
        setList([{
            symbol: 'WAIT',
            name: 'Loading...',
            image: '/not-found.svg',
            changesPercentage: '?'
        }])
        searchCompany(debouncedInputValue, setList)
        window.history.replaceState(
            history.state,
            null,
            `?search=${debouncedInputValue}`
        );
    }, [debouncedInputValue]);
    return (
        <>
            <p className="h1 m-0 p-3 text-center text-white" id="result">
                Search company
            </p>
            <input className="form-control form-control-lg text-center" list="company" name="company"
                   id="chosen_company" placeholder={"Company name"} value={inputValue === null? '': inputValue} onChange={
                (currentValue) => {
                    setInputValue(currentValue.target.value)
                }
            }/>
        </>
    )
}

export default SearchString
