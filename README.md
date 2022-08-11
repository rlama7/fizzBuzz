# fizzBuzz

A program to write 'fizz' or 'buzz' or 'fizzbuzz' based on the multiple of a chosen number.

:bulb: FizzBuzz step by step instructions on [Youtube](https://www.youtube.com/c/Freecodecamp).

    if the number is a multiple of 3 print 'fizz'
    if the number is a multiple of 5 print 'buzz'
    if the number is a multiple of both 3 && 5 print 'fizzbuzz'
    for all other cases print the number.

# Table of Contents

1. [Input](#input)
2. [Output](#output)
3. [Clarifications](#clarifications)
4. [Algorithm](#algorithm)
5. [Time Space Complexity](#time-space-complexity)
6. [Unit Tests](#unit-tests)
7. [Technologies](#technologies)
8. [References](#references)
9. [Social Network](#social-network)
10. [Keywords](#keywords)

# Input

     fizzBuzz(num) where num = 1
     fizzBuzz(num) where num = 3
     fizzBuzz(num) where num = 5
     fizzBuzz(num) where num = 15

# Output

     if num = 1 print 1
     if num = 3 print 'fizz'
     if num = 5 print 'buzz'
     if num = 15 print 'fizzbuzz'

# Clarifications

Constraints

     consider cases for only positive integers greater than 0.
     limit input/output to prevent stack overflow

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

     Consider only the cases for numbers greater than 0.

# Algorithm

    Consider following numbers in the number line:

    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

    ----------------------------------------------------->

    Multiples of 3 --> print 'fizz'

     3x1 = 3
     3x2 = 6
     3x3 = 9
     3x4 = 12 ...

    Multiples of 5 --> print 'buzz'

     5x1 = 5
     5x2 = 10
     5x4 = 20 ...

    Multiples of 3 && 5 --> print 'fizzbuzz'

     15x1 = 15
     15x2 = 30
     15x3 = 45 ...

     For any other positive numbers just print the same number.

     Given a number say 3, we can multiply 3 with any positive integers to get a product.

     Say 3x2 = 6 (product)

     This product 6 can be also called multiple of both 3 and 2 since we obtained it by multiplying
     by 2.
     So the real point here is how we know that given a number, it is multiple of 3 or 5 or both?
     Once we know that we are golden.
     This is where we might have to flip a logic bit.
     To get a multiple we multiplied.
     But to know that any given number is a multiple of 3 we simply need to divide it by 3
     and if the remainder is 0 then we know it is a multiple.
     This is also where your knowledge of JavaScript operators comes handy.

     Divison operator ( / ) yields what the quotient is,
     i.e 6/2 = 3 but NO information about the remainder is furnished.

     Modulo Operator on the other hand ( % ) yields what the remaineder is,
     i.e. 6 % 2 yields 0 remainder which is exactly what we need.

     Let's try couple more number:
     12 % 3 --> 3 divides 12 equally into 4 parts leaving remainder 0, therefore 12 is multiple of 3
     19 % 3 --> 3 divides 19 into 6 quals parts leaving remainder 1, therefore 19 is not a multiple of 3
     15 % 3 --> 3 divides 15 into 5 equal parts leaving remainder 0, also
     15 % 5 --> 5 divides 15 into 3 equal parts leaving remainder 0, therefore 15 is a multiple of both 3 && 5.

     In summary,
     Divide any given number by 3. If the remainder is 0 then it is a multiple of 3 therefore print 'fizz'.
     Divide any given number by 5. If the remainder is 0 then it is a multiple of 5 therfore print 'buzz'.
     Divide any given number by both 3 && 5.
     If the remainder is 0 then it is a multiple of both 3 && 5 therefore print 'fizzbuzz'.
     For all other cases print the number
     For constraints, edge cases print the message.

     Next, let's implement our algorithms to code.

# Time Space Complexity

     Time O(n) = ?
     Space O(n) = ?

# Unit Tests

    1. Consider all the following cases:

    - Constraints
    - Edge cases
    - Regular test cases

    2. To run test cases from this repo:

    - Clone the repo then install dependencies and run the unit tests. Assumes you've Node && Jest installed in your machine.

```
Fork this repo then clone it to your machine

git clone git@github.com:<rlama7>/fizzBuzz.git

cd fizzBuzz

npm install

npm test
```

# Technologies

1. [Edit FizzBuzz with VS Code Online Editor](https://github1s.com/rlama7/fizzBuzz)
2. [Install Node JS](https://nodejs.org/en/)
3. [Jest for Unit Testing](https://jestjs.io/docs/getting-started)

# References

1. [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
2. [isInteger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
3. [JavaScript Arithmetic Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators)

# Social Network

1. [Youtube]()
2. [GitHub FizzBuzz Repo](https://github.com/rlama7/fizzBuzz)
3. [Connect with me on Linkedin](https://www.linkedin.com/in/ratna-lama/)

# Keywords

JavaScript,
ES6,
JavaScript Interview,
Algorithms,
Datastructures,
Interview Preparation,
Technical Interview,
Coding Challenges,
Programming Challenges,
