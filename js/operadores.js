//Operadores aritméticos 

var suma = 35 + 3;
console.log(suma);

//operadores compración relacionales 

console.log(5 > 2);
console.log(98 < 1);
var numero = 9;
console.log(9 === numero)


//Operaciones logicos o condicionales

var edad = 18;
var dni = !false;

if (edad >= 18 && dni == true) { 
    const condicion="Mayor de edad." 
    console.log(condicion);
}

if (edad >= 18 || dni == true) { 
        const condicion = "Mayor de edad pero sin dni.";
        console.log(condicion);
    
}