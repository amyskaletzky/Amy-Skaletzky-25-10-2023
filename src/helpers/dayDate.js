const DAY_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const getDayOfWeek = (epochTime) => {
    const date = new Date(epochTime * 1000);
    return DAY_OF_WEEK[date.getDay()];
}

export const getDateNow = (epochTime) => {
    const date = new Date(epochTime * 1000);
    return (
        date.getDate() + '/' +
        (date.getMonth() + 1) + '/' +
        date.getFullYear()
    );
}

export const getTime = (epochTime) => {
    const date = new Date(epochTime * 1000);
    const options = {
        hour: "2-digit",
        minute: "2-digit",
    };
    return date.toLocaleString("en-US", options);
}
