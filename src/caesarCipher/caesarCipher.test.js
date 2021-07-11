import { caesarCipher } from './caesarCipher';


test('Caesar cipher of string offset by 1', () => {
    expect(caesarCipher('HELLO!', 1)).toBe('IFMMP!');
});

test('Caesar cipher of alpha-numberic string offset by 13', () => {
    let input = 'The 5 quick brown foxes jump over the 10 lazy dogs.';
    let output = 'Gur 5 dhvpx oebja sbkrf whzc bire gur 10 ynml qbtf.';
    expect(caesarCipher(input, 13)).toBe(output);
});