// JS Weekday index starts with 0 = sunday
// For reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
const weekdays = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
]

function checkCaptchaAnswer(answer) {
    answer = answer.toLowerCase();
    const weekdayIndex = weekdays.indexOf(answer) + 1;
    const weekdayIndexToday = new Date().getDay();
    const weekdayIndexTomorrow = (weekdayIndexToday + 1) % 7
    return weekdayIndexTomorrow === weekdayIndex;
}

export { checkCaptchaAnswer };
