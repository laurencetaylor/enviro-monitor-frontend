import { setHumidityBubbleColor } from './setHumidityBubbleColor';
import { setPm25BubbleColor } from './setPm25BubbleColor';
import { setTemperatureBubbleColor } from './setTemperatureBubbleColor';

const setBubbleColors = (
    pm25: number,
    humidity: number,
    temperature: number
): void => {
    setPm25BubbleColor(pm25);
    setHumidityBubbleColor(humidity);
    setTemperatureBubbleColor(temperature);
};

export { setBubbleColors };
