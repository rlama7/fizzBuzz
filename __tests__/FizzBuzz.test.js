const { fizzBuzzIterative, fizzBuzzRecursive } = require('../fizzBuzz');

describe('fizzBuzzIterative Test', () => {
  it('fizzBuzzIterative function should exists', () => {
    expect(typeof fizzBuzzIterative).toBe('function');
  });
  it('adds 1+2 to equal 3', () => {
    expect(fizzBuzzIterative(1, 2)).toBe(3);
  });
});

describe('fizzBuzzRecursive Test', () => {
  it('fizzBuzzRecursive function should exists', () => {
    expect(typeof fizzBuzzRecursive).toBe('function');
  });
  it('adds 5 - 4 to equal 1', () => {
    expect(fizzBuzzRecursive(5, 4)).toBe(1);
  });
});
