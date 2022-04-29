// тут вы можете вызывать функции из task.js
let budilnik = new AlarmClock();
budilnik.addClock("16:45", () => console.log('Просыпайся'), 1);
budilnik.addClock("17:45", () => console.log('Вставай!'), 2);
budilnik.addClock("19:00", () => console.log('Вставай!'), 3);
console.log(budilnik);
budilnik.printAlarms();