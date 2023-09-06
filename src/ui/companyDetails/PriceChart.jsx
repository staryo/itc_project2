import {Line} from 'react-chartjs-2';
import {Options} from "./PriceChartOptions.jsx";
import {sortObject} from "../../utils/sortObject.jsx";


export function PriceChart(priceData) {
    let dataForChart = [];
    if (priceData.history.historical !== undefined) {
        dataForChart = sortObject(
            Object.fromEntries(priceData.history.historical.map((i) => [i.date, i.close]))
        )
    }
    const data = {
        datasets: [
            {
                data: dataForChart,
                borderColor: 'rgb(255, 255, 255)',
                width: 1,
                pointRadius: 0,
            },
        ],
    };
    return (
        <Line options={Options} data={data} width={"100%"} height={"40%"}/>
    );
}
