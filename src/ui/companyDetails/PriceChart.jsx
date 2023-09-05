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
            display: false,
            position: 'top',
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

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


export function PriceChart(priceData) {
    const sortObject = obj => Object.keys(obj).sort().reduce((res, key) => (res[key] = obj[key], res), {});
    let dataForChart = [];
    if (priceData.history.historical != undefined) {
        // labels = priceData.history.historical.map((i) => i.date).reverse()
        dataForChart = sortObject(
            Object.fromEntries(priceData.history.historical.map((i) => [i.date, i.close]))
        )
    }
    const data = {
        // labels,
        datasets: [
            {
                data: dataForChart,
                borderColor: 'rgb(255, 255, 255)',
                width: 1,
                pointRadius: 0, // disable for a single dataset
            },
        ],
    };
    return (
        <Line options={options} data={data} width={"100%"} height={"40%"}/>
    );
}
