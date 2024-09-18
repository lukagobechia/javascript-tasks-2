function sumOfSquares(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) sum += array[i] * array[i];
  return sum;
}

console.log(sumOfSquares([1, 2,3]));
