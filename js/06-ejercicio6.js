/*Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3


Output: El 15 es el número más grande
*/
const numero1 = parseInt(prompt("ingresar numero"));
const numero2 = parseInt (prompt("ingresar numero2"));
if (numero1 > numero2 ) {
    document.write("el numero 1 es mayor al numero 2")
}else{
    if(numero2 > numero1){
        document.write("el numero 2 es mayor")
    }
}

    

