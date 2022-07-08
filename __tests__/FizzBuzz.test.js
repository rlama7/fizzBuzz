const { fizzBuzzIterative, fizzBuzzRecursive } = require('../fizzBuzz');

const fizzBuzzRecursiveCases = [
  [undefined, undefined],
  [
    null,
    'Sorry we do not support null. Please try a positive number greater than 0.',
  ],
  [
    -301,
    'Sorry we do not support -301. Please try a positive number greater than 0.',
  ],
  [
    -30,
    'Sorry we do not support -30. Please try a positive number greater than 0.',
  ],
  [
    0,
    'Sorry we do not support 0. Please try a positive number greater than 0.',
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

describe('\nfizzBuzzIterative Test', () => {
  it('fizzBuzzIterative() function should exists', () => {
    expect(typeof fizzBuzzIterative).toBe('function');
  });
  it('1 should log 1', () => {
    expect(fizzBuzzIterative(1)).toBe(1);
  });
  it('101 should not log fizzbuzz', () => {
    expect(fizzBuzzIterative(101)).toBe(101);
  });
  it('101 should log 101', () => {
    expect(fizzBuzzIterative(101)).toBe(101);
  });
  it('9 should NOT log 9', () => {
    expect(fizzBuzzIterative(9)).toBe('fizz');
  });
  it('multiples of THREE 3x3 = 9 should log  "fizz"', () => {
    expect(fizzBuzzIterative(9)).toBe('fizz');
  });
  it('10 should not log  10', () => {
    expect(fizzBuzzIterative(10)).toBe('buzz');
  });
  it('multiples of FIVE 5x2 = 10 should log  "buzz"', () => {
    expect(fizzBuzzIterative(10)).toBe('buzz');
  });
  it('multiples of both 3x5 = 15 && 5x3 = 15 should log  "fizzbuzz"', () => {
    expect(fizzBuzzIterative(15)).toBe('fizzbuzz');
  });
  it('30 should NOT log  30', () => {
    expect(fizzBuzzIterative(30)).toBe('fizzbuzz');
  });
  it('undefined should log undefined', () => {
    expect(fizzBuzzIterative(undefined)).toBe(undefined);
  });
  it('null should log "Sorry we do not support null. Please try a positive number greater than 0."', () => {
    expect(fizzBuzzIterative(null)).toBe(
      'Sorry we do not support null. Please try a positive number greater than 0.'
    );
  });
  it('0 should log "Sorry we do not support 0. Please try a positive number greater than 0."', () => {
    expect(fizzBuzzIterative(0)).toBe(
      'Sorry we do not support 0. Please try a positive number greater than 0.'
    );
  });
  it('-30 should log "Sorry we do not support -30. Please try a positive number greater than 0."', () => {
    expect(fizzBuzzIterative(-30)).toBe(
      'Sorry we do not support -30. Please try a positive number greater than 0.'
    );
  });
});

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
});
