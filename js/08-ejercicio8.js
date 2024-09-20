/*8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 

input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.
 */
const divisible2 = parseInt (prompt("ingresar numero"))
if(divisible2 % 2 === 0) {
    document.write ("es divisible en 2 " )
}else{
    document.write("no es divisible en 2")
}

/*10- Realiza un script que pida número de filas y columnas y escriba una tabla.
 Dentro de cada una de las celdas deberá escribirse un número consecutivo en
 orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1. */

 const filas = parseInt(prompt('Ingresar umeros de filas'))
 const columnas = parseInt (prompt('ingresar numeros de columnas'))
 totalCeldas = filas * columnas;
 document.write(` <tbody> <table>`)
 for(indiceFilas = 1;indiceFilas<=filas; indiceFilas++){
    document.write(`<tr>`)
    for(let indiceColumnas = 1;indiceColumnas <=columnas;indiceColumnas++){
        document.write(`<td>${totalCeldas}</td>`)
        totalCeldas--
   }

 document.write(`<tr>`)

 }
 
 

 document.write(` </tbr>`)
 document.write(` </tbody> </table>`)