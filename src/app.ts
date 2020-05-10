import './styles/index.scss';

import { getEnviroReadings } from './api/getEnviroReadings';
import { startClock } from './startClock';
import { setBubbleColors, setBubbleValues } from './bubbles';
import { drawChart } from './chart/drawChart';

const fillDataBubbles = async (): Promise<void> => {
    const res = await getEnviroReadings({ limit: 1 });
    const readings = res.data[0].data.attributes;

    setBubbleValues(readings);
    setBubbleColors(readings.pm25, readings.humidity, readings.temperature);
};

window.onload = (): void => {
    startClock();
    fillDataBubbles();
    drawChart();
};
