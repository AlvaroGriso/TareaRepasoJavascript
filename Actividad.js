//ejercico 1
console.log("exercise1");
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
console.log("exercise2");
function exercise2(word) {
    word = word.replace(/ /g, "");

    for (let i = 0; i < word.length; i++) {
        if (word[i] !== word[word.length - i - 1]) {
            return false;
        }
    }
    return true;
}
console.log(exercise2("lavan esa base naval"));//palindromo
console.log(exercise2("nananananannabatman")); //noPalindromo


//ejercicio3
console.log("exercise3");
let exercise3 = (text) => text.split('').sort().join('');

console.log(exercise3('rodolfoaurelio'));

// ejercicio4
console.log("exercise4");
function exercise4(mayusc) {
    let string = mayusc.split(' ');
    const length = [];
    string.filter(function (input) {
            length.push(input.charAt(0).toUpperCase() + input.substr(1));
        }
    );

    return length.join(" ")
}
console.log(exercise4("javascript es un lenguaje funcional"));

// ejercicio5
console.log("exercise5");
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
console.log("exercise6");
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
 //introducir aquí el número que deseas calcular.
let num;

//ejercicio 7
console.log("exercise7");
function exercise7(txt1) {
    num = 2;
    let primo = true;

    while (primo && num <  txt1) {
        if (txt1 % num === 0) {
            primo = false;
        } else {
            num = num + 1;
        }
    }
    if (primo && txt1 > 1)
        return "es primo";
    else
        return "no es primo";
}
console.log(exercise7(8));

//Ejercicio8
console.log("exercise8");
console.log(2);
console.log(typeof 2);
console.log("Papillon");
console.log(typeof "Papillon");

//Ejercicio9
console.log("exercise9");
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

//ejercicio 10
str=8;
num = 1;
while (str !==0){
    num = num * str;
    str=str-1;
}
console.log(num);

//Ejercicio12
console.log("exercise12");
function exercise12(sente, caract) {
    let sentenceNormal = sente.toLowerCase();
    let counter = 0;
    for (let i = 0; i < sentenceNormal.length; i++) {
        if (sentenceNormal[i]===caract){
            counter++;
        }
    }
    return counter;
}
console.log("javascript es un lenguaje funcional");
console.log("a");
console.log(exercise12("javascript es un lenguaje funcional", "a" ));

//Ejercicio13
console.log("exercise13");
function exercise13(sentence) {
    let sentenceLoCa = sentence.toLowerCase();
    for (let i = 0; i < sentence.length; i++) {
        let carAct = sentence.charAt(i).toLowerCase();
        if (sentenceLoCa.indexOf(carAct) === sentenceLoCa.lastIndexOf(carAct)) {
            return sentence.charAt(i);
        }
    }
}
console.log("ramon esta apaladusuiorekd en la vida");
console.log(exercise13("ramon esta apaladusuiorekd en la vida"));

//Ejercicio14
console.log("exercise14");
function exercise14(num, num2) {
    let sum = num * num;
    return sum + num2;
}

function exercise14_2(result) {
    return (result(13, 14) / 2) * 4;
}
console.log(exercise14_2(exercise14));