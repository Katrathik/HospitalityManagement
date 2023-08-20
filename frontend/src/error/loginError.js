function Naming(word) {
  const names = {
    fName: 'First Name',
    lName: 'Last Name',
    pwd: 'Password',
    email: 'Email',
    phno: 'Phone Number',
  };

  for (const [key, value] of Object.entries(names)) {
    if (key === word) {
      return value;
    }
  }
  return word;
}

function containsNumber(str) {
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i]))) {
      return true;
    }
  }
  return false;
}
function containsSpecialCharacter(str) {
  const specialCharacterRegex = /[^a-zA-Z0-9]/;
  return specialCharacterRegex.test(str);
}

function containsLowercase(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i].toLowerCase()) {
      return true;
    }
  }
  return false;
}

function containsUppercase(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i].toUpperCase()) {
      return true;
    }
  }
  return false;
}

export function signError(inputObject) {
  const object = { ...inputObject };
  const errors = [];

  Object.entries(object).forEach(([key, value]) => {
    if (!value) {
      errors.push(`Please provide ${Naming(key)}`);
    }
    if ((key === 'fName' || key === 'lName') && !value.length > 2) {
      errors.push(`Please provide proper Name`);
    }
    if (value.includes(' ')) {
      errors.push(`Do not provide space between ${Naming(key)}`);
    }
    if (key === 'phoneNumber' && value.length !== 10) {
      errors.push('Invalid Phone Number');
    }
    if (key === 'email' && (!value.includes('@') || !value.includes('.'))) {
      errors.push('Please type the correct Email');
    }
    if (
      key === 'password' &&
      (value.length > 7 ||
        containsUppercase(value) ||
        containsLowercase(value) ||
        containsNumber(value))
    ) {
      errors.push('Please enter a Strong Password');
    }
  });

  return errors.length > 0 ? [true, [errors[0]]] : [false, []];
}
