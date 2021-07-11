import { reverseString } from './reverseString';


test('Reverse string "foo 𝌆 bar mañana mañana"', () => {
    let string = 'foo 𝌆 bar mañana mañana';
    let reversedString = 'anañam anañam rab 𝌆 oof'
    expect(reverseString(string)).toBe(reversedString);
});