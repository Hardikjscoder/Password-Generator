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

// Function that takes a string convered to array, shuffles it and generates random password
const shuffleArrAndGeneratePassword = (str) => {
  let arr = str.split("");
  shuffleArr(arr);
  let newStr = arr.join("");
  generateRandomPassword(newStr, arr);
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

// Function to copy the password
const copyPasswordToClipboard = () => {
  let text = password.textContent;
  let input = document.createElement("input");
  input.setAttribute("value", text);
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  input.parentNode.removeChild(input);
  document.querySelector(".alert").style.opacity = 1;
  setTimeout(() => {
    document.querySelector(".alert").style.opacity = 0;
  }, 2000);
};

export {
  generatePasswordLowerCase,
  generatePasswordUpperCase,
  generatePasswordNumbers,
  generatePasswordSymbols,
  shuffleArrAndGeneratePassword,
  copyPasswordToClipboard,
};
