
var fecha = prompt(" Ingrese tu fecha de nacimiento. mm/dd/yyyy");

var fechaEx = new Date(fecha);


var diaDeLaSemana = fechaEx.getDay();



alert("El día de la semana es: " + diaDeLaSemana)