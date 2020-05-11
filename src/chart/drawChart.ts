import Chart from 'chart.js';

interface IFormattedData {
    pm25: Array<object>;
    pressure: Array<object>;
    humidity: Array<object>;
}

const drawChart = readings => {
    const formattedData = formatDataArrays(readings);
    renderChartWithData(formattedData);
};

const formatDataArrays = readings => {
    const pm25Array = [];
    const pressureArray = [];
    const humidityArray = [];

    readings.data.forEach(reading => {
        const dateInteger = new Date(reading.data.attributes.date).getTime();

        pm25Array.push({
            x: dateInteger,
            y: reading.data.attributes.pm25
        });

        pressureArray.push({
            x: dateInteger,
            y: reading.data.attributes.pressure
        });

        humidityArray.push({
            x: dateInteger,
            y: reading.data.attributes.humidity
        });
    });

    return {
        pm25: pm25Array,
        pressure: pressureArray,
        humidity: humidityArray
    };
};

const renderChartWithData = (data: IFormattedData): void => {
    const canvas = <HTMLCanvasElement>document.getElementById('chart');
    const ctx = canvas.getContext('2d');

    new Chart(ctx, {
        type: 'scatter',

        data: {
            datasets: [
                {
                    label: 'PM2.5',
                    data: data.pm25,
                    yAxisID: 'PM2.5',
                    // options: {
                        backgroundColor: 'black',
                        borderColor: 'black'
                    // }
                },
                {
                    label: 'Pressure',
                    data: data.pressure,
                    yAxisID: 'Pressure'
                },
                {
                    label: 'Humidity',
                    data: data.humidity,
                    yAxisID: 'Humidity'
                }
            ]
        },

        options: {
            scales: {
                yAxes: [
                    {
                        id: 'Pressure',
                        type: 'linear',
                        position: 'right',
                        gridLines: { display: false },
                        scaleLabel: {
                            display: true,
                            labelString: 'Pressure (hPa)'
                        }
                    },
                    {
                        id: 'Humidity',
                        type: 'linear',
                        position: 'right',
                        gridLines: { display: false },
                        scaleLabel: {
                            display: true,
                            labelString: 'Humidity (%)'
                        }
                    },
                    {
                        id: 'PM2.5',
                        type: 'linear',
                        position: 'left',
                        gridLines: { display: false },
                        scaleLabel: {
                            display: true,
                            labelString: 'PM2.5 (ppm)'
                        }
                    }
                ]
            }
        }
    });
};

export { drawChart };
