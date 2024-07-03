/*Dificultad:  
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210




Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.
 */
const divisible = parseInt(prompt("Ingresar Numero:"))
if(divisible % 2 ===0  || divisible % 5===0  ){
    document.write("es divisible por 2 y por 5")
}else
 if( divisible  % 3 === 0 || divisible % 7 ===0 ){
     document.write("es divisible por 3 y 7")   
    }


