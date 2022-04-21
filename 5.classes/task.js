class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(condition) {
        if (condition < 0) {
            this._state = 0;
        } else if (condition > 100) {
            this._state = 100;
        } else {
            this._state = condition;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let book of this.books) {
            if (book[type] === value) {
                return book;
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        let tmp = this.findBookBy('name', bookName);
        let index = this.books.indexOf(tmp);

        if (index !== -1) {
            this.books.splice(index, 1);
        }

        return tmp;
    }

}

class Student {
    constructor(name) {
        this.name = name;
        this.disciplines = [];
    }

    addMark(mark, subject) {
        if (this.disciplines.some(item => item.name === subject)) {
            let tmp = this.disciplines.find(item => item.name === subject);
            tmp.marks = mark;
        } else {
            let newDiscipline = new Subject(subject);
            newDiscipline.marks = mark;
            this.disciplines.push(newDiscipline);
        }
    }

    getAverageBySubject(subject) {
        if (this.disciplines.some(item => item.name === subject)) {
            let tmp = this.disciplines.find(item => item.name === subject);
            return tmp.getAverage();
        } else {
            console.log('Несуществующий предмет');
        }
    }

    getAverage() {
        let count = 0;
        let sumTotal = 0;
        for (let item of this.disciplines) {
            sumTotal += item.getSumm();
            count += item._marks.length;
        }
        return sumTotal / count;
    }

    exclude(reason) {
        delete this.disciplines;
        this.excluded = reason;
    }
}

class Subject {
    constructor(name) {
        this.name = name;
        this._marks = []
    }

    set marks(value) {
        if (value > 5) {
            console.log("Ошибка, оценка должна быть числом от 1 до 5");
        } else if (value < 1) {
            console.log("Ошибка, оценка должна быть числом от 1 до 5");
        } else {
            this._marks.push(value)
        }
    }

    get marks() {
        return this._marks;
    }

    getAverage() {
        let sum = 0;
        for (let mark of this._marks) {
            sum += mark;
        }
        return sum / this._marks.length;
    }

    getSumm() {
        let sum = 0;
        for (let mark of this._marks) {
            sum += mark;
        }
        return sum;
    }
}