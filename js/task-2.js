const makeArray = function (firstArray, secondArray, maxLength) {
  const resultArr = firstArray.concat(secondArray);
  const concatedArrayLength = resultArr.length;

  // console.log(resultArr);
  // console.log(`Arr length : ${concatedArrayLength}`);
  // console.log(`Max length : ${maxLength}`);

  for (let i = maxLength; i < concatedArrayLength; i++) {
    resultArr.pop();
    // console.log("pop");
  }

  return resultArr;
};

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
