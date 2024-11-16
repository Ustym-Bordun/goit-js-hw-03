const filterArray = function (numbers, value) {
  // console.log(numbers);
  // console.log(`Push numbers to new array that are larger than ${value}.`);

  const resultArr = [];

  for (let i = 0; i < numbers.length; i++) {
    // console.log(`Iteration ${i + 1}`);
    if (numbers[i] > value) {
      // console.log(`Push : ${numbers[i]}`);
      resultArr.push(numbers[i]);
    }
  }

  return resultArr;
};

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
