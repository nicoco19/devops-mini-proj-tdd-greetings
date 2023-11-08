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

test('check upper name', () => {
    const result = greet('JERRY');
    expect(result).toBe('HELLO, JERRY!');
});

test('chek double name', () => {
    const result = greet(["Jill", "Jane"]);
    expect(result).toBe('Hello, Jill and Jane.');
});