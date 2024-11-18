// let fechaToma = document.getElementById("fechatoma");
// let descripcion = document.getElementById("descripcion");
// let signoVital = document.getElementById("signovital");

// let botonRegistrarSignovital = document.getElementById("botonregistrosignovital");

// botonRegistrarSignovital.addEventListener("click", (evento) => {
//     evento.preventDefault();
    
//     let tomaSignoVital = {
//         nombre: fechaToma.value,
//         valor: descripcion.value,
//         fechaMedida: signoVital.value
//     }

//     console.log(tomaSignoVital);

//     Swal.fire({
//         title: "Registro exitoso",
//         text: "Se ha regitrado signo vital con exito",
//         icon: "success"
//       });
// });
let signosVitales = [
    {
        id: 1,
        tipo: "Presión Arterial",
        valor: "120/80 mmHg",
        unidad: "mmHg",
        fechaRegistro: "2024-11-15",
        observaciones: "Normal"
    },
    {
        id: 2,
        tipo: "Frecuencia Cardiaca",
        valor: "72",
        unidad: "latidos/minuto",
        fechaRegistro: "2024-11-14",
        observaciones: "Dentro del rango"
    },
    {
        id: 3,
        tipo: "Temperatura Corporal",
        valor: "36.5",
        unidad: "°C",
        fechaRegistro: "2024-11-13",
        observaciones: "Sin fiebre"
    },
    {
        id: 4,
        tipo: "Frecuencia Respiratoria",
        valor: "16",
        unidad: "respiraciones/minuto",
        fechaRegistro: "2024-11-12",
        observaciones: "Normal"
    }
];

// Crear una referencia a una etiqueta HTML donde vamos a renderizar
let fila = document.getElementById("fila");

// Recorrer los datos para obtenerlos de forma separada
signosVitales.forEach(function(signo) {
    console.log(signo);
    // Crear columnas
    let columna = document.createElement("div");
    columna.classList.add("col");

    // Crear tarjetas
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "p-5", "h-1000", "shadow");

    // Crear una etiqueta para el tipo de signo vital
    let tipo = document.createElement("h2");
    tipo.textContent = signo.tipo;

    // Crear una etiqueta para el valor del signo vital
    let valor = document.createElement("p");
    valor.textContent = `Valor: ${signo.valor} ${signo.unidad}`;

    // Crear una etiqueta para la fecha de registro
    let fechaRegistro = document.createElement("p");
    fechaRegistro.textContent = `Fecha: ${signo.fechaRegistro}`;

    // Crear una etiqueta para observaciones
    let observaciones = document.createElement("p");
    observaciones.textContent = `Observaciones: ${signo.observaciones}`;

    // Ordenar los elementos en la tarjeta
    tarjeta.appendChild(tipo);
    tarjeta.appendChild(valor);
    tarjeta.appendChild(fechaRegistro);
    tarjeta.appendChild(observaciones);

    // Agregar la tarjeta a la columna
    columna.appendChild(tarjeta);

    // Agregar la columna a la fila
    fila.appendChild(columna);
});