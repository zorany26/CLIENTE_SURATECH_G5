// let nombreMedico = document.getElementById("nombremedico");
// let matriculaMedico = document.getElementById("matriculamedico");
// let especialidadMedico = document.getElementById("especialidadmedico");
// let salarioMedico = document.getElementById("salariomedico");
// let correoMedico = document.getElementById("correomedico");
// let ipsMedico = document.getElementById("ipsmedico");
// let direccionMedico = document.getElementById("direccionmedico");
// let disponibilidadMedico = document.getElementById("disponibilidadmedico");
// let telefonoMedico = document.getElementById("telefonomedico");

// let botonRegistrarMedico = document.getElementById("botonregistromedico");

// botonRegistrarMedico.addEventListener("click", (evento) => {
//     evento.preventDefault();

//     let medico ={
//         nombre: nombreMedico.value,
//         matriculaProfesional: matriculaMedico.value,
//         especialidad: especialidadMedico.value,
//         salario: salarioMedico.value,
//         ips: ipsMedico.value,
//         correo: correoMedico.value,
//         telefono: telefonoMedico.value,
//         direccionConsultorio: direccionMedico.value,
//         finDeSemanaDisponible: disponibilidadMedico.value
//     }

//     console.log(medico);

//     Swal.fire({
//         title: "Registro exitoso",
//         text: "Se ha ingresado  el medico con exito",
//         icon: "success"
//       });
// });
let medicos = [
    {
        id: 201,
        nombre: "Dr. Juan Carlos Rodríguez",
        especialidad: "Cardiología",
        telefono: "310456789",
        correo: "juanc.rodriguez@medicos.com",
        hospital: "Clínica del Corazón",
        aniosExperiencia: 15
    },
    {
        id: 202,
        nombre: "Dra. María Fernanda Pérez",
        especialidad: "Pediatría",
        telefono: "312987654",
        correo: "mariaf.perez@hospitalninos.com",
        hospital: "Hospital Infantil",
        aniosExperiencia: 8
    },
    {
        id: 203,
        nombre: "Dr. Andrés Gómez",
        especialidad: "Dermatología",
        telefono: "317654321",
        correo: "andresg.derm@pielsalud.com",
        hospital: "Centro Dermatológico Nacional",
        aniosExperiencia: 10
    },
    {
        id: 204,
        nombre: "Dra. Laura Sánchez",
        especialidad: "Neurología",
        telefono: "311234567",
        correo: "laura.sanchez@neuroclinica.com",
        hospital: "NeuroClínica Internacional",
        aniosExperiencia: 12
    }
];

// Crear una referencia a una etiqueta HTML donde vamos a renderizar
let fila = document.getElementById("fila");

// Recorrer los datos para obtenerlos de forma separada
medicos.forEach(function(medico) {
    console.log(medico);
    // Crear columnas
    let columna = document.createElement("div");
    columna.classList.add("col");

    // Crear tarjetas
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "p-5", "h-1000", "shadow");

    // Crear una etiqueta para el nombre del médico
    let nombre = document.createElement("h2");
    nombre.textContent = medico.nombre;

    // Crear una etiqueta para la especialidad
    let especialidad = document.createElement("p");
    especialidad.textContent = `Especialidad: ${medico.especialidad}`;

    // Crear una etiqueta para el hospital
    let hospital = document.createElement("p");
    hospital.textContent = `Hospital: ${medico.hospital}`;

    // Crear una etiqueta para los años de experiencia
    let experiencia = document.createElement("p");
    experiencia.textContent = `Años de experiencia: ${medico.aniosExperiencia}`;

    // Ordenar los elementos en la tarjeta
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(especialidad);
    tarjeta.appendChild(hospital);
    tarjeta.appendChild(experiencia);

    // Agregar la tarjeta a la columna
    columna.appendChild(tarjeta);

    // Agregar la columna a la fila
    fila.appendChild(columna);
});