/*
 * EJERCICIO:
 * - Crea ejemplos de funciones básicas que representen las diferentes
 *   posibilidades del lenguaje:
 *   Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
 * - Comprueba si puedes crear funciones dentro de funciones.
 * - Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
 * - Pon a prueba el concepto de variable LOCAL y GLOBAL.
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *   (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)
 */
function suma(a, b) {
    return a + b;
}
const resultado = function(a, b) {
    return a + b;
}
console.log(suma(1, 2));
console.log(resultado(1, 2));

function factorial(num){
    if(num == 0){
        return 1;
    }
    return num * factorial(num - 1);
}
console.log(factorial(5));

function fibonacci(num){
    if(num == 0){
        return 0;
    }
    if(num == 1){
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(5)); // 0, 1, 1, 2, 3, 5.  llamo a la funcion dentro de la misma funcion

let global = 1;
function local(){
    let local = 2;
    console.log(local);
}
local();
console.log(global);

function buscar(string){
    let array = ["hola", "adios", "que tal"];
    return array.find(element => element === string);
}
console.log(buscar("hola")); //metodo find para buscar un elemento en un array

function buscarIndex(string){
    let array = ["hola", "adios", "que tal"];
    return array.findIndex(element => element === string);
}
console.log(buscarIndex("adios")); //metodo findIndex para buscar el indice de un elemento en un array


/* DIFICULTAD EXTRA (opcional):
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 *
 * Presta especial atención a la sintaxis que debes utilizar en cada uno de los casos.
 * Cada lenguaje sigue una convenciones que debes de respetar para que el código se entienda.
 */

function imprimirTexto(texto1, texto2){
    let contador = 0
    for(let i = 0; i <= 100; i++){
        if(i % 3 === 0){
            console.log(texto1);
            contador++;
        }else if(i % 5 === 0){
            console.log(texto2);
            contador++;
        }else if(i % 3 === 0 && i % 5 === 0){
            console.log(texto1 + texto2);
            contador++;
        }
    }
    return contador;
}
console.log(imprimirTexto("hola", "adios"));