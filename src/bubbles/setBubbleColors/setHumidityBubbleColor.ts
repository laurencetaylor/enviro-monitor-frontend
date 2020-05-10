import { setBackgroundColor } from './setBackgroundColor';

enum Humidity {
    LOW = 25,
    MID = 50,
    HIGH = 75
}

enum HumidityColor {
    LOW = '#E4E0DC',
    MID = '#A2EAE0',
    HIGH = '#92D7EF',
    VERY_HIGH = '#0F7E9B'
}

const setHumidityBubbleColor = (humidity: number): void => {
    const humidityBubble = document.querySelector('.humidity-bubble');

    if (humidity < Humidity.LOW) {
        setBackgroundColor(humidityBubble, HumidityColor.LOW);
    } else if (humidity < Humidity.MID) {
        setBackgroundColor(humidityBubble, HumidityColor.MID);
    } else if (humidity < Humidity.HIGH) {
        setBackgroundColor(humidityBubble, HumidityColor.HIGH);
    } else {
        setBackgroundColor(humidityBubble, HumidityColor.VERY_HIGH);
    }
};

export { setHumidityBubbleColor };
