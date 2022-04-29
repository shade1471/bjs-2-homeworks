class AlarmClock {

    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callBack, id) {
        if (id === undefined) {
            throw new Error("Не указан идентификатор")
        }
        if (this.alarmCollection.some(item => item.id === id)) {
            console.error("Уже существует такой индентификатор");
            return;
        }
        this.alarmCollection.push({ id, time, callBack });
    }

    removeClock(id) {
        let origLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(item => item.id !== id)
        return origLength !== this.alarmCollection.length;
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" });
    }

    start() {
        let checkClock = (clock) => {
            if (clock.time === this.getCurrentFormattedTime()) {
                clock.callBack();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() =>
                this.alarmCollection.forEach(item => checkClock(item)), 1000);
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`Всего будильников ${this.alarmCollection.length}:`);
        this.alarmCollection.forEach(item => console.log(`Будильник №${item.id} поставлен на ${item.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    let phoneAlarm = new AlarmClock();
    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => console.log('Просыпайся, ну пожалуйста!'), 1);

    phoneAlarm.addClock(addMinute(1), () => { console.log('Вставай же!'); phoneAlarm.removeClock(2) }, 2);

    phoneAlarm.addClock(addMinute(2), () => {
        console.log('Это твой последний шанс!');
        phoneAlarm.clearAlarms();
        phoneAlarm.printAlarms();
    }, 3);

    phoneAlarm.printAlarms();
    phoneAlarm.start();
}

function addMinute(min) {
    let newTime = new Date();
    newTime.setMinutes(newTime.getMinutes() + min);
    return newTime.toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" })
}