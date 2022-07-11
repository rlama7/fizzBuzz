/**
 * fizzBuzz.js		- A program that prints the number from 1 to n. Then prints 'fizzbuzz' based on
 * 					        whether or not a number is a multiple of a certain number.
 * @author			  - Ratna Lama
 * @version			  - 1.0.0
 * @description		- Given a positive integer as an input print:
 * 					        If a number is a multiple of three print 'fizz'.
 * 					        If a number is a multiple of five print 'buzz'.
 * 					        If a number is a multiple of both three and five print 'fizzbuzz'.
 *
 * @param {*} num positive integer input
 * @returns either positive integer || 'fizz' || 'buzz' || 'fizzbuzz'
 *
 * Input:
 * 		fizzBuzz(n) where n = 15
 * Output:
 * 		1, 2, (fizz), 4, (buzz), (fizz), 7, 8, (fizz), (buzz), 11, (fizz), 13, 14, fizzbuzz
 * Constraints/Edge Case:
 * 		What should the output be if input
 * 		n = 0 ? || n = -15 || n = 3.75 || n = null || n == undefined || n = string
 * 		Should we only consider positive integer numbers (n > 0) for this demonstration?
 * Assumptions if any:
 * 		Test
 * Algorithm:
 * 		 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
 *           ^     ^^ ^        ^  ^^       ^          ^^^
 * 		Multiples of 3 (^) --> print 'fizz'
 * 		3x1 = 3
 * 		3x2 = 6
 * 		3x3 = 9 ...
 *
 * 		Multiples of 5 (^^) --> print 'buzz'
 * 		5x1 = 5
 * 		5x2 = 10
 * 		5x3 = 15 ...
 *
 * 		Multiples of 3 && 5 = 15 (^^^) --> print 'fizzbuzz'
 * 		15x1 = 15
 * 		15x2 = 30
 * 		15x3 = 45 ...
 *
 * Given a number say 3, we can multiply 3 with any positive integers to get a product.
 * Say 3x2 = 6 (product)
 * This product 6 can be called multiple of both  3 & 2since we obtained it by multiplying 3 by 2.
 * So the real point here is how we know that given a number, it is multiple of 3 or 5 or both?
 * Once we know that we are golden.
 *
 * This is where we might have to flip a logic bit. To get a multiple we multiplied. But to
 * know that any given number is a multiple of 3 we simply need to divide it by 3 and if the
 * remainder is 0 then we know it is a multiple.
 *
 * In our case 6/2 = 3 remainder is 0, Yes multiple of 3
 * Let's try couple more number 12/3 = 4 remainder is 0, Yes multiple of 3
 * how about 19/3 = 6 remainder is 1 not a multiple of 3
 *
 * Therefore we can divide any given number by 3. If the remainder is 0 then it is a multiple of 3
 * Similarly we can divide any given number by 5 and if the remainder is 0 then it is a multiple of 5
 * And if a number is divisible by both 3 && 5 then that number is a multiple of both 3 && 5.
 *
 * Next, let's implement our algorithms to code.
 *
 * Time Complexity:
 * 		- Time O(n) = ?
 * 		- Space O(n) = ?
 * Unit Tests:
 *    - Cosider all the test cases for constraints/edge cases and regular tests
 */

const fizzBuzzIterative = (num) => {
  if (typeof num !== 'number' || num < 1) {
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

const fizzBuzzRecursive = (num) => {
  if (typeof num !== 'number' || num < 1) {
    return `Sorry we do not support ${num}. Please try a positive integer number greater than 0.`;
  } else {
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

module.exports = { fizzBuzzIterative, fizzBuzzRecursive };
