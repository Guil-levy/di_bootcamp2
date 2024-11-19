// EX1 ---------------------------------------------
console.log("EXERCICE 1, inverser une chaine de caractere");
console.log("");
// SPLIT SANS ESPACE ("")= split chaque caractere 

function reverse(str){
    console.log(str.split('').reverse().join(''));
    console.log(str.split(' ').reverse(" ").join(' '));
}

const string = "I want to live in America"

reverse(string);

//EX2 palidrome------------------------
console.log("EXERCICE 2, palindrome");
console.log("");

function palindrome(str){
    let strMin = str.toLowerCase(str);
    console.log(strMin);
    if (strMin.split('').reverse().join('') === strMin){console.log(`${strMin} est un palindrome`);}
    else {console.log(`${strMin} n'est pas un palindrome`);}
}

palindrome('kayak')
palindrome('Bonjour')
palindrome('Elle')

//EX3 le mot le plus long------------------------
console.log("EXERCICE 3, mot le plus long");
console.log("");

function longestWord(str){
    let mots = str.split(' ');
    let motPlusLong = mots[0];  
    console.log(mots);

    for (let i = 1; i < mots.length; i++) {
        if (mots[i].length > motPlusLong.length) {
            motPlusLong = mots[i];
        }
    }
    console.log(`Le mot le plus long est : ${motPlusLong}`);
}    

let sentence = "Le Javascript c'est super trop cool anticonstitutionnelement";
longestWord(sentence)

//EX4 Generer un nombre aleatoire------------------------
console.log("EXERCICE 4, Generer un nombre aleatoire");
console.log("");

