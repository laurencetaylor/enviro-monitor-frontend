import { setBackgroundColor } from './setBackgroundColor';

enum Pm25 {
    LOW = 12,
    MID = 35,
    HIGH = 55
}

enum Pm25Color {
    LOW = '#77DD77',
    MID = '#FDFD96',
    HIGH = '#FFB347',
    VERY_HIGH = 'FF6961'
}

const setPm25BubbleColor = (pm25: number): void => {
    const pm25Bubble = document.querySelector('.pm25-bubble');

    if (pm25 < Pm25.LOW) {
        setBackgroundColor(pm25Bubble, Pm25Color.LOW);
    } else if (pm25 < Pm25.MID) {
        setBackgroundColor(pm25Bubble, Pm25Color.MID);
    } else if (pm25 < Pm25.HIGH) {
        setBackgroundColor(pm25Bubble, Pm25Color.HIGH);
    } else {
        setBackgroundColor(pm25Bubble, Pm25Color.VERY_HIGH);
    }
};

export { setPm25BubbleColor };
