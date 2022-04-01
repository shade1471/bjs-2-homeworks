"use strict";

function solveEquation(a, b, c) {
  let arr;
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant < 0) {
    arr = [];
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    arr = [Number(root.toFixed(2))];
  } else {
    let rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
    let rootTwo = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr = [Number(rootOne.toFixed(2)), Number(rootTwo.toFixed(2))];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let attention;

  if (isNaN(Number(percent))) {
    return attention = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }

  if (isNaN(Number(contribution))) {
    return attention = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }

  if (isNaN(Number(amount))) {
    return attention = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  let S = Number(amount) - Number(contribution);
  let dateCredit = new Date(date);
  let nowDate = new Date;

  //Разница между датой кредита и текущей
  let diff = Math.abs(dateCredit - nowDate);

  //Кол-во месяцев
  let n = Math.ceil(diff / (1000 * 3600 * 24 * 31));

  let P = Number(percent) / 12 / 100;

  let payment = S * (P + (P / (Math.pow(1 + P, n) - 1)));
  totalAmount = payment * n;

  return Number(totalAmount.toFixed(2));
}
