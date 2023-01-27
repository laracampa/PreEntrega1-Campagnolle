let nombre = prompt ("Ingrese su nombre aquí:");
const torta = 1000;
const lemonpie = 2000;
const brownie = 3000;
const chocotorta = 4000;
function agradecimiento() {
    alert(nombre+", ya hemos procesado tu pedido. Muchas gracias.")
}

alert("Bienvenido/a " + nombre);

let pedir = prompt ("¿Ya sabe qué va a pedir? \nIngrese si o no:");
if ((pedir == "no")||(pedir == "NO")||(pedir == "No")){ 
    alert("Esperamos que desee probarnos pronto. ¡Hasta luego!")
} else {
    let orden = prompt("Escriba el elemento a pedir: (torta / lemonpie / brownie / chocotorta"); 

switch (orden){ 
    case "torta":
        prompt ("Gracias por su orden. Su total es: $"+torta+"\nIngrese un medio de contacto para comunicarle cuando su pedido esta listo para retirar.");
        agradecimiento();
        break;
    case "lemonpie":
        prompt ("Gracias por su orden. Su total es: $"+lemonpie+"\nIngrese un medio de contacto para comunicarle cuando su pedido esta listo para retirar.");
        agradecimiento();
        break;
    case "brownie":
        prompt ("Gracias por su orden. Su total es: $"+brownie+"\nIngrese un medio de contacto para comunicarle cuando su pedido esta listo para retirar.");
        agradecimiento();
        break;
    case "chocotorta":
        prompt ("Gracias por su orden. Su total es: $"+chocotorta+"\nIngrese un medio de contacto para comunicarle cuando su pedido esta listo para retirar.");
        agradecimiento();
        break;
    default:
        alert("Disculpe, ingresó la información incorrecta.");
    }
}