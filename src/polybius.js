// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // changes all characters from input to lower case
    input = input.toLowerCase();
    
    // to encode a string
    if(encode == true) {
      let polybiusEncodingSquare = {
        "a": 11, "b": 21, "c": 31, "d": 41, "e": 51,
        "f": 12, "g": 22, "h": 32, "i/j": 42, "k": 52,
        "l": 13, "m": 23, "n": 33, "o": 43, "p": 53,
        "q": 14, "r": 24, "s": 34, "t": 44, "u": 54,
        "v": 15, "w": 25, "x": 35, "y": 45, "z": 55
      }
      
      // holds the encoded values to return
      let encodedString = "";
      
      // loops through each letter or space and appends the encoded value to a encodedString
      for (let character of input) {
        if(character == "i" || character == "j") {
          encodedString += polybiusEncodingSquare["i/j"];
        } else if(character == " ") {
          encodedString += " ";
        } else {
          encodedString += polybiusEncodingSquare[character];
        }
      }
      return encodedString;
    }
    // to decode a string
    if(encode == false) {
      
      // checks if the input to be decoded is valid
      const inputLength = (input.split(" ").join('').length);
      if(inputLength % 2 === 1) {return false};
      
      let polybiusDecodingSquare = {
        11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
        12: "f", 22: "g", 32: "h", 42: "i/j", 52: "k",
        13: "l", 23: "m", 33: "n", 43: "o", 53: "p",
        14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
        15: "v", 25: "w", 35: "x", 45: "y", 55: "z"
      }
      
      // splits the string into individual encoded words
      let encodedWords = input.split(" ");
      let decodedString = [];
      
      // loops through each word and decodes it according to the polybius key and adds it to decodedString array
      for (let word of encodedWords) {
        let decodedWord = "";
        for (let i=0; i < word.length; i+=2) {
          if(word[i] + word[i+1] == "42") {
            decodedWord += "(i/j)";
          } else {
            decodedWord += polybiusDecodingSquare[word[i] + word[i+1]];
          }
        }
        decodedString.push(decodedWord);
      }
      // returning decoded words joined with a space
      return decodedString.join(" ");
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
