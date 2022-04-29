// тут вы можете вызывать функции из task.js
let newAlarm = new AlarmClock();
console.warn("Проверка на добавление будильников с существующим ID и без него:")

newAlarm.addClock(newAlarm.getCurrentFormattedTime, () => console.log("Первый будильник"), 1);
newAlarm.addClock(addMinute(5), () => console.log("Второй будильник"), 2);
newAlarm.addClock(addMinute(10), () => console.log("Третий будильник с существующим ID"), 2);

try {
    newAlarm.addClock(addMinute(15), () => console.log("Четвертый будильник без ID"));
} catch (err) {
    console.log(err);
}
console.warn("Ниже прогон тест кейса")
testCase();
