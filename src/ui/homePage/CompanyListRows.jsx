import React, {useEffect} from "react";
import CompareButton from "./CompareButton.jsx";
import PropTypes from "prop-types";
import SymbolAndLogo from "./SymbolAndLogo.jsx";
import CompanyNameAndPrice from "./CompanyNameAndPrice.jsx";
import Currency from "./Currency.jsx";

const errorMessage = [{
    symbol: 'ERROR',
    name: 'NOT FOUND',
    image: '/not-found.svg'
}]

CompanyListRows.propTypes = {
    companyList: PropTypes.array,
    setCompareList: PropTypes.func,
    compareList: PropTypes.array
}

function CompanyListRows({companyList, setCompareList, compareList}) {
    const [optionsList, setList] = React.useState(errorMessage);
    useEffect(() => {
        if (companyList.length > 0) {
            setList(companyList)
        } else {
            setList(errorMessage)
        }
    }, [companyList])

    return (
        <>
            {
                optionsList.map(option => (
                    <tr key={option.symbol} className="bg-transparent p-5 border-bottom">

                        <SymbolAndLogo symbol={option.symbol} image={option.image}/>

                        <CompanyNameAndPrice
                            name={option.name}
                            symbol={option.symbol}
                            price={option.price}
                            changesPercentage={option.changesPercentage}
                        />

                        <Currency symbol={option.symbol} currency={option.currency}/>

                        <CompareButton
                            setCompareList={setCompareList}
                            symbol={option.symbol}
                            currentNumber={compareList.length}
                        />

                    </tr>
                ))
            }
        </>
    )
}

export default CompanyListRows
