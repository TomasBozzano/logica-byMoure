/*
 * EJERCICIO:
 * Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
 * en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
 * - Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición,
 *   recorrido, conversión a mayúsculas y minúsculas, reemplazo, división, unión,
 *   interpolación, verificación...
 */
cadena = "Hola, soy una cadena de texto";
console.log(cadena[0]); // H
console.log(cadena[1]); // o
console.log(cadena.length); // 27
console.log(cadena.substring(0, 4)); // Hola
console.log(cadena.concat(" de prueba")); // Hola, soy una cadena de texto de prueba
console.log(cadena.repeat(2)); // Hola, soy una cadena de textoHola, soy una cadena de texto
console.log(cadena.toUpperCase()); // HOLA, SOY UNA CADENA DE TEXTO
console.log(cadena.toLowerCase()); // hola, soy una cadena de texto
console.log(cadena.replace("Hola", "Adios")); // Adios, soy una cadena de texto
console.log(cadena.split(" ")); // [ 'Hola,', 'soy', 'una', 'cadena', 'de', 'texto' ]
console.log(cadena + " " + "de prueba"); // Hola, soy una cadena de texto de prueba
console.log(`${cadena} de prueba`); // Hola, soy una cadena de texto de prueba
console.log(cadena.includes("Hola")); // true
console.log(cadena.split().forEach(element => {
        console.log(element);
    })) // Hola, soy una cadena de texto
console.log(cadena.charAt(0)); // H
if(cadena.startsWith("Hola")) {
    console.log("Empieza por Hola");
}


/* DIFICULTAD EXTRA (opcional):
 * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos
 * - Anagramas
 * - Isogramas
 */
function check(word1, word2) {
    isPalindrome(word1) ? console.log("Es palíndromo") : console.log("No es palíndromo");
    isAnagram(word1, word2) ? console.log("Es anagrama") : console.log("No es anagrama");
    isIsogram(word1) ? console.log("Es isograma") : console.log("No es isograma");
    isIsogram(word2) ? console.log("Es isograma") : console.log("No es isograma");
    isIsogram2(word1) ? console.log("Es isograma") : console.log("No es isograma");
    isIsogram2(word2) ? console.log("Es isograma") : console.log("No es isograma");
}
function isPalindrome(word) {
    //return word === word.split("").reverse().join("");
    palindrome = '';
    for (let i = word.length - 1; i >= 0; i--) {
        palindrome += word[i];
    }
    return word === palindrome;
}
function isAnagram(word1, word2) {
    //return word1.split("").sort().join("") === word2.split("").sort().join("");
    letras1 = word1.split("");
    letras2 = word2.split("");
    //Logica del metodo sort(), con forEach para ordenar elementos  
    letras1.sort();
    letras2.sort();
    return letras1.join("") === letras2.join("");
}
//isograma de primer y segundo orden
function isIsogram(word){
    return word.length === new Set(word).size;
}
function isIsogram2(word) {
    //funcion de segundo orden
    const rep = {}
    for (let i = 0; i < word.length; i++) {
        const char = word.charAt(i);

        if(rep[char]) {
            rep[char]++;
        } else {
            rep[char] = 1;
        }
    }
    const values = Object.values(rep);
    return values.every(value => value === values[0]);
}



check("oso", "pozo") ? console.log("Es palíndromo") : console.log("No es palíndromo");
check("roma", "amor") ? console.log("Es anagrama") : console.log("No es anagrama");
check("murcielago", "cajoness") ? console.log("Es heterograma") : console.log("No es heterograma");
check("osososo", "osososos") ? console.log("Es isograma") : console.log("No es isograma");