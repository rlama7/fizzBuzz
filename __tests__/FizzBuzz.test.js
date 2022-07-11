const { fizzBuzzIterative, fizzBuzzRecursive } = require('../fizzBuzz');

const fizzBuzzRecursiveCases = [
  [
    'Hello',
    'Sorry we do not support Hello. Please try a positive integer number greater than 0.',
  ],
  [
    undefined,
    'Sorry we do not support undefined. Please try a positive integer number greater than 0.',
  ],
  [
    null,
    'Sorry we do not support null. Please try a positive integer number greater than 0.',
  ],
  [
    -30,
    'Sorry we do not support -30. Please try a positive integer number greater than 0.',
  ],
  [
    0,
    'Sorry we do not support 0. Please try a positive integer number greater than 0.',
  ],
  [1, 1],
  [2, 2],
  [3, 'fizz'],
  [4, 4],
  [5, 'buzz'],
  [6, 'fizz'],
  [7, 7],
  [8, 8],
  [9, 'fizz'],
  [10, 'buzz'],
  [11, 11],
  [12, 'fizz'],
  [13, 13],
  [14, 14],
  [15, 'fizzbuzz'],
];

// fizzBuzz Iterative Version Test
describe('\nfizzBuzzIterative Test', () => {
  it('fizzBuzzIterative() function exists', () => {
    expect(typeof fizzBuzzIterative).toBe('function');
  });
  it('fizzBuzzIterative() expects exactly 1 argument', () => {
    expect(fizzBuzzIterative.length).toBe(1);
  });
  it('1 should log 1', () => {
    expect(fizzBuzzIterative(1)).toBe(1);
  });
  it('9 should NOT log 9', () => {
    expect(fizzBuzzIterative(9)).not.toBe(9);
  });
  it('multiples of THREE 3x3 = 9 should match "fizz"', () => {
    expect(fizzBuzzIterative(9)).toMatch(/fizz/);
  });
  it('10 should not log  10', () => {
    expect(fizzBuzzIterative(10)).not.toBe(10);
  });
  it('multiples of FIVE 5x2 = 10 should match "buzz"', () => {
    expect(fizzBuzzIterative(10)).toMatch(/buzz/);
  });
  it('multiples of both 3x5 = 15 && 5x3 = 15 should match  "fizzbuzz"', () => {
    expect(fizzBuzzIterative(15)).toMatch(/fizzbuzz/);
  });
  it('30 should NOT log  30', () => {
    expect(fizzBuzzIterative(30)).not.toBe(30);
  });
  it('undefined should log "Sorry we do not support undefined. Please try a positive integer number greater than 0"', () => {
    expect(fizzBuzzIterative(undefined)).toMatch(
      /Sorry we do not support undefined. Please try a positive integer number greater than 0./
    );
  });
  it('null should log "Sorry we do not support null. Please try a positive integer number greater than 0."', () => {
    expect(fizzBuzzIterative(null)).toMatch(
      /Sorry we do not support null. Please try a positive integer number greater than 0./
    );
  });
  it('0 should log "Sorry we do not support 0. Please try a positive integer number greater than 0."', () => {
    expect(fizzBuzzIterative(0)).toMatch(
      /Sorry we do not support 0. Please try a positive integer number greater than 0./
    );
  });
  it('-30 should log "Sorry we do not support -30. Please try a positive integer number greater than 0."', () => {
    expect(fizzBuzzIterative(-30)).toMatch(
      /Sorry we do not support -30. Please try a positive integer number greater than 0./
    );
  });
});

// fizzBuzz Recursive Version Test
describe('\nfizzBuzzRecursive Test', () => {
  test.each(fizzBuzzRecursiveCases)(
    'given %p as argument returns %p',
    (firstArg, expectedResult) => {
      const actual = fizzBuzzRecursive(firstArg);
      expect(actual).toBe(expectedResult);
    }
  );
  it('fizzBuzzRecursive() function should exists', () => {
    expect(typeof fizzBuzzRecursive).toBe('function');
  });
  it('fizzBuzzRecursive() function expects exactly 1 argument', () => {
    expect(fizzBuzzRecursive.length).toBe(1);
  });
});
