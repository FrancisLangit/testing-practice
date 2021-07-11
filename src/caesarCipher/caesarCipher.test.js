import { caesarCipher } from './caesarCipher';


test('Caesar cipher of string offset by 1', () => {
    expect(caesarCipher('HELLO!')).toBe('IFMMP!');
});

test('Caesar cipher of alpha-numberic string offset by 13', () => {
    let input = 'The 5 quick brown foxes jump over the 10 lazy dogs.';
    let output = 'ymj 5 vznhp gwtbs ktcjx ozru tajw ymj 10 qfed itlx.';
    expect(caesarCipher(input)).toBe(output);
});