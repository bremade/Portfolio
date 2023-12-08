// Import the required modules
const captchaUtils = require('../captchaUtils');
const { test, expect } = require('@jest/globals');
const moment = require('moment');

// Define a helper function to mock Date.now()
function mockDate(dateString) {
  Date.now = jest.fn(() => new Date(dateString));
}

// Test the checkCaptchaAnswer function for each day of the week
const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
daysOfWeek.forEach((day, index) => {
  test(`checkCaptchaAnswer function - ${day}`, () => {
    // Mock Date.now() to return a date that corresponds to the current day of the week
    mockDate(moment().weekday(index).clone().subtract(1, 'days'));

    // Test case: the answer is correct
    let result = captchaUtils.checkCaptchaAnswer(day);
    expect(result).toBe(true);
  });
});

test('checkCaptchaAnswer function - incorrect answer', () => {
  // Mock Date.now() to return a date that corresponds to the current day of the week
  // Use sunday index (0) to ensure that the answer is incorrect
  mockDate(moment().weekday(0));

  // Test case: the answer is incorrect
  let result = captchaUtils.checkCaptchaAnswer('tuesday');
  expect(result).toBe(false);
});