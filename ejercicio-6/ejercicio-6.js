/*
 * EJERCICIO:
 * - Muestra ejemplos de asignación de variables "por valor" y "por referencia", según
 *   su tipo de dato.
 * - Muestra ejemplos de funciones con variables que se les pasan "por valor" y 
 *   "por referencia", y cómo se comportan en cada caso en el momento de ser modificadas.
 * (Entender estos conceptos es algo esencial en la gran mayoría de lenguajes)
 */
//Asignación de variables por valor
let a = 5;
let b = a;
b = 10;
console.log(a); //5
console.log(b); //10
//Asignación de variables por referencia
let array1 = [1, 2, 3];
let array2 = array1;
array2.push(4);
console.log(array1); //[1, 2, 3, 4]
console.log(array2); //[1, 2, 3, 4]
//Funciones con variables por valor
function changeValue(value) {
    value = 10;
}
let value = 5;
changeValue(value);
console.log(value); //5
//Funciones con variables por referencia
function changeArray(array) {
    array.push(4);
}
let array = [1, 2, 3];
changeArray(array);
console.log(array); //[1, 2, 3, 4]
/* DIFICULTAD EXTRA (opcional):
 * Crea dos programas que reciban dos parámetros (cada uno) definidos como
 * variables anteriormente.
 * - Cada programa recibe, en un caso, dos parámetros por valor, y en otro caso, por referencia.
 *   Estos parámetros los intercambia entre ellos en su interior, los retorna, y su retorno
 *   se asigna a dos variables diferentes a las originales. A continuación, imprime
 *   el valor de las variables originales y las nuevas, comprobando que se ha invertido
 *   su valor en las segundas.
 *   Comprueba también que se ha conservado el valor original en las primeras.
 */
function changeValuesByValue(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}
function changeValuesByReference(array) {
    let temp = array[0];
    array[0] = array[1];
    array[1] = temp;
    return array;
}
console.log(changeValuesByValue(5, 10));
console.log(changeValuesByReference([5, 10]))
