// Selectors
const password = document.getElementById("password");
const lengthBar = document.getElementById("lengthBar");

// Initial Variables
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = lowercase.toUpperCase();
const numbers = "0123456789";
const symbols = '~!@#$%^&*()_+{}":?><;.,';

// Function to shuffle (randomly sort) an array's elements
const shuffleArr = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
};

// Function to generate random password for the given string and arr passed as arguments
const generateRandomPassword = (str, arr) => {
  let randomGeneratedPassword = str.substring(
    Math.floor(Math.random() * arr),
    lengthBar.value
  );
  password.textContent = randomGeneratedPassword;
};

// Function to generate password for lowercase
const generatePasswordLowerCase = () => {
  let lowercaseArr = lowercase.split("");
  shuffleArr(lowercaseArr);
  let newLowerCase = lowercaseArr.join("");
  generateRandomPassword(newLowerCase, lowercaseArr);
};

// Function to generate password for uppercase
const generatePasswordUpperCase = () => {
  const upperLowerCaseString = lowercase.concat(uppercase);
  let upperLowerArr = upperLowerCaseString.split("");
  shuffleArr(upperLowerArr);
  let newUpperLowerStringCase = upperLowerArr.join("");
  generateRandomPassword(newUpperLowerStringCase, upperLowerArr);
};

// Function to generate password for numbers
const generatePasswordNumbers = () => {
  const numLowerString = lowercase.concat(numbers);
  let numLowerArr = numLowerString.split("");
  shuffleArr(numLowerArr);
  let newNumLowerString = numLowerArr.join("");
  generateRandomPassword(newNumLowerString, numLowerArr);
};

// Function to generate password for symbols
const generatePasswordSymbols = () => {
  const symbolLowerString = lowercase.concat(symbols);
  let symbolLowArr = symbolLowerString.split("");
  shuffleArr(symbolLowArr);
  let newSymbolLowString = symbolLowArr.join("");
  generateRandomPassword(newSymbolLowString, symbolLowArr);
};

export {
  shuffleArr,
  generateRandomPassword,
  generatePasswordLowerCase,
  generatePasswordUpperCase,
  generatePasswordNumbers,
  generatePasswordSymbols,
};
