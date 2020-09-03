// DOM ELEMENTS
const resultEl  = document.getElementById('password');
// const lengthEl  = document.getElementById('length');
// const sliderlengthEl = document.getElementById('sliderlength');
// const lowercaseEl  = document.getElementById('lowercase');
// const uppercaseEl  = document.getElementById('uppercase');
// const numbercaseEl  = document.getElementById('numbers');
// const specialcaseEl  = document.getElementById('specials');
// const emojicaseEl = document.getElementById('emojis');
const generateEl  = document.getElementById('generate');
const generateemojisEl  = document.getElementById('generate');
const clipboardEl  = document.getElementById('clipboard');


// lengthEl.addEventListener("input", syncSlider)
// sliderlengthEl.addEventListener("input", syncSlider)

function syncSlider(e) {
  const value = e.target.value
  lengthEl.value = value
  sliderlengthEl.value = value
}



const randomFunc = {
  lower: getLowerCase,
  upper: getUpperCase,
  number: getNumberCase,
  special: getSpecialCase,
  
};


const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbercase = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialcase = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
const emojicase = ['😀', '👨🏽‍✈️'];

// event listener
generateEl.addEventListener("click", () => {
//   const lengthEl  = prompt("How long do you need this password?");
// // const sliderlengthEl = document.getElementById('sliderlength');
// const lowercaseEl  = confirm("Press OK if you require lower class letters?");
// const uppercaseEl  = confirm("Press OK if you require upper class letters?");
// const numbercaseEl  = confirm("Press OK if you require numbers?");
// const specialcaseEl  = confirm("Press OK if you require special charachters?");

  const length = parseInt(prompt("How long do you need this password?"));
    // if (length < 8 || length > 128 || isNaN(length)) {
  //     parseInt(prompt("please select 8-128"));
  //     escape();
  // }
  const hasLower = confirm("Press OK if you require lower class letters?");
  const hasUpper = confirm("Press OK if you require upper class letters?");
  const hasNumber = confirm("Press OK if you require numbers?");
  const hasSpecial = confirm("Press OK if you require special charachters?");
if (hasLower === false && hasUpper === false && hasNumber === false && hasSpecial === false) {
    console.log("Invalid boolean selection to create password");
    alert("Not enough details to create password ☹ Please try again");
}
if (length < 8 || length > 128 || isNaN(length)) {
  console.log("Invalid length selection to create password");
  alert("Password length invalid, must be 8 to 128 digits long ☹ Please try again");
}


  resultEl.innerText = generatepassword(
    hasLower, 
    hasUpper, 
    hasNumber, 
    hasSpecial, 
    length
    );
});

// generateEl.addEventListener("click", () => {
// const hasEmoji = emojicaseEl.checked;

// resultEl.innerText = generatepassword(
//   hasEmoji
// );


// Generate Password
function generatepassword(lower, upper, number, special, length) {

  let generatedPassword = "";

  const typesCount = lower + upper + number + special;

  console.log("typesCount " + typesCount);

  const typesArr = [{lower}, {upper}, {number}, {special}].filter
  (item => Object.values(item)[0]
  );

  console.log("typesArr" + typesArr);

  if(typesCount === 0) {
    return "";
  }

  if (length < 8 || length > 128 || isNaN(length)) {
    return "";
  }



for(let i = 0; i < length; i += typesCount)
  typesArr.forEach(type => {
    const funcName = Object.keys(type)[0]
    // console.log("funcname: " + funcName)
    generatedPassword += randomFunc[funcName]()  
  });

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}




function getLowerCase() {
  return lowercase[Math.floor(Math.random() * lowercase.length)];
}

function getUpperCase() {
  return uppercase[Math.floor(Math.random() * uppercase.length)];
}

function getNumberCase() {
  return numbercase[Math.floor(Math.random() * numbercase.length)];
}

function getSpecialCase() {
  return specialcase[Math.floor(Math.random() * specialcase.length)];
}

// function getEmojiCase() {
//   return emojicase[Math.floor(Math.random() * emojicase.length)];
// }


console.log(getLowerCase());
console.log(getUpperCase());
console.log(getNumberCase());
console.log(getSpecialCase());
// console.log(getEmojiCase());














// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
