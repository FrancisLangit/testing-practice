import { expect } from "@jest/globals";
import { arrayAnalysis } from "./arrayAnalysis";


test('Object returned by arrayAnalysis function', () => {
    let input = arrayAnalysis([1,8,3,4,2,6]);
    let output = {
        average: 4,
        min: 1,
        max: 8,
        length: 6
    };
    expect(input).toEqual(output);
});