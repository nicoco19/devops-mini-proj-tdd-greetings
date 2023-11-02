const greet = require('./app');

test('print name', () => {
    const result = greet('Bob');
    expect(result).toBe('Hello, Bob.');
});

test('check name empty', () => {
    const result = greet('');
    expect(result).toBe('Hello, my friend.');
});

test('check name null', () => {
    const result = greet(null);
    expect(result).toBe('Hello, my friend.');
});

test('check name undefined', () => {
    const result = greet(undefined);
    expect(result).toBe('Hello, my friend.');
});