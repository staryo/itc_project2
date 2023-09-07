import PropTypes from "prop-types";

CompareButton.propTypes = {
    currentNumber: PropTypes.number,
    setCompareList: PropTypes.func,
    symbol: PropTypes.string
}

export default function CompareButton(props) {
    return (
        <>
            {/*Compare button*/}
            <td className="col-2 text-center d-none d-lg-table-cell px-3 py-2">
                <button className={`btn btn-light ${
                    props.currentNumber >= 4 ? "d-none" : ""
                } ${
                    props.symbol in ['ERROR', 'WAIT'] ? "d-none" : ""
                }`} onClick={
                    () => {
                        props.setCompareList(props.symbol)
                    }
                }>Compare
                </button>
            </td>
            {/*Compare button*/}
        </>
    )
}

