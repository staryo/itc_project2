import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                color: 'rgb(255, 255, 255)'
            }
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
    scales: {
        x: {
            ticks:
                {
                    color: "#fff"
                },
            border:
                {
                    display: true,
                    width: 2,
                    color: "#fff"
                }
        },
        y: {
            beginAtZero: true,
            ticks:
                {
                    color: "#fff"
                },
            border:
                {
                    display: true,
                    width: 2,
                    color: "#fff"
                }
        }

    }
};

const color = ['rgb(255, 255, 255)', 'rgb(255, 0, 255)', 'rgb(255, 255, 0)', 'rgb(0, 255, 0)']

export function ComparePriceChart(priceData) {
    let dataForChart = {};
    let labels = [];
    Object.keys(priceData.history).map((key) => {
        const new_labels = new Set(priceData.history[key].historical.map((i) => i.date))
        labels = [...labels, ...new_labels].sort()
        dataForChart[key] = Object.fromEntries(priceData.history[key].historical.map((i) => [i.date, i.close]))
    })
    labels = labels.slice(-1000)
    let valuesForChart = {};
    Object.keys(priceData.history).map((key) => {
        valuesForChart[key] = labels.map((date) => dataForChart[key][date])
    })
    const data = {labels: labels, datasets: []};
    Object.keys(valuesForChart).map((key, index) => data.datasets.push(
        {
            data: valuesForChart[key],
            label: key,
            borderColor: color[index],
            width: 1,
            pointRadius: 0, // disable for a single dataset
        },
    ))
    return (
        <Line options={options} data={data} width={"100%"} height={"50%"}/>
    );
}
