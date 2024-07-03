/*8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 

input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.
 */
const divisible2 = parseInt (prompt("ingresar numero"))
if(divisible2 % 2 === 0) {
    document.write ("es divisible en 2")
}else{
    document.write("no es divisible en 2")
}

