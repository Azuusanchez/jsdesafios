 //1

const bienvenido=(nombre, apellido) => {}

let nombre = prompt ("Ingrese su nombre");
let apellido = prompt ("Ingrese su apellido");


alert (`Bienvenido/a ${nombre} ${apellido} a mi pagina web`);
console.log (`Bienvenido/a ${nombre} ${apellido} a mi pagina web`);
for (let i = 0; i < nombre.length; i ++){
    console.log (nombre[i]);}


// function bienvenido (nombre, apellido){
// return(`Bienvenido/a ${nombre}  ${apellido} a mi pagina web`)}
// console.log(bienvenido ("azucena", "sanchez"));
// console.log(bienvenido("mia","mereles"));
// console.log(bienvenido("luna","gomez"));


//2

const sumar = (numero1, numero2) => {
    return parseInt (numero1) + parseInt (numero2);
    

}
const restar = (numero1, numero2) => {
    return parseInt (numero1) - parseInt (numero2);
    

}
let operacion = prompt ("¿Que operacion desea realizar ? Ingrese 1: suma o 2: resta")

if (operacion == 1){
    let num1 = prompt ("Ingrese primer numero");
    let num2 = prompt ("Ingrese segundo numero");
    let resultado= sumar ( num1, num2);
    alert (`Tu resultado es ${resultado}`)
    console.log (`Tu resultado es ${resultado}`)
    
    
}
else if (operacion == 2){
    let num1 = prompt ("Ingrese primer numero");
    let num2 = prompt ("Ingrese segundo numero");
    let resultado= restar ( num1, num2);
    alert (`Tu resultado es ${resultado}`)
    console.log (`Tu resultado es ${resultado}`)}

    






    

