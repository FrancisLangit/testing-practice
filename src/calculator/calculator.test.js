import { calculator } from './calculator';


test('Add two positive integers', () => {
    expect(calculator.add(2, 1)).toBe(3);
});

test('Add two negative integers', () => {
    expect(calculator.add(-2, -1)).toBe(-3);
});

test('Add positive integer to negative integer', () => {
    expect(calculator.add(-2, 1)).toBe(-1);
});

test('Subtract two positive integers', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
});

test('Subtract two negative integers', () => {
    expect(calculator.subtract(-2, -1)).toBe(-1);
});

test('Subtract negative integer with positive integer', () => {
    expect(calculator.subtract(-2, 1)).toBe(-3);
});

test('Multiply two positive integers', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
});

test('Multiply two negative integers', () => {
    expect(calculator.multiply(-2, -2)).toBe(4);
});

test('Multiply negative integer with positive integer', () => {
    expect(calculator.multiply(-2, 2)).toBe(-4);
});

test('Divide two positive integers', () => {
    expect(calculator.divide(4, 2)).toBe(2);
});

test('Divide two negative integers', () => {
    expect(calculator.divide(-4, -2)).toBe(2);
});

test('Divide negative integer with positive integer', () => {
    expect(calculator.divide(-4, 2)).toBe(-2);
});

test('Divide integer by 0', () => {
    expect(calculator.divide(1, 0)).toBe(Infinity);
});

test('Divide 0 by an integer', () => {
    expect(calculator.divide(0, 1)).toBe(0);
});