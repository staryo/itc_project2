import {Line} from 'react-chartjs-2';
import {Color, Options} from "./ComparePriceChartOptions.jsx";

export function ComparePriceChart(priceData) {
    let dataForChart = {};
    let labels = [];

    // merging labels from several history datasets
    Object.keys(priceData.history).map((key) => {
        const new_labels = new Set(priceData.history[key].historical.map((i) => i.date))
        labels = [...labels, ...new_labels].sort()
        dataForChart[key] = Object.fromEntries(priceData.history[key].historical.map((i) => [i.date, i.close]))
    })
    labels = labels.slice(-1000)

    // generating dataset for ChartJS
    const data = {labels: labels, datasets: []};
    Object.keys(priceData.history).map((key, index) => data.datasets.push(
        {
            data: labels.map((date) => dataForChart[key][date]),
            label: key,
            borderColor: Color[index],
            width: 1,
            pointRadius: 0, // disable for a single dataset
        },
    ))

    return (
        <Line options={Options} data={data} width={"100%"} height={"400px"}/>
    );
}
