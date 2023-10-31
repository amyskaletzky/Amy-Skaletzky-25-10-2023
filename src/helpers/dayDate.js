const DAY_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const getDayOfWeek = (date) => {
    let currentDate = new Date(date);
    return DAY_OF_WEEK[currentDate.getDay()]
}

export const getDateNow = (date) => {
    let currentDate = new Date(date)
    return currentDate.getDate() + '/' + eval(currentDate.getMonth() + 1) + '/' + currentDate.getFullYear();
}
