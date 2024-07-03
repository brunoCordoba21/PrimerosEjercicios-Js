/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande
*/
const numero1 = parseInt(prompt("Ingresar numero1"))
const numero2 = parseInt(prompt("Ingresar numero2"))
const numero3 = parseInt (prompt("Ingresar numero3"))
if (numero1 > numero2) {
    if(numero1 > numero3){
        document.write("EL NUMERO 1 ES MAYOR A LOS DEMAS")
    }
}else{
    if(numero2 > numero1)
    if(numero2 > numero3) {
        document.write ("El numero 2 es mayor a los demas")
    }  
    
}
{
    if(numero3 > numero1 )
        if(numero3 >  numero2) {
            document.write("El numero 3 es mayor a los demas")
        }
}