let nombre = ['E', 'L', 'E', 'N', 'A'];
let map =  new Map();
let i = 0;
while (nombre[i] != undefined) {
	if (map.has(nombre[i])) {map.set(nombre[i], (map.get(nombre[i])+1));}
	else {map.set(nombre[i], 1);}
	i++; 
}
console.log(map);
