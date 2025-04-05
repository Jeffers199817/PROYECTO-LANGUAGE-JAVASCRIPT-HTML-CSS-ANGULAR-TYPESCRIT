let frutas = ["naranjas", "banana", "ovos", "kiwi"];
let frutas1 = ["naranjas", "banana", "ovos", "kiwi"];

frutas.push("manzana");

console.log(frutas);


frutas.pop();
console.log(frutas)

frutas.shift();
console.log(frutas)

frutas.unshift("peras")
console.log(frutas);

let frutasConA = frutas.filter(fruta => fruta.includes("a"));

console.log(frutasConA);

let todasLasFrutas = frutas.concat(frutas1);
console.log(todasLasFrutas);

todasLasFrutas.reverse();
console.log(todasLasFrutas);

todasLasFrutas.sort();
console.log(todasLasFrutas);