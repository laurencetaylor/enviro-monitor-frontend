const setBackgroundColor = (element: Element, color: string): void => {
    element.setAttribute('style', `background-color: ${color}`);
};

export { setBackgroundColor };
