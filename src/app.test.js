const greet = require('./app');

test('print name', () => {
    const result = greet('Bob');
    expect(result).toBe('Hello, Bob.');
});
