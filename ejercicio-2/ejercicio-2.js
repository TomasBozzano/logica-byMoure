/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
*/

// Operadores aritmeticos
let suma = 1 + 1;
console.log(suma);
let resta = 1 - 1;
console.log(resta);
let multiplicacion = 2 * 2;
console.log(multiplicacion);
let division = 4 / 2;
console.log(division);
let modulo = 5 % 2;
console.log(modulo);
let potencia = 2 ** 3;
console.log(potencia);

// Operadores logicos
let and = true && true;
console.log(and); //(true)
let or = true || false; 
console.log(or); //(true)
let not = !false;
console.log(not); //(true)

// Operadores de comparacion
let igual = 1 == 1;
console.log(igual); //(true)
let igualTipo = 1 === 1;
console.log(igualTipo); //(true)
let diferente = 1 != 2;
console.log(diferente); //(true)
let mayor = 2 > 1;
console.log(mayor); //(true)
let mayorIgual = 2 >= 2;
console.log(mayorIgual); //(true)
let menor = 1 < 2;
console.log(menor); //(true)
let menorIgual = 1 <= 2;
console.log(menorIgual); //(true)

// Operadores ternarios
let ternario = 1 > 2 ? "Es mayor" : "Es menor";
console.log(ternario); //("Es menor")

// Operadores de asignacion
let incremento = 1;
incremento++;
let decremento = 1;
decremento--;
let asignacion = 1;
asignacion += 1;
let identidad = 1 === 1;
console.log(identidad); //(true)
let asignacionMultiplicativa = 2;
asignacionMultiplicativa *= 2; //4
let asignacionDivision = 4;
asignacionDivision /= 2; //2
let asignacionModulo = 5;
asignacionModulo %= 2; //1
let asignacionPotencia = 2;
asignacionPotencia **= 3; //8
let asignacionDivisionEntera = 5;
asignacionDivisionEntera >>= 1; //2

// identidad, pertenencia y bits
let pertenencia = "a" in {a: 1};
console.log(pertenencia); //(true)
let pertenencia2 = "a" in not ["a", "b"];
console.log(pertenencia2); //(false)

// Operadores de bits
let bits = 1 & 1;
console.log(bits); //(1)

// Estructuras de control
// Condicionales
let condicional = true;
if (condicional) {
  console.log("Es verdadero");
} else {
  console.log("Es falso");
}

// Iterativas
let iterativa = 0;
while (iterativa < 5) {
  console.log(iterativa);
  iterativa++;
}

// Excepciones
try {
  throw new Error("Error");
}
catch (error) {
    console.log(error);
    }
finally {
    console.log("Finalizado");
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}


/*  * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */
for (let i = 10; i <= 55; i++) {
  if (i % 2 === 0 && i !== 16 && i % 3 !== 0) {
    console.log(i);
  }
}
