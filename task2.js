function reverseArray(array) {
  const reversedArray = [];
  for (let i = array.length-1; i >= 0; i--) reversedArray.push(array[i]);
  return reversedArray;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
