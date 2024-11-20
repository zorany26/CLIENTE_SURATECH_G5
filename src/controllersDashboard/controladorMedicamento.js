let medicamentos = [
    {
        nombre: "Paracetamol",
        presentacion: "Tabletas de 500 mg",
        dosis: 500.0,
        laboratorio: "Laboratorios Bayer",
        fechaCaducidad: "2025-12-30",
        contraindicaciones: "No usar en casos de insuficiencia hepática",
        registro: "INVIMA 2019M-001156-R2",
        tieneCopago: true
    },
    {
        nombre: "Ibuprofeno",
        presentacion: "Tabletas de 400 mg",
        dosis: 400.0,
        laboratorio: "Laboratorios Pfizer",
        fechaCaducidad: "2024-07-15",
        contraindicaciones: "No usar en caso de úlceras gástricas",
        registro: "INVIMA 2018M-002045-R2",
        tieneCopago: true
    },
    {
        nombre: "Amoxicilina",
        presentacion: "Cápsulas de 500 mg",
        dosis: 500.0,
        laboratorio: "Laboratorios Roche",
        fechaCaducidad: "2026-03-22",
        contraindicaciones: "Alergia a los antibióticos beta-lactámicos",
        registro: "INVIMA 2020M-003599-R2",
        tieneCopago: false
    },
    {
        nombre: "Loratadina",
        presentacion: "Tabletas de 10 mg",
        dosis: 10.0,
        laboratorio: "Laboratorios Novartis",
        fechaCaducidad: "2025-09-10",
        contraindicaciones: "Evitar en personas con insuficiencia hepática",
        registro: "INVIMA 2017M-000987-R1",
        tieneCopago: false
    }
];

// Crear una referencia a una etiqueta HTML donde vamos a renderizar
let fila = document.getElementById("fila");

// Recorrer los datos para generar las tarjetas
medicamentos.forEach(function(medicamento) {
    // Crear columnas
    let columna = document.createElement("div");
    columna.classList.add("col-md-4", "mb-4");

    // Crear tarjetas
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "p-3", "h-100", "shadow");

    // Crear etiquetas para los atributos
    let nombre = document.createElement("h5");
    nombre.textContent = `Nombre: ${medicamento.nombre}`;

    let presentacion = document.createElement("p");
    presentacion.textContent = `Presentación: ${medicamento.presentacion}`;

    let dosis = document.createElement("p");
    dosis.textContent = `Dosis: ${medicamento.dosis} mg`;

    let laboratorio = document.createElement("p");
    laboratorio.textContent = `Laboratorio: ${medicamento.laboratorio}`;

    let fechaCaducidad = document.createElement("p");
    fechaCaducidad.textContent = `Fecha de Caducidad: ${medicamento.fechaCaducidad}`;

    let contraindicaciones = document.createElement("p");
    contraindicaciones.textContent = `Contraindicaciones: ${medicamento.contraindicaciones}`;

    let registro = document.createElement("p");
    registro.textContent = `Registro: ${medicamento.registro}`;

    let tieneCopago = document.createElement("p");
    tieneCopago.textContent = `Copago: ${medicamento.tieneCopago ? "Sí" : "No"}`;

    // Ordenar elementos en la tarjeta
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(presentacion);
    tarjeta.appendChild(dosis);
    tarjeta.appendChild(laboratorio);
    tarjeta.appendChild(fechaCaducidad);
    tarjeta.appendChild(contraindicaciones);
    tarjeta.appendChild(registro);
    tarjeta.appendChild(tieneCopago);

    // Agregar la tarjeta a la columna
    columna.appendChild(tarjeta);

    // Agregar la columna a la fila
    fila.appendChild(columna);
});