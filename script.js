const keys = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  specialcharacters: "!@#$%^&*()_+~\`|}{[]:;?><,./-="
}
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
    return keys.specialcharacters[Math.floor(Math.random() * keys.specialcharacters.length)];
  }
];

function genpassword() {
  const upper = document.getElementById("uppercase");
  const lower = document.getElementById("lowercase");
  
  const number = document.getElementById("number");
  const specialcharacters = document.getElementById("specialcharacters");
  if (upper + lower + number + specialcharacters === 0) {
      alert("Please check atleast one box!");
      return;
    }
  const passwordbox = document.getElementById("passwordbox");
  const length = document.getElementById("length");
  let password = "";
  while (length.value > password.length) {
    let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
    let isChecked = document.getElementById(keyToAdd.name).checked;
    if (isChecked) {
      password += keyToAdd();
    }
  }
  passwordbox.innerHTML = password;
}
