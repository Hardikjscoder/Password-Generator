// =========================== Functions ===========================
import {
  generatePasswordLowerCase,
  generatePasswordUpperCase,
  generatePasswordNumbers,
  generatePasswordSymbols,
  shuffleArrAndGeneratePassword,
  copyPasswordToClipboard,
} from "./functions.js";

// Selectors
const password = document.getElementById("password");
const lengthBar = document.getElementById("lengthBar");
const uppercaseCheckBox = document.getElementById("uppercaseCheck");
const numbersCheckBox = document.getElementById("numbersCheck");
const symbolsCheckBox = document.getElementById("symbolsCheck");

// Initial Variables
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = lowercase.toUpperCase();
const numbers = "0123456789";
const symbols = '~!@#$%^&*()_+{}":?><;.,';

// Show the password
document.getElementById("generateBtn").onclick = function () {
  password.style.display = "block";
  document.getElementById("copyBtn").style.display = "block";
  document.getElementById("generateBtn").style.display = "none";
  if (password.textContent.length === 0) {
    main();
  }
};

// Call copy function
document
  .getElementById("copyBtn")
  .addEventListener("click", copyPasswordToClipboard);

// Event on the length bar
lengthBar.addEventListener("input", main);

// =========================== Main ===========================
function main() {
  document.getElementById("lengthText").textContent = lengthBar.value;

  generatePasswordLowerCase();
  if (uppercaseCheckBox.checked) generatePasswordUpperCase();
  if (numbersCheckBox.checked) generatePasswordNumbers();
  if (symbolsCheckBox.checked) generatePasswordSymbols();

  if (uppercaseCheckBox.checked && numbersCheckBox.checked) {
    const str = lowercase.concat(uppercase, numbers);
    shuffleArrAndGeneratePassword(str);
  }
  if (uppercaseCheckBox.checked && symbolsCheckBox.checked) {
    const str = lowercase.concat(uppercase, symbols);
    shuffleArrAndGeneratePassword(str);
  }
  if (numbersCheckBox.checked && symbolsCheckBox.checked) {
    const str = lowercase.concat(numbers, symbols);
    shuffleArrAndGeneratePassword(str);
  }
  if (
    uppercaseCheckBox.checked &&
    numbersCheckBox.checked &&
    symbolsCheckBox.checked
  ) {
    const str = lowercase.concat(uppercase, numbers, symbols);
    shuffleArrAndGeneratePassword(str);
  }
}
