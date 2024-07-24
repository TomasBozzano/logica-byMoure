console.log("Ejercicio 4a");
/* DIFICULTAD EXTRA (opcional):
* Crea una agenda de contactos por terminal.
* - Debes implementar funcionalidades de búsqueda, inserción, actualización
*   y eliminación de contactos.
* - Cada contacto debe tener un nombre y un número de teléfono.
* - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
*   y a continuación los datos necesarios para llevarla a cabo.
* - El programa no puede dejar introducir números de teléfono no númericos y con más
*   de 11 dígitos (o el número de dígitos que quieras).
* - También se debe proponer una operación de finalización del programa.
*/

let agenda = [];
let operacion = "";
let nombre = "";
let telefono = "";
let contacto = {};
let contactoEncontrado = {};
let nombreEncontrado = "";
let telefonoEncontrado = "";
let index = 0;

while (operacion != "salir") {
    let operacion = prompt("¿Qué operación quieres realizar? e ingresa el numero (1)buscar, 2)insertar, 3)actualizar, 4)eliminar, 5)salir)");
    if (operacion == "1") {
        nombre = prompt("Introduce el nombre del contacto");
        contactoEncontrado = agenda.find(contacto => contacto.nombre == nombre);
        if (contactoEncontrado != undefined || contactoEncontrado != null) {
            console.log(contactoEncontrado);
        } else {
            console.log("No se ha encontrado el contacto");
        }
    } else if (operacion == "2") {
        nombre = prompt("Introduce el nombre del contacto");
        telefono = prompt("Introduce el telefono del contacto");
        contacto = {
            nombre: nombre,
            telefono: telefono
        }
        agenda.push(contacto);
        console.log("Contacto insertado correctamente, " + contacto);
    } else if (operacion == "3") {
        nombre = prompt("Introduce el nombre del contacto");
        contactoEncontrado = agenda.find(contacto => contacto.nombre == nombre);
        if (contactoEncontrado != undefined || contactoEncontrado != null) {
            telefono = prompt("Introduce el telefono del contacto");
            contactoEncontrado.telefono = telefono;
            console.log("Contacto actualizado correctamente ," + contactoEncontrado);

        } else {
            console.log("No se ha encontrado el contacto");
        }
    } else if (operacion == "4") {
        nombre = prompt("Introduce el nombre del contacto");
        contactoEncontrado = agenda.find(contacto => contacto.nombre == nombre);
        if (contactoEncontrado != undefined || contactoEncontrado != null) {
            index = agenda.indexOf(contactoEncontrado);
            agenda.splice(index, 1);
            console.log("Contacto eliminado correctamente");
        } else {
            console.log("No se ha encontrado el contacto");
        }
    } else if (operacion == "5") {
        console.log("Saliendo de la agenda");
        break;
    } else {
        console.log("Operación no válida");
    }
}