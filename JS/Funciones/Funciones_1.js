/* Las   funciones   se   declaran usando   la   palabra   clave function,   el   nombre   seguido   de paréntesis,
y el código entre llaves. Para llamar a la función (ejecutarla), tenemos que 
declarar su nombre con un par de paréntesis al final, como mostramos a continuación.*/

function mostrarMensaje() {   
    alert("Soy una funcion"); 
} 
mostrarMensaje(); 

/* 2 */
var total = 5; function calcularValores(){   
    total = total * 2; 
} 
for(var f = 0; f < 10; f++){   
    calcularValores(); 
} 
alert("El total es: " + total);  // "El total es: 5120" 

/* Funciones Anonimas */
/* Son funciones sin un nombre o identificador. Debido a esto, 
se pueden pasar a otras funciones o  asignar a  variables.*/

var mivalor = function(valor) {   
    valor = valor * 2;   
    return valor; 
}
(35); 
alert("El valor es " + mivalor);  // "El valor es 70" 

/* Funcion estándar */

/*isNaN(valor)—Esta función devuelve true (verdadero) si el valor entre paréntesis no es un número. */

    var mivalor = "Hola"; 
    if (isNaN(mivalor)) {   
        alert(mivalor + " no es un numero"); 
    } else {   
        alert(mivalor + " es un numero"); 
    } 
