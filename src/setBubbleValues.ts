enum ReadingValues {
    HUMIDITY = 'humidity',
    TEMPERATURE = 'temperature',
    PM25 = 'pm25'
}

interface Readings {
    date: string;
    pressure: number;
    temperature: number;
    pm25: number;
    humidity: number;
}

const setBubbleValue = (name: ReadingValues, value: number): void => {
    const element = document.querySelector(`.${name}-value`);

    switch (name) {
        case ReadingValues.HUMIDITY:
            element.innerHTML = value.toFixed(0);
            break;
        case ReadingValues.TEMPERATURE:
            element.innerHTML = value.toFixed(1);
            break;
        case ReadingValues.PM25:
            element.innerHTML = value.toString();
    }
};

const setBubbleValues = (readings: Readings): void => {
    Object.keys(readings).forEach(key => {
        const name = ReadingValues[key.toUpperCase()];

        if (name) {
            setBubbleValue(name, readings[key]);
        }
    });
};

export { setBubbleValues };
