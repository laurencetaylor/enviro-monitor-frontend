import './styles/index.scss';

import { getEnviroReadings } from './api/getEnviroReadings';
import { startClock } from './startClock';
import { setBubbleColors } from './setBubbleColors';
import { setBubbleValues } from './setBubbleValues';

const fillDataBubbles = async (): Promise<void> => {
    const res = await getEnviroReadings({ limit: 1 });
    const readings = res.data[0].data.attributes;

    setBubbleValues(readings);
    setBubbleColors(readings.pm25, readings.humidity, readings.temperature);
};

window.onload = (): void => {
    startClock();
    fillDataBubbles();
};
