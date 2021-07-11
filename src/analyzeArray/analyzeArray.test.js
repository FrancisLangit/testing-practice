import { analyzeArray } from "./analyzeArray";


test('Object returned by analyzeArray function', () => {
    let input = analyzeArray([1,8,3,4,2,6]);
    let output = {
        average: 4,
        min: 1,
        max: 8,
        length: 6
    };
    expect(input).toEqual(output);
});