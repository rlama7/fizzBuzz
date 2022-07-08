const fizzBuzzIterative = (number) => {
  if (number < 1 || undefined || null) {
    return `Sorry we do not support ${number}. Please try a positive number greater than 0.`;
  } else if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzbuzz';
  } else if (number % 3 === 0) {
    return 'fizz';
  } else if (number % 5 === 0) {
    return 'buzz';
  } else {
    return number;
  }
};

const fizzBuzzRecursive = (number) => {
  // base case
  if (number < 1 || undefined || null) {
    return `Sorry we do not support ${number}. Please try a positive number greater than 0.`;
  } else {
    if (number % 3 === 0 && number % 5 === 0) {
      return 'fizzbuzz';
    } else if (number % 3 === 0) {
      return 'fizz';
    } else if (number % 5 === 0) {
      return 'buzz';
    } else {
      return number;
    }
  }
  return fizzBuzzRecursive(number - 1);
};

//
console.log(fizzBuzzRecursive(30));

module.exports = { fizzBuzzIterative, fizzBuzzRecursive };
