# fizzBuzz

A program to write fizzbuzz based on the multiple of a chosen number.

    - if the number is a multiple of 3 print 'fizz'
    - if the number is a multiple of 5 print 'buzz'
    - if the number is a multiple of both 3 && 5 print 'fizzbuzz'
    - for all other cases print the number.

# Input

    - fizzBuzz(num) where num = 15

# Output

    - if num = 1 print 1
    - if num = 3 print 'fizz'
    - if num = 5 print 'buzz'
    - if num = 15 print 'fizzbuzz'

# Clarifications

## 1. Constraints

    - consider cases for only positive integers greater than 0.
    - limit input/output to prevent stack overflow

## 2. Edge Cases

    - Negative nubmers,
    - 0,
    - Null,
    - Undefined,
    - Not a Number (NaN),
    - String,
    - Argument length,
    - Overflow,
    - Underflow

## 3. Assumptions made

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

- In our case 6/2 = 3 remainder is 0, Yes multiple of 3
- Let's try couple more number 12/3 = 4 remainder is 0, Yes multiple of 3
- how about 19/3 = 6 remainder is 1 not a multiple of 3

- Therefore we can divide any given number by 3. If the remainder is 0 then it is a multiple of 3
- Similarly we can divide any given number by 5 and if the remainder is 0 then it is a multiple of 5
- And if a number is divisible by both 3 && 5 then that number is a multiple of both 3 && 5.

- Next, let's implement our algorithms to code.

# Time Complexity

    - Time O(n) = ?
    - Space O(n) = ?

# Unit Tests

    - 1. Consider all the following cases:
    	- Constraints
    	- Edge cases
    	- Regular test cases
    - 2. To run test cases from this repo:
    	- clone the repo
    	- then cd to the `fizzBuzz` folder
    	- install the dependencies `npm install`
    	- Next, in your terminal window enter following to run all the unit tests.
    	- `npm test`
    	- assumes you've `Node` && `Jest` installed in your machine.

# Technologies

- 1.  GitHub
- 2.  Linkedin
- 3.  VS Code
- 4.  Node
- 5.  NPM Packages

# Kewords

    "JavaScript",
    "ES6",
    "JavaScript",
    "Interview",
    "Algorithms",
    "Datastructures",
    "Interview",
    "Preparation",
    "Technical",
    "Interview"

# References
