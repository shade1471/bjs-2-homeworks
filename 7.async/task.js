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
        this.alarmCollection.forEach
            (item => console.log(`Всего будильников ${this.alarmCollection.length} \nБудильник с идентификатором ${item.id} поставлен на ${item.time}`))
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}