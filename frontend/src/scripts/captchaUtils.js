// JS Weekday index starts with 0 = sunday
// For reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
const moment = require('moment');

const weekdays = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
]

function checkCaptchaAnswer(answer) {
    answer = answer.toLowerCase();
    const weekdayIndex = weekdays.indexOf(answer);
    const tomorrowIndex = moment().clone().add(1,'days').weekday();
    return tomorrowIndex === weekdayIndex;
}

export { checkCaptchaAnswer };
