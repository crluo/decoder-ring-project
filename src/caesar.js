// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // checks if the shift parameter is valid
    if(shift > 25 || shift < -25 || shift == 0 || !shift) {
      return false;
    }
    
    //if encode == false, reverses the shift
    if(encode == false) {
      shift = -shift;
    }
    
    // take input and turn it into an array
    let charArray = input.toLowerCase().split("");
    // array for the char codes
    let charCodes = [];
    // change each index into ASCII codes
    for (let char of charArray) {
      charCodes.push(char.charCodeAt());
    }
    
    
    // changes the unicode according to shift
    let finalizedCodes = [];
    for (let code of charCodes) {
      if(code > 96 && code < 123) {
        let shiftedCode = code + shift;
        if(shiftedCode < 97) {
          shiftedCode = shiftedCode + 26;
          } else if(shiftedCode > 122) {
          shiftedCode = shiftedCode - 26;
          }
        finalizedCodes.push(shiftedCode);
      } else { finalizedCodes.push(code) }
    }
    
    // reverts unicode to letter
    let finalArray = [];
    for (let shiftedCode of finalizedCodes) {
      finalArray.push(String.fromCharCode(shiftedCode));
    }
    
    // joins together to return encoded or decoded string
    return finalArray.join('');
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };