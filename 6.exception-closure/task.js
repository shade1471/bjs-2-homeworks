function parseCount(value) {
    let result = Number.parseInt(value);
    if (isNaN(result)) {
        throw new Error('Невалидное значение')
    } else {
        return result;
    }
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (err) {
        return err;
    }
}

class Triangle {
    constructor(a, b, c) {
        const noExistError = new Error('Треугольник с такими сторонами не существует');
        if (a > b + c) {
            throw noExistError;
        } else {
            this.a = a;
        }

        if (b > a + c) {
            throw noExistError;
        } else {
            this.b = b;
        }

        if (c > a + b) {
            throw noExistError;
        } else {
            this.c = c;
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let halfPer = this.getPerimeter() / 2;
        let s = Math.sqrt(halfPer * (halfPer - this.a) * (halfPer - this.b) * (halfPer - this.c));
        return Number(s.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (err) {
        return {
            getPerimeter() { return 'Ошибка! Треугольник не существует' },
            getArea() { return 'Ошибка! Треугольник не существует' }
        }
    }
}