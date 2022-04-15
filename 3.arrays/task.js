function compareArrays(arr1, arr2) {
  let result = false;

  if (arr1.length === arr2.length) {
    result = arr1.every((element, idx) => element === arr2[idx]);
    return result;
  }

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter((element) => element > 0 && element % 3 === 0)
    .map((element) => element * 10);

  return resultArr; // array
}
