// JS Weekday index starts with 0 = sunday
// For reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
const weekdays = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
]

function checkCaptchaAnswer(answer) {
    answer = answer.toLowerCase();
    const weekdayIndex = weekdays.indexOf(answer);
    const weekdayIndexToday = new Date(new Date().toLocaleString("de-DE", {timeZone: "Europe/Berlin"})).getUTCDay();
    const weekdayIndexTomorrow = (weekdayIndexToday + 1) % 7
    return weekdayIndexTomorrow === weekdayIndex;
}

export { checkCaptchaAnswer };
