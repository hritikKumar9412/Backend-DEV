const utils =require("./stringUtils");
const text="Hritik Kumar";

console.log("Original",text);
console.log("Capitalized",utils.capitalize(text));
console.log("Reversed",utils.reverseString(text));
console.log("Vowels COunt",utils.countVowels(text));
