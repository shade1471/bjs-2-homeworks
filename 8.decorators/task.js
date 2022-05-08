function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');

    let idx = cache.findIndex((item) => item.hash === hash); //ищем элемент, хэш кот. равен нашему хэшу
    if (idx !== -1) { // если элемент найден
      console.log("Из кэша: " + cache[idx].result);
      return "Из кэша: " + cache[idx].result;
    }

    let result = func(...args); // в кэше результата нет - придётся считать
    cache.push({ hash, result }); // добавляем элемент с правильной структурой
    if (cache.length > 5) {
      cache.shift(); // если слишком много элементов в кэше надо удалить самый старый (первый) 
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let timeout;
  let flag = false;

  return function (...args) {
    if (!flag) {
      func.apply(this, args);
    }

    flag = true;
    clearTimeout(timeout);

    if (flag) {
      timeout = setTimeout(() => {
        func.apply(this, args);
        flag = false;
      }, ms)
    }
  }
}


function debounceDecorator2(func, ms) {
  let timeout;
  let flag = false;
  wrapper.count = 0;

  function wrapper(...args) {
    wrapper.count++;
    if (!flag) {
      func.apply(this, args);
    }

    flag = true;
    clearTimeout(timeout);
    
    timeout = setTimeout(() => {
      func.apply(this, args);
      flag = false;
    }, ms);
  }
  return wrapper;
}