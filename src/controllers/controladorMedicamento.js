// let nombreMedicamento = document.getElementById("nombremedicamento");
// let presentacion = document.getElementById("presentacionmedicamento");
// let dosis = document.getElementById("dosismedicamento");
// let laboratorio = document.getElementById("laboratoriomedicamento");
// let fechaCaducidad = document.getElementById("caducidadmedicamanto");
// let contraindicaciones = document.getElementById("contraindicacionesmedicamento");
// let regInvima = document.getElementById("invimamedicamento");
// let copago = document.getElementById("copagomedicamento");

// let botonRegistrarMedicamento = document.getElementById("botonregistromedicamento");

// botonRegistrarMedicamento.addEventListener("click", (evento) => {
//     evento.preventDefault();

//     let medicamento = {
//         nombre: nombreMedicamento.value,
//         presentacion: presentacion.value,
//         dosis: dosis.value,
//         laboratorio: laboratorio.value,
//         fechaCaducidad: fechaCaducidad.value,
//         contraIndicaciones: contraindicaciones.value,
//         registroInvima: regInvima.value,
//         copago: copago.value
//     }

//     console.log(medicamento);

//     Swal.fire({
//         title: "Registro exitoso",
//         text: "Se ha registrado  el medicamento con éxito",
//         icon: "success"
//       });
// });
let medicamentos = [
    {
        id: 501,
        nombre: "Paracetamol",
        descripcion: "Analgésico y antipirético para aliviar dolores leves y fiebre.",
        dosis: "500 mg cada 8 horas",
        fabricante: "Laboratorios Bayer",
        fechaExpiracion: "2025-12-30"
    },
    {
        id: 502,
        nombre: "Ibuprofeno",
        descripcion: "Antiinflamatorio no esteroideo para tratar inflamación y dolor.",
        dosis: "400 mg cada 6 horas",
        fabricante: "Laboratorios Pfizer",
        fechaExpiracion: "2024-07-15"
    },
    {
        id: 503,
        nombre: "Amoxicilina",
        descripcion: "Antibiótico usado para infecciones bacterianas.",
        dosis: "500 mg cada 8 horas",
        fabricante: "Laboratorios Roche",
        fechaExpiracion: "2026-03-22"
    },
    {
        id: 504,
        nombre: "Loratadina",
        descripcion: "Antihistamínico para aliviar alergias.",
        dosis: "10 mg una vez al día",
        fabricante: "Laboratorios Novartis",
        fechaExpiracion: "2025-09-10"
    }
];

// Crear una referencia a una etiqueta HTML donde vamos a renderizar
let fila = document.getElementById("fila");

// Recorrer los datos para obtenerlos de forma separada
medicamentos.forEach(function(medicamento) {
    console.log(medicamento);
    // Crear columnas
    let columna = document.createElement("div");
    columna.classList.add("col");

    // Crear tarjetas
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "p-5", "h-1000", "shadow");

    // Crear una etiqueta para el nombre del medicamento
    let nombre = document.createElement("h2");
    nombre.textContent = medicamento.nombre;

    // Crear una etiqueta para la descripción
    let descripcion = document.createElement("p");
    descripcion.textContent = `Descripción: ${medicamento.descripcion}`;

    // Crear una etiqueta para la dosis
    let dosis = document.createElement("p");
    dosis.textContent = `Dosis: ${medicamento.dosis}`;

    // Crear una etiqueta para el fabricante
    let fabricante = document.createElement("p");
    fabricante.textContent = `Fabricante: ${medicamento.fabricante}`;

    // Crear una etiqueta para la fecha de expiración
    let fechaExpiracion = document.createElement("p");
    fechaExpiracion.textContent = `Expira: ${medicamento.fechaExpiracion}`;

    // Ordenar los elementos en la tarjeta
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(dosis);
    tarjeta.appendChild(fabricante);
    tarjeta.appendChild(fechaExpiracion);

    // Agregar la tarjeta a la columna
    columna.appendChild(tarjeta);

    // Agregar la columna a la fila
    fila.appendChild(columna);
});