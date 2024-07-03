/*10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 

input: 20


Output: El 20 es divisible por 2.
 */
const divisiblePor2 = parseInt (prompt("Ingresar Numero:"))
if (divisiblePor2 % 2 === 0 ){
    document.write("es divisible por 2")
}else
    if(divisiblePor2 % 3 === 0){
        document.write("Es divisible por 3")
    }else{
        if(divisiblePor2 % 5 ===0)
            document.write("es divisible por 5")
    }


    
