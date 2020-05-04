import './styles/index.scss';

import { getEnviroReadings } from './api/getEnviroReadings';

const tickClock = (): void => {
    const targetDiv = document.querySelector('.current-time');
    const currentTime = new Date();
    targetDiv.innerHTML = currentTime.toLocaleTimeString();
};

const startClock = (): void => {
    tickClock();
    setInterval(tickClock, 1000);
};

const fillDataBubbles = async (): void => {
    const res = await getEnviroReadings({ limit: 1 });
    const { humidity, temperature, pm25 } = res.data[0].data.attributes;

    const liveHumidity = document.querySelector('.humidity-text');
    const liveTemperature = document.querySelector('.temperature-text');
    const livePM25 = document.querySelector('.pm25-text');

    liveHumidity.innerHTML = `${humidity.toFixed(2)}%`;
    liveTemperature.innerHTML = `${temperature.toFixed(2)}°C`;
    livePM25.innerHTML = `${pm25}ppm`;
};

window.onload = async () => {
    startClock();
    fillDataBubbles();
};
