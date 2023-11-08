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

test('check double name', () => {
    const result = greet(["Jill", "Jane"]);
    expect(result).toBe('Hello, Jill and Jane.');
});

test('check triple name', () => {
    const result = greet(["Amy", "Brian", "Charlotte"]);
    expect(result).toBe('Hello, Amy, Brian and Charlotte.');
});

test('check mutiple names upper and lower case', () => {
    const result = greet(["Amy", "BRIAN", "Charlotte"]);
    expect(result).toBe('Hello, Amy and Charlotte. AND HELLO BRIAN !');
});