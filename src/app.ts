import './styles/index.scss';

import { getEnviroReadings } from './api/getEnviroReadings';
import { startClock } from './startClock';
import { setBubbleColors, setBubbleValues } from './bubbles';
import { drawChart } from './chart/drawChart';

let readings;

const getLastWeekString = (): string => {
    const date = new Date();
    const lastWeek = date.getDate() - 7;
    const lastWeekString = new Date(date.setDate(lastWeek))
        .toISOString()
        .slice(0, 10);
    return lastWeekString;
};

const updateReadings = async (): Promise<void> => {
    readings = await getEnviroReadings({ dateFrom: getLastWeekString() });
};

const fillDataBubbles = async (): Promise<void> => {
    const lastReading = readings.data[0].data.attributes;

    setBubbleValues(lastReading);
    setBubbleColors(
        lastReading.pm25,
        lastReading.humidity,
        lastReading.temperature
    );
};

window.onload = async (): Promise<void> => {
    startClock();
    await updateReadings();
    fillDataBubbles();

    drawChart(readings);
};
