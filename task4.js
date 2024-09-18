function charCounter(array) {
  let sum = 0;
  array.forEach((element) => {
    sum += element.length;
  });
  return sum;
}
console.log(charCounter(["a", "ab", "abc","a"]));
