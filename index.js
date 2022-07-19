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
        ciudad: "Caseros"
    } ,
    {
        nombre : "Dora" ,
        apellido: "Gomez",
        edad : 44,
        ciudad: "Santos lugares"
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
        ciudad: "Ituzaingo"
    } ,
    {
        nombre : "Diamela" ,
        apellido: "Viera",
        edad : 20,
        ciudad:"Mercedes"
    } ,
    
]
const clientesExtranjeros = [
    {
        nombre : "Maria" ,
        apellido: "Sarmiento",
        edad : 29,
        ciudad: "Chile"
    } ,
    {
        nombre : "Daniel" ,
        apellido: "Gonzales",
        edad : 40,
        ciudad: "Perú"
    } ,
    {
        nombre : "Noah" ,
        apellido: "Sevilla",
        edad : 19,
        ciudad: "Brasil"
    } 

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
     const totalClientes = clientes.concat(clientesExtranjeros) ;
     console.log (totalClientes)


