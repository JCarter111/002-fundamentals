const alarm = require('../app/alarm');

test('Moans if too early', () => {
  let timeNow = new Date();
  timeNow.setHours(11);
  expect(alarm.wakeup(timeNow)).toBe("Ugggggh its too early - I'm not waking up yet");
});
test('Lunch time test', () => {
  let timeNow = new Date();
  timeNow.setHours(14);
  expect(alarm.wakeup(timeNow)).toBe("Yessssss its lunch time!!!");
});
test('Snoozing for a set amount', () => {
  expect(alarm.snooze()).toBe(20);
});
//test('Alarm Users', () => {
  // test names of users who have used alarm
test('List Alarm Users', () => {
 const expectedResult = ["James","Susan","Geoff","Lisa"];
  expect(alarm.alarmUsers()).toEqual(expectedResult);
});
