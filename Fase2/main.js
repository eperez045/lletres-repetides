let nombre = ['E', 'L', 'E', 'N', '4'];
let i;
console.log("he encontrado el nombre "+ nombre.join(''));
for (i = 0; i < nombre.length; i++) {
    if (nombre[i].search(/\d/) === 0) {
        console.log('Los nombres de personas no contienen el numero: ' + nombre[i]);
    } else if (nombre[i].search(/[aeiou]/i) === 0) {
        console.log('He encontrado la VOCAL: ' + nombre[i]);
    } else {
        console.log('He encontrado la CONSONANTE: ' + nombre[i]);
    }
}
