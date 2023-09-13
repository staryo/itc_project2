import PropTypes from "prop-types";

CompareButton.propTypes = {
    currentNumber: PropTypes.number,
    setCompareList: PropTypes.func,
    symbol: PropTypes.string
}

export default function CompareButton({currentNumber, setCompareList, symbol}) {
    return (
        <>
            {/*Compare button*/}
            <td className="col-2 text-center d-none d-lg-table-cell px-3 py-2">
                <button className={`btn btn-light ${
                    currentNumber >= 4 ? "d-none" : ""
                } ${
                    ['ERROR', 'WAIT'].includes(symbol) ? "d-none" : ""
                }`} onClick={
                    () => {
                        setCompareList(symbol)
                    }
                }>Compare
                </button>
            </td>
            {/*Compare button*/}
        </>
    )
}

