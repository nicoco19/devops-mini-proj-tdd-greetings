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
    const result = greet(['Jill', 'Jane']);
    expect(result).toBe('Hello, Jill and Jane.');
});

test('check triple name', () => {
    const result = greet(['Amy', 'Brian', 'Charlotte']);
    expect(result).toBe('Hello, Amy, Brian and Charlotte.');
});

test('check mutiple names upper and lower case', () => {
    const result = greet(['Amy', 'BRIAN', 'Charlotte']);
    expect(result).toBe('Hello, Amy and Charlotte. AND HELLO BRIAN!');
});

test('check mutiple names upper and lower case', () => {
    const result = greet(['Amy', 'BRIAN', 'Charlotte', 'ALEXIS']);
    expect(result).toBe('Hello, Amy and Charlotte. AND HELLO BRIAN, ALEXIS!');
});

test('check multiple language name fr (Lower)', () => { 
    const result = greet(['Kratos', 'Thanatos','fr']);
    expect(result).toBe('Bonjour, Kratos et Thanatos.');
});

test('check multiple language name nl (Lower)', () => { 
    const result = greet(['Kratos', 'Thanatos','nl']);
    expect(result).toBe('Goeiedag, Kratos en Thanatos.');
});

test('check multiple language name en (lower)', () => { 
    const result = greet(['Kratos', 'Thanatos','en']);
    expect(result).toBe('Hello, Kratos and Thanatos.');
});

test('check multiple language name fr (lower and UpperCase)', () =>{
    const result = greet (['Kratos', 'THANATOS', 'fr']);
    expect(result).toBe('Bonjour, Kratos. ET BONJOUR THANATOS!');
});
