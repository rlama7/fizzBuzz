const fizzBuzzIterative = (num) => {
  // constraints/edge cases
  // console.log(` arguments length is: ${arguments.length}`);
  // console.log(` function length is: ${fizzBuzzIterative.length}`);
  if (typeof num !== 'number' || num < 1) {
    // if (number < 1 || undefined || null)
    return `Sorry we do not support ${num}. Please try a positive integer number greater than 0.`;
  } else if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else {
    return num;
  }
};

// console.log(fizzBuzzIterative(undefined));

const fizzBuzzRecursive = (num) => {
  if (typeof num !== 'number' || num < 1) {
    return `Sorry we do not support ${num}. Please try a positive integer number greater than 0.`;
  }
  // base case + edge cases
  //   if (num < 1 || undefined || null) {
  //     return `Sorry we do not support ${num}. Please try a positive integer number greater than 0.`;
  else {
    if (num % 3 === 0 && num % 5 === 0) {
      return 'fizzbuzz';
    } else if (num % 3 === 0) {
      return 'fizz';
    } else if (num % 5 === 0) {
      return 'buzz';
    } else {
      return num;
    }
  }
  fizzBuzzRecursive(num + 1);
};

// console.log(fizzBuzzRecursive('Hello'));

module.exports = { fizzBuzzIterative, fizzBuzzRecursive };
