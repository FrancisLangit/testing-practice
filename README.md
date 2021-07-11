# testing-practice

`testing-practice` is an official submission to [The Odin Project's "Testing Practice" project](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/testing-practice). It features the utilization of Facebook's open-source [Jest](https://jestjs.io/) testing framework in the test-driven development of a variety of different modules.

## Installation

1. Clone the repository with `git clone https://github.com/FrancisLangit/testing-practice` or download it as a `.zip` file.
2. Navigate to where the repository is saved on your local machine on your command line.
3. Use [`npm install`](https://docs.npmjs.com/cli/v7/commands/npm-install) to install the application's dependencies.

## Usage

`testing-practice` features five different folders within its `src/` directory. Each holds a `.js` module exporting a particular object or function.

| `src/` Folder    | Description of `.js` File                                    |
| ---------------- | ------------------------------------------------------------ |
| `analyzeArray/`  | `analyzeArray.js` exports function that takes an array of numbers and returns an object with the average, min, max, and length of numbers in such array. |
| `caesarCipher/`  | `caesarCipher.js` exports function that encrypts a string using a Caesar Cipher. |
| `calculator/`    | `calculator.js` exports object holding functions that can add, subtract, multiple, or divide two integers. |
| `capitalize/`    | `capitalize.js` exports function that returns a string with its first character capitalized. |
| `reverseString/` | `reverseString.js` exports function that returns a reversed version of the string passed to it.the |

Within each `src/` folder also resides a `.test.js` file holding [Jest](https://jestjs.io/) test cases that aim to check the functionality of the `.js` file that the `.test.js` file accompanies.

To run the test cases, enter `npm run test` on a command line while in `testing-case`.

## Contributing

Feel free to submit an issue should a bug be found when using the repository. One is also welcome to forward a pull request should they  seek to introduce a change.

## License

[MIT License](https://github.com/FrancisLangit/testing-practice/blob/main/LICENSE)

