import { capitalize } from './capitalize';

test('Capitalize first letter in string "slim shady"', () => {
    expect(capitalize("slim shady")).toBe("Slim shady");
});