/*
 * EJERCICIO:
 * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto
 *   en tu lenguaje.
 * - Utiliza operaciones de inserción, borrado, actualización y ordenación.
 */
//Array
let array = [1, 2, 3];
//Objeto
let objeto = {
    nombre: "Juan",
    edad: 20
};
//Sets
let set = new Set();
set.add(1);
console.log(set);
//Maps
let map = new Map();
map.set("nombre", "Juan");
console.log(map);
//WeakSets
let weakSet = new WeakSet(); //no se puede hacer console.log de un weakSet, el weakSet se utiliza para almacenar objetos de forma debil y solo se pueden añadir objetos
weakSet.add(objeto);
console.log(weakSet);
//WeakMaps
let weakMap = new WeakMap(); //no se puede hacer console.log de un weakMap, el weakMap se utiliza para almacenar objetos de forma debil y solo se pueden añadir objetos
weakMap.set(objeto, "Juan");
console.log(weakMap);
//Strings
let string = "Hola";
console.log(string);
//Numbers
let number = 1;
console.log(number);
//Boolean
let boolean = true;
console.log(boolean);
//Symbols
let symbol = Symbol(); //se utiliza para crear un valor unico e inmutable
console.log(symbol);
//BigInt
let bigInt = 1234567890123456789012345678901234567890n; //se utiliza para representar numeros enteros mayores que 2^53 - 1
console.log(bigInt);
//Date
let date = new Date(); //se utiliza para trabajar con fechas y horas
console.log(date);
//Math
console.log(Math.max(1, 2, 3)); //devuelve el mayor de los numeros
console.log(Math.min(1, 2, 3)); //devuelve el menor de los numeros
console.log(Math.round(1.5)); //redondea al numero entero mas cercano
console.log(Math.floor(1.5)); //redondea al numero entero menor
console.log(Math.ceil(1.5)); //redondea al numero entero mayor
//JSON
let json = JSON.stringify(objeto); //convierte un objeto en un string
console.log(json);
//RegExp
let regExp = /hola/; //se utiliza para buscar patrones en strings
console.log(regExp);
//Error
let error = new Error("Error"); //se utiliza para lanzar errores
console.log(error);
//Function
function funcion() {
    console.log("Hola");
}
funcion();
//Promise
let promise = new Promise((resolve, reject) => {
    resolve("Hola");
});
//Proxy
let proxy = new Proxy(objeto, {
    get: function(target, prop, receiver) {
        return target[prop];
    }
});
console.log(proxy.nombre);
//Reflect
let reflect = Reflect.get(objeto, "nombre");
console.log(reflect);
//ArrayBuffer
let arrayBuffer = new ArrayBuffer(16); //se utiliza para almacenar datos binarios
console.log(arrayBuffer);
//SharedArrayBuffer
let sharedArrayBuffer = new SharedArrayBuffer(16); //se utiliza para almacenar datos binarios compartidos
console.log(sharedArrayBuffer);
//DataView
let dataView = new DataView(arrayBuffer); //se utiliza para leer y escribir datos binarios
console.log(dataView);
//Float32Array
let float32Array = new Float32Array(16); //se utiliza para almacenar datos binarios en formato de 32 bits
console.log(float32Array);
//Float64Array
let float64Array = new Float64Array(16); //se utiliza para almacenar datos binarios en formato de 64 bits
console.log(float64Array);
//Int8Array
let int8Array = new Int8Array(16); //se utiliza para almacenar datos binarios en formato de 8 bits
console.log(int8Array);
//Int16Array
let int16Array = new Int16Array(16); //se utiliza para almacenar datos binarios en formato de 16 bits
console.log(int16Array);
//Int32Array
let int32Array = new Int32Array(16); //se utiliza para almacenar datos binarios en formato de 32 bits
console.log(int32Array);
//Uint8Array
let uint8Array = new Uint8Array(16); //se utiliza para almacenar datos binarios en formato de 8 bits sin signo
console.log(uint8Array);
//Uint8ClampedArray
let uint8ClampedArray = new Uint8ClampedArray(16); //se utiliza para almacenar datos binarios en formato de 8 bits sin signo y con valores entre 0 y 255
console.log(uint8ClampedArray);
//Uint16Array
let uint16Array = new Uint16Array(16); //se utiliza para almacenar datos binarios en formato de 16 bits sin signo
console.log(uint16Array);
//Uint32Array
let uint32Array = new Uint32Array(16); //se utiliza para almacenar datos binarios en formato de 32 bits sin signo
console.log(uint32Array);
//Atomics
let sharedArrayBuffer2 = new SharedArrayBuffer(16);
let int32Array2 = new Int32Array(sharedArrayBuffer2); //se utiliza para almacenar datos binarios compartidos
Atomics.add(int32Array2, 0, 1); //se utiliza para realizar operaciones atomicas en datos binarios compartidos
console.log(int32Array2);
//WebAssembly
// const fs = require('fs');
// const buf = fs.readFileSync('ejemplo.wasm');
// WebAssembly.instantiate(new Uint8Array(buf)).then(result => {
//     console.log(result.instance.exports.add(1, 2)); //se utiliza para ejecutar codigo en formato binario
// });
//Generator
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}
let gen = generator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
//AsyncFunction
async function asyncFunction() {
    return "Hola";
}
asyncFunction().then(console.log);
//GeneratorFunction
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}
let genFunc = generatorFunction();
console.log(genFunc.next());
console.log(genFunc.next());
console.log(genFunc.next());
//Intl
let date2 = new Date();
let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
let locale = 'es-ES';
let formatter = new Intl.DateTimeFormat(locale, options);
console.log(formatter.format(date2));
//URL
let url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL');
console.log(url);
//Arguments
function argumentsFunction() {
    console.log(arguments);
}
argumentsFunction(1, 2, 3);
//Module
// import { module } from 'module';
// console.log(module);
//Array
array.push(4); //insertar
array.pop(); //borrar
array[0] = 5; //actualizar
array.sort(); //ordenar
//Objeto
objeto.nombre = "Pedro"; //actualizar
delete objeto.edad; //borrar
//Sets
set.delete(1); //borrar
//Maps
map.set("nombre", "Pedro"); //actualizar
map.delete("nombre"); //borrar
//WeakSets
weakSet.delete(objeto); //borrar
//WeakMaps
weakMap.delete(objeto); //borrar
//Strings
string = "Adios"; //actualizar
//Numbers
number = 2; //actualizar
//Boolean
boolean = false; //actualizar
//JSON
let objeto2 = JSON.parse(json); //convierte un string en un objeto
console.log(objeto2);