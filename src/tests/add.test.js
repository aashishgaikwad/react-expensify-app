const add = (a, b) => a + b;

test('addNumbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});