export const Options = {
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


export const Color = ['rgb(255, 255, 255)', 'rgb(255, 0, 255)', 'rgb(255, 255, 0)', 'rgb(0, 255, 0)']
