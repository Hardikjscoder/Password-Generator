const password = document.getElementById("password");
const lengthBar = document.getElementById("lengthBar");
const uppercaseCheckBox = document.getElementById("uppercaseCheck");
const numbersCheckBox = document.getElementById("numbersCheck");
const symbolsCheckBox = document.getElementById("symbolsCheck");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = lowercase.toUpperCase();
const numbers = "0123456789";
const symbols = '~!@#$%^&*()_+{}":?><;.,';

document.getElementById("generateBtn").onclick = function () {
  password.style.display = "block";
  document.getElementById("generateBtn").style.display = "none";
  if (password.textContent.length === 0) {
    generatePassword();
  }
};

const generatePassword = () => {
  document.getElementById("lengthText").textContent = lengthBar.value;
  // Generate password for lowercase
  generatePasswordLowerCase();

  // Generate password when uppercase checkbox is checked
  if (uppercaseCheckBox.checked) generatePasswordUpperCase();

  // Generate password when numbers checkbox is checked
  if (numbersCheckBox.checked) generatePasswordNumbers();

  // Generate password when symbols checkbox is checked
  if (symbolsCheckBox.checked) generatePasswordSymbols();

  // Generate password when uppercase and numbers is checked
  if (uppercaseCheckBox.checked && numbersCheckBox.checked) {
    const upperLowerCaseString = lowercase.concat(uppercase);
    const numUpLowString = upperLowerCaseString.concat(numbers);
    let numUpperLowerArr = numUpLowString.split("");

    for (let i = numUpperLowerArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = numUpperLowerArr[i];
      numUpperLowerArr[i] = numUpperLowerArr[j];
      numUpperLowerArr[j] = temp;
    }

    let newNumUpperLowerStringCase = numUpperLowerArr.join("");

    let randomGeneratedPassword = newNumUpperLowerStringCase.substring(
      Math.floor(Math.random() * numUpperLowerArr),
      lengthBar.value
    );
    password.textContent = randomGeneratedPassword;
  }

  // Generate password when uppercase and symbols is checked
  if (uppercaseCheckBox.checked && symbolsCheckBox.checked) {
    const upperLowerCaseString = lowercase.concat(uppercase);
    const symUpLowString = upperLowerCaseString.concat(symbols);
    let symUpperLowerArr = symUpLowString.split("");

    for (let i = symUpperLowerArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = symUpperLowerArr[i];
      symUpperLowerArr[i] = symUpperLowerArr[j];
      symUpperLowerArr[j] = temp;
    }

    let newSymUpperLowerStringCase = symUpperLowerArr.join("");

    let randomGeneratedPassword = newSymUpperLowerStringCase.substring(
      Math.floor(Math.random() * symUpperLowerArr),
      lengthBar.value
    );
    password.textContent = randomGeneratedPassword;
  }

  // Generate password when numbers and symbols is checked
  if (numbersCheckBox.checked && symbolsCheckBox.checked) {
    const numLowerCaseString = lowercase.concat(numbers);
    const symNumLowString = numLowerCaseString.concat(symbols);
    let symNumLowerArr = symNumLowString.split("");
    for (let i = symNumLowerArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = symNumLowerArr[i];
      symNumLowerArr[i] = symNumLowerArr[j];
      symNumLowerArr[j] = temp;
    }
    let newSymNumLowerStringCase = symNumLowerArr.join("");
    let randomGeneratedPassword = newSymNumLowerStringCase.substring(
      Math.floor(Math.random() * symNumLowerArr),
      lengthBar.value
    );
    password.textContent = randomGeneratedPassword;
  }

  // Generate password when uppercase, numbers and symbols is checked
  if (
    uppercaseCheckBox.checked &&
    numbersCheckBox.checked &&
    symbolsCheckBox.checked
  ) {
    const upLowString = lowercase.concat(uppercase);
    const numUpLowerCaseString = upLowString.concat(numbers);
    const symNumUpLowString = numUpLowerCaseString.concat(symbols);
    let symNumUpLowerArr = symNumUpLowString.split("");

    for (let i = symNumUpLowerArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = symNumUpLowerArr[i];
      symNumUpLowerArr[i] = symNumUpLowerArr[j];
      symNumUpLowerArr[j] = temp;
    }

    let newSymNumUpLowerStringCase = symNumUpLowerArr.join("");

    let randomGeneratedPassword = newSymNumUpLowerStringCase.substring(
      Math.floor(Math.random() * symNumUpLowerArr),
      lengthBar.value
    );
    password.textContent = randomGeneratedPassword;
  }
};

const generatePasswordLowerCase = () => {
  let lowercaseArr = lowercase.split("");

  for (let i = lowercaseArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = lowercaseArr[i];
    lowercaseArr[i] = lowercaseArr[j];
    lowercaseArr[j] = temp;
  }

  let newLowerCase = lowercaseArr.join("");

  let randomGeneratedPassword = newLowerCase.substring(
    Math.floor(Math.random() * lowercaseArr),
    lengthBar.value
  );
  password.textContent = randomGeneratedPassword;
};

const generatePasswordUpperCase = () => {
  const upperLowerCaseString = lowercase.concat(uppercase);
  let upperLowerArr = upperLowerCaseString.split("");

  for (let i = upperLowerArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = upperLowerArr[i];
    upperLowerArr[i] = upperLowerArr[j];
    upperLowerArr[j] = temp;
  }

  let newUpperLowerStringCase = upperLowerArr.join("");

  let randomGeneratedPassword = newUpperLowerStringCase.substring(
    Math.floor(Math.random() * upperLowerArr),
    lengthBar.value
  );
  password.textContent = randomGeneratedPassword;
};

const generatePasswordNumbers = () => {
  const numLowerString = lowercase.concat(numbers);
  let numLowerArr = numLowerString.split("");

  for (let i = numLowerArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = numLowerArr[i];
    numLowerArr[i] = numLowerArr[j];
    numLowerArr[j] = temp;
  }

  let newNumLowerString = numLowerArr.join("");

  let randomGeneratedPassword = newNumLowerString.substring(
    Math.floor(Math.random() * numLowerArr),
    lengthBar.value
  );
  password.textContent = randomGeneratedPassword;
};

const generatePasswordSymbols = () => {
  const symbolLowerString = lowercase.concat(symbols);
  let symbolLowArr = symbolLowerString.split("");

  for (let i = symbolLowArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = symbolLowArr[i];
    symbolLowArr[i] = symbolLowArr[j];
    symbolLowArr[j] = temp;
  }

  let newSymbolLowString = symbolLowArr.join("");

  let randomGeneratedPassword = newSymbolLowString.substring(
    Math.floor(Math.random() * symbolLowArr),
    lengthBar.value
  );
  password.textContent = randomGeneratedPassword;
};

lengthBar.addEventListener("input", generatePassword);
