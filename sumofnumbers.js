function sumFor(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

console.log(sumFor([1, 2, 3]));

function sumWhile(numbers) {
  let count = 0;
  let sum = 0;
  while (count < numbers.length) {
    sum += numbers[count];
    count++;
  }
  return sum;
}

console.log(sumWhile([1, 2, 3, 4]));

function sumRecursion(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers[0] + sumRecursion(numbers.slice(1, numbers.length));
}

console.log(sumRecursion([1, 2, 3, 4]));

function sumTheSimpleWay(numbers) {
  return _.reduce(numbers, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay([1, 2, 3, 4]));
