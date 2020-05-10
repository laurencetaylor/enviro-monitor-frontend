import { setBackgroundColor } from './setBackgroundColor';

enum Temperature {
    LOW = 10,
    MID = 20,
    HIGH = 30
}

enum TemperatureColor {
    LOW = '#92D7EF',
    MID = '#FDFD96',
    HIGH = '#FFB347',
    VERY_HIGH = '#FF6961'
}

const setTemperatureBubbleColor = (temperature: number): void => {
    const temperatureBubble = document.querySelector('.temperature-bubble');

    if (temperature < Temperature.LOW) {
        setBackgroundColor(temperatureBubble, TemperatureColor.LOW);
    } else if (temperature < Temperature.MID) {
        setBackgroundColor(temperatureBubble, TemperatureColor.MID);
    } else if (temperature < Temperature.HIGH) {
        setBackgroundColor(temperatureBubble, TemperatureColor.HIGH);
    } else {
        setBackgroundColor(temperatureBubble, TemperatureColor.VERY_HIGH);
    }
};

export { setTemperatureBubbleColor };
