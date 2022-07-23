
// clientes
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
        edad : 17,
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
    {
        nombre : "Daniel" ,
        apellido: "Martinez",
        edad : 16,
        ciudad:"Saenz peña"
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
        edad : 17,
        ciudad: "Perú"
    } ,
    {
        nombre : "Noah" ,
        apellido: "Sevilla",
        edad : 16,
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
    //clientes mayores de edad

     const totalClientes = clientes.concat(clientesExtranjeros) ;
     console.log (totalClientes);


      const clientesMayorEdad = totalClientes.filter ((curr) => {
          return curr.edad > 18
      })
      console.log(clientesMayorEdad);


      //clientes menores de edad
      const clientesMenorEdad = totalClientes.filter ((curr) => {
        return curr.edad < 18
    })
    console.log(clientesMenorEdad);





     //servicios de uñas de mi proyecto

  const serviciosDisponibles = [ 
      { servicio: 'Uñas Acrilicas' ,
      precio : 2200},

      {servicio: 'Soft Gel',
      precio: 1900},

      {servicio: 'Semipermanentes manos',
      precio: 1200},
      { servicio: 'Semipermanentes pies',
      precio : 1000
      },
      { servicio: 'Semipermanentes manos y pies',
      precio : 2000
        
      },
      { servicio: 'Uñas Esculpidas',
      precio : 2300
        
      },
      
  ]
  console.log (serviciosDisponibles);
  const resultado = serviciosDisponibles.filter((curr) => 
  curr.servicio.includes ('Semipermanentes'));
console.log ( resultado)

// sube el precio de los servicios

const preciosActualizados = serviciosDisponibles.map((curr) =>
{
    return {
        servicio: curr.servicio,
        precio: curr.precio * 1.10
    }
});
console.log (preciosActualizados);