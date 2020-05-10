import './styles/index.scss';

import { getEnviroReadings } from './api/getEnviroReadings';
import { startClock } from './clock';
import { setBubbleColors } from './setBubbleColors/setBubbleColors';

const fillDataBubbles = async (): Promise<void> => {
    const res = await getEnviroReadings({ limit: 1 });

    const { humidity, temperature, pm25 } = res.data[0].data.attributes;

    const liveHumidity = document.querySelector('.humidity-text');
    const liveTemperature = document.querySelector('.temperature-text');
    const livePM25 = document.querySelector('.pm25-text');

    liveHumidity.innerHTML = `${humidity.toFixed(0)}%`;
    liveTemperature.innerHTML = `${temperature.toFixed(1)}°C`;
    livePM25.innerHTML = `${pm25}ppm`;

    setBubbleColors(pm25, humidity, temperature);
};

window.onload = (): void => {
    startClock();
    fillDataBubbles();
};
