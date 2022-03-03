//create variable keys that has four strings for the criteria
const keys = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  special: "!@#$%^&*()_+~\`|}{[]:;?><,./-="
}
console.log("uppercase: ", keys.uppercase, "length: ", keys.uppercase.length);
console.log("lowercase: ", keys.lowercase, "length: ", keys.lowercase.length);
console.log("number: ", keys.number, "length: ", keys.number.length);
console.log("specialcharacters: ", keys.special, "length: ", keys.special.length);

// Create a variable getKey and assign it an array of functions that grab random characters from each string
const getKey = [
  function uppercase() {
  return keys.uppercase[Math.floor(Math.random() * keys.uppercase.length)];
  },
  function lowercase() {
    return keys.lowercase[Math.floor(Math.random() * keys.lowercase.length)];
  },
  function number() {
    return keys.number[Math.floor(Math.random() * keys.number.length)];
  },
  function specialcharacters() {
    return keys.special[Math.floor(Math.random() * keys.special.length)];
  }
];

// log the array getKey to the console
console.log(getKey)

//create  a function to generate password
function genpassword() {
 // grab the length the user inputted and the paragraph for the password
  const passwordbox = document.getElementById("passwordbox");
  const length = document.getElementById("length");
  //set password to be blank
  let password = "";
  //while the length value is greater than password length add random characters to password
  while (length.value > password.length) {
    let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
    console.log(keyToAdd);

    let isChecked = document.getElementById(keyToAdd.name).checked;
    // if criteria is checked then it adds to password
    if (isChecked) {
      password = password + keyToAdd();
    }
    console.log(isChecked);
  }

  // displays the password 
  passwordbox.innerHTML = password;
  console.log(password);
}
