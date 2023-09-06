export const Options = {
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
