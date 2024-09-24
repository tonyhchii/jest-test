const capitiize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const reverseString = (word) => {
  return word.split("").reverse().join("");
};

const calculator = () => {
  const add = (num1, num2) => {
    return num1 + num2;
  };
  const subtract = (num1, num2) => {
    return num1 - num2;
  };
  const multiply = (num1, num2) => {
    return num1 * num2;
  };

  return {
    add,
    subtract,
    multiply,
  };
};

const caesarCipher = (str, shift) => {
  let cipher = "";
  for (let i = 0; i < str.length; i++) {
    if (/[a-zA-Z]/.test(str.charAt(i))) {
      const charCode = ((str.charCodeAt(i) - 97 + shift) % 26) + 97;
      cipher += String.fromCharCode(charCode);
    } else {
      cipher += str.charAt(i);
    }
  }
  return cipher;
};

const analyzeArray = (arr) => {
  this.min = arr[0];
  this.max = arr[0];
  this.total = 0;
  this.length = arr.length;

  arr.forEach((num) => {
    this.total += num;
    this.min = Math.min(this.min, num);
    this.max = Math.max(this.max, num);
  });

  this.average = this.total / this.length;

  return {
    average: this.average,
    min: this.min,
    max: this.max,
    length: this.length,
  };
};

module.exports = {
  capitiize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
