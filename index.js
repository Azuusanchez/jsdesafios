// const bienvenido=(nombre, apellido) => {}

// let nombre = prompt ("Ingrese su nombre");
// let apellido = prompt ("Ingrese su apellido");

// alert (`Bienvenido/a ${nombre} ${apellido} a mi pagina web`);
// console.log (`Bienvenido/a ${nombre} ${apellido} a mi pagina web`);
// for (let i = 0; i < nombre.length; i ++){
    // console.log (nombre[i]);}


    
// incorporando array

const clientes =  [
    {
        nombre : "Azucena" ,
        apellido: "Sanchez",
        edad : 22,
        localidad: "Caseros"
    } ,
    {
        nombre : "Dora" ,
        apellido: "Gomez",
        edad : 44,
        localidad: "Santos lugares"
    } ,
    {
        nombre : "Nestor" ,
        apellido: "Mereles",
        edad : 27,
        localidad: "Mataderos"
    } ,
    {
        nombre : "Sebastian" ,
        apellido: "Lopez",
        edad : 24,
        localidad: "Ituzaingo"
    } ,
    {
        nombre : "Diamela" ,
        apellido: "Viera",
        edad : 20,
        localidad:"Mercedes"
    } ,
    
]

console.log (clientes[3]) ;
clientes.push({
    nombre: "Jazmin",
    apellido:"Ramirez",
    edad: 30,
    ciudad:"Apostoles" }) ;
    clientes.push({
        nombre: "Alma",
        apellido:"Acosta",
        edad: 22,
        ciudad:"Posadas" }) ;
        clientes.reverse ();


    console.log (clientes);


