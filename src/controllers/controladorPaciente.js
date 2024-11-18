//Objetivo: Capturar los datos de un formulario

//1. por cada input, select, texarea del formulario se crea una avariable;
//2. Por cada variable debo utilizar el DOM para asociar el html con js;
/*let nombrePaciente = document.getElementById("nombrepaciente");
let nacimietoPaciente = document.getElementById("nacimientopaciente");
let ciudadPaciente = document.getElementById("ciudadpaciente");
let correoPaciente = document.getElementById("correopaciente");
let telefonoPaciente = document.getElementById("telefonopaciente");
let ipsPaciente = document.getElementById("ipspaciente");
let grupoIngresosPaciente = document.getElementById("grupoingresospaciente");
let afiliacionPaciente = document.getElementById("afiiacionpaciente");
let polizaPaciente = document.getElementById("polizapaciente");


//3. Crear una variable para asociarla al id del boton que se tiene en el html
let botonRegistrarPaciente = document.getElementById("botonregistropaciente");

//4. Detectamos acciones o eventos en el boton
botonRegistrarPaciente.addEventListener("click", (evento)=>{
    evento.preventDefault();//Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.

    //5.Se crea un JSON que capture datos del formulario
    let paciente = {
        nombre : nombrePaciente.value, //El orden de las llaves no importa, sim embargo el nombre debe coincidir con el del backEnd
        anioNacimiento : nacimietoPaciente.value,
        ciudad : ciudadPaciente.value,
        correo : correoPaciente.value,
        telefono : telefonoPaciente.value,
        ips : ipsPaciente.value,
        poliza : polizaPaciente.value,
        grupoIngresos : grupoIngresosPaciente.value,
        fechaAfiliacion : afiliacionPaciente.value 
    }

    //6.  Se envia el JSON a la API(se envia datos al back)
    console.dir(paciente);
    console.log(paciente);
        


    Swal.fire({
        title: "Registro exitoso",
        text: "Ya eres parte de nuestra gran familia",
        icon: "success"
      });
});
*/

//OBJETIVO:Recibir datos del BACK y hacerles render(render=PINTARLOS)
//1.Quemar o simular los datos
let paciente=[
    {
        id:890,
        nombre:"Brad Alexis Gallego",
        anioNacimiento:"1989-06-23",
        ciudad:"Medellin",
        correo:"bebeshito69@hotmail.com",
        telefono:"321654987",
        ips:"San Ignacio" ,
        poliza:true,
        grupoIngresos:"C",
        fechaAfiliacion:"2021-04-26"
    },
    {
        id:891,
        nombre:"Laura Marcela Torres",
        anioNacimiento:"1990-11-15",
        ciudad:"Bogotá",
        correo:"laura.torres90@gmail.com",
        telefono:"310123456",
        ips:"SaludTotal",
        poliza:false,
        grupoIngresos:"B",
        fechaAfiliacion:"2022-08-14"
    },
    {
        id:892,
        nombre:"Carlos Andrés Mejía",
        anioNacimiento:"1985-03-02",
        ciudad:"Cali",
        correo:"carlosmejia85@yahoo.com",
        telefono:"312789123",
        ips:"Compensar",
        poliza:true,
        grupoIngresos:"A",
        fechaAfiliacion:"2020-01-05"
    },
    {
        id:893,
        nombre:"Diana Patricia Gómez",
        anioNacimiento:"1993-07-09",
        ciudad:"Barranquilla",
        correo:"diana.gomez93@outlook.com",
        telefono:"316987321",
        ips:"Coomeva",
        poliza:false,
        grupoIngresos:"C",
        fechaAfiliacion:"2019-06-17"
    }

]

//2.Crear una referencia a una etiqueta html donde vamos a renderizar
let fila=document.getElementById("fila")

//3.Se recorren los datos para obtenerlos de forma separada
paciente.forEach(function(paciente){
    console.log(paciente)
    //4.Se crean columnas
    let columna=document.createElement("div")
    columna.classList.add("col")
     //5.Se crean tarjetas
     let tarjeta=document.createElement("div")
     tarjeta.classList.add("card","p-5","h-1000","shadow")
    //6.Se crea una etiqueta para poner el nombre del paciente
    let nombre=document.createElement("h2")
    nombre.textContent=paciente.nombre

    //Paso final(ordenando las cartas)
    tarjeta.appendChild(nombre)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    
})