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
    const weekdayIndex = weekdays.indexOf(answer);
    const weekdayIndexToday = new Date(new Date().toLocaleString("de-DE", {timeZone: "Europe/Berlin"})).getDay();
    const weekdayIndexTomorrow = (weekdayIndexToday + 1) % 7
    return weekdayIndexTomorrow === weekdayIndex;
}

export { checkCaptchaAnswer };
