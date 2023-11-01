const DAY_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const getDayOfWeek = (date) => {
    let currentDate = new Date(date);
    return DAY_OF_WEEK[currentDate.getDay()]
}

export const getDateNow = (date) => {
    let currentDate = new Date(date)
    return currentDate.getDate() + '/' + eval(currentDate.getMonth() + 1) + '/' + currentDate.getFullYear();
}

export const getTime = (date) => {
    let dateTime = new Date(date);
    const options = {
        hour: "2-digit",
        minute: "2-digit",
    };
    const time = dateTime.toLocaleString("en-US", options);
    return time;
}