# fizzBuzz

A program to write 'fizz' or 'buzz' or 'fizzbuzz' based on the multiple of a chosen number.

    - if the number is a multiple of 3 print 'fizz'
    - if the number is a multiple of 5 print 'buzz'
    - if the number is a multiple of both 3 && 5 print 'fizzbuzz'
    - for all other cases print the number.

## Table of Contents

1. [Input](#input)
2. [Output](#output)
3. [Clarifications](#clarifications)
   - Constraints
   - Edge Cases
   - Assumptions
4. [Algorithm](#algorithm)
5. [Time Space Complexity](#time-space-complexity)
6. [Unit Tests](#unit-tests)
7. [Technologies](#technologies)
8. [References](#references)

# Input

    - fizzBuzz(num) where num = 1
    - fizzBuzz(num) where num = 3
    - fizzBuzz(num) where num = 5
    - fizzBuzz(num) where num = 15

# Output

    - if num = 1 print 1
    - if num = 3 print 'fizz'
    - if num = 5 print 'buzz'
    - if num = 15 print 'fizzbuzz'

# Clarifications

Constraints

    - consider cases for only positive integers greater than 0.
    - limit input/output to prevent stack overflow

Edge Cases

    - Negative nubmers,
    - 0,
    - Null,
    - Undefined,
    - Not a Number (NaN),
    - String,
    - Fraction,
    - Argument length,
    - Overflow,
    - Underflow

Assumptions

    - Consider only the cases for numbers greater than 0.

# Algorithm

    Consider following numbers in the number line:

    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

    ----------------------------------------------------->

    Multiples of 3 --> print 'fizz'

    - 3x1 = 3
    - 3x2 = 6
    - 3x3 = 9
    - 3x4 = 12 ...

    Multiples of 5 --> print 'buzz'

    - 5x1 = 5
    - 5x2 = 10
    - 5x4 = 20 ...

    Multiples of 3 && 5 --> print 'fizzbuzz'

    - 15x1 = 15
    - 15x2 = 30
    - 15x3 = 45 ...

    For any other positive numbers just print the same number that are neither multiples of 3 or 5 or both 3 & 5 --> print the same number

    Given a number say 3, we can multiply 3 with any positive integers to get a product.

    - Say 3x2 = 6 (product)
    - This product 6 can be also called multiple of both 3 and 2 since we obtained it by multiplying 3 by 2.
    - So the real point here is how we know that given a number, it is multiple of 3 or 5 or both?
    - Once we know that we are golden.

    - This is where we might have to flip a logic bit. To get a multiple we multiplied. But to know that any given number is a multiple of 3 we simply need to divide it by 3 and if the remainder is 0 then we know it is a multiple.

    - This is also where your knowledge of JavaScript operators comes handy.
    - Divison operator ( / ) yields what the quotient is,
    - i.e 6/2 = 3 but NO information about the remainder is furnished.

    - Modulo Operator on the other hand ( % ) yields what the remaineder is,
    - i.e. 6 % 2 yields 0 remainder which is exactly what we need.

    Let's try couple more number:

    - 12 % 3 --> 3 divides 12 equally into 4 parts leaving remainder 0, therefore 12 is multiple of 3
    - 19 % 3 --> 3 divides 19 into 6 quals parts leaving remainder 1, therefore 19 is not a multiple of 3
    - 15 % 3 --> 3 divides 15 into 5 equal parts leaving remainder 0, also
    - 15 % 5 --> 5 divides 15 into 3 equal parts leaving remainder 0, therefore 15 is a multiple of both 3 && 5.

    ## In summary,

    - Divide any given number by 3. If the remainder is 0 then it is a multiple of 3 therefore print 'fizz'.
    - Divide any given number by 5. If the remainder is 0 then it is a multiple of 5 therfore print 'buzz'.
    - Divide any given number by both 3 && 5. If the remainder is 0 then it is a multiple of both 3 && 5 therefore print 'fizzbuzz'.
    - For all other cases print the number
    - For constraints, edge cases print the message.

    Next, let's implement our algorithms to code.

# Time Space Complexity

    - Time O(n) = ?
    - Space O(n) = ?

# Unit Tests

    1. Consider all the following cases:
    	- Constraints
    	- Edge cases
    	- Regular test cases

    2. To run test cases from this repo:
    	- clone the repo
    	- then cd to the `fizzBuzz` folder
    	- install the dependencies `npm install`
    	- Next, in your terminal window enter following to run all the unit tests.
    	- `npm test`
    	- assumes you've `Node` && `Jest` installed in your machine.

# Technologies

1. [GitHub](https://github.com/rlama7)
2. [Linkedin]()
3. [VS Code]()
4. [Node]()
5. [NPM Packages]()

# References

1. [isInteger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
2. [JavaScript Arithmetic Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators)

# Kewords

JavaScript,
ES6,
JavaScript Interview,
Algorithms,
Datastructures,
Interview Preparation,
Technical Interview,
Coding Challenges,
Programming Challenges,
