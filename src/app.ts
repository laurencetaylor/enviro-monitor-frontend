import './styles/index.scss';

import { getEnviroReadings } from './api/getEnviroReadings';
import { startClock } from './startClock';
import { setBubbleColors } from './setBubbleColors';

enum Readings {
    HUMIDITY = 'humidity',
    TEMPERATURE = 'temperature',
    PM25 = 'pm25'
}

const setBubbleValue = (name: Readings, value: number): void => {
    const element = document.querySelector(`.${name}-value`);

    switch (name) {
        case Readings.HUMIDITY:
            element.innerHTML = value.toFixed(0);
            break;
        case Readings.TEMPERATURE:
            element.innerHTML = value.toFixed(1);
            break;
        case Readings.PM25:
            element.innerHTML = value.toString();
    }
};

const fillDataBubbles = async (): Promise<void> => {
    const res = await getEnviroReadings({ limit: 1 });
    const readings = res.data[0].data.attributes;

    Object.keys(readings).forEach(key => {
        const name = Readings[key.toUpperCase()];
        if (name) {
            setBubbleValue(name, readings[key]);
        }
    });

    setBubbleColors(readings.pm25, readings.humidity, readings.temperature);
};

window.onload = (): void => {
    startClock();
    fillDataBubbles();
};
