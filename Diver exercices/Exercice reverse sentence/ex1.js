// EX1 ---------------------------------------------

let sentence = "Hello beautiful world !";
console.log(sentence);

// SPLIT SANS ESPACE ("")= split chaque caractere 
let reversedSentence = sentence.split("").reverse().join("");

console.log(reversedSentence);

function reverse(str){
    console.log(str.split('').reverse().join(''));
}

const string = "I want to live in America"

reverse(string)
reverse(sentence)