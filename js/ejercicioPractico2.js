
const numero1 = prompt("Ingrese el número 1: ");
const numero2 = prompt("Ingrese el número 2:");

const resultado = numero1 - numero2;

if (resultado > 0) { 
    alert("Es mayor a 0.");

    if (resultado % 2 == 0) {
        console.log("El número " + resultado + " es par.");
    } else { 
        console.log("El número " + resultado + " es impar.");
    }

}
if (resultado <= 0) { 
    console.log("Es menor a igual a 0.");
}