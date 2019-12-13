//ejercico 1
function exercise1(num) {
    let invert = 0;
    let rest = num;
    do {
        invert = invert * 10 + (rest % 10);
        rest = Math.floor(rest / 10);
    } while (rest > 0);
    return invert;


}

console.log(2341);
console.log(exercise1(2341));

// ejercico2
function exercise2({word}) {
    word = word.replace(/ /g, "");

    for (let i = 0; i < word.length; i++) {
        if (word[i] !== word[word.length - i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(exercise2({word: "lavan esa base naval"}));//palindromo
console.log(exercise2({word: "nananananannabatman"}));//noPalindromo

//ejercicio3
let exercise3 = function (text) {
    return text.split('').sort().join('');
};
console.log(exercise3('rodolfoaurelio'));

// ejercicio5
function exercise5(sentence) {
    let maxiWord = "";
    let words = sentence.replace(",", " ").split(" ");
    words.forEach(function (word) {
        if (word.length > maxiWord.length) {
            maxiWord = word
        }
    });
    return maxiWord;
}

console.log("Aurelio es un gato");
console.log(exercise5("Aurelio es un gato"));
console.log("Au es un gato");
console.log(exercise5("Au es un gato"));

//ejercicio6
function exercise6({sentence}) {
    let c = 0;
    for (let i = 0; i < sentence.length - 1; i++) {
        if (sentence.charAt(i) === "a" || sentence.charAt(i) === "e" || sentence.charAt(i) === "i" || sentence.charAt(i) === "o" || sentence.charAt(i) === "u") {
            c++;
        }
    }
    return c;
}

console.log("Tres tristes tigres, tragan trigo en un trigal");
console.log(exercise6({sentence: "Tres tristes tigres, tragan trigo en un trigal"}));

//Ejercicio8
console.log(2);
console.log(typeof 2);
console.log("Papillon");
console.log(typeof "Papillon");

//Ejercicio9
function exercise9(array) {
    array.sort();
    let c = 0;
    let numX = 0;
    let numY = 0;
    array.forEach(element => {
        if (c === 1) {
            numX = element;
        }
        if (c === array.length - 2) {
            numY = element;
        }
        c++;
    });
    console.log(numX, numY);
}
exercise9([1,2,3,4,5,6]);


