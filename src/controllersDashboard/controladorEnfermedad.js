let enfermedades = [
    {
        id: 101,
        nombre: "Diabetes Mellitus",
        sintomas: "Sed excesiva, micción frecuente, fatiga",
        tratamiento: "Insulina, dieta, ejercicio",
        especialista: "Endocrinólogo",
        diagnostico: "2020-05-12"
    },
    {
        id: 102,
        nombre: "Hipertensión Arterial",
        sintomas: "Dolor de cabeza, mareos, visión borrosa",
        tratamiento: "Medicamentos antihipertensivos, cambios en el estilo de vida",
        especialista: "Cardiólogo",
        diagnostico: "2019-11-20"
    },
    {
        id: 103,
        nombre: "Asma",
        sintomas: "Dificultad para respirar, tos, opresión en el pecho",
        tratamiento: "Broncodilatadores, corticosteroides inhalados",
        especialista: "Neumólogo",
        diagnostico: "2018-08-15"
    },
    {
        id: 104,
        nombre: "Gripe Común",
        sintomas: "Fiebre, congestión nasal, dolor de garganta",
        tratamiento: "Descanso, líquidos, analgésicos",
        especialista: "Médico general",
        diagnostico: "2023-01-10"
    }
];

// Crear una referencia a una etiqueta HTML donde vamos a renderizar
let fila = document.getElementById("fila");

// Recorrer los datos para obtenerlos de forma separada
enfermedades.forEach(function(enfermedad) {
    console.log(enfermedad);
    // Crear columnas
    let columna = document.createElement("div");
    columna.classList.add("col");

    // Crear tarjetas
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "p-5", "h-1000", "shadow");

    // Crear una etiqueta para poner el nombre de la enfermedad
    let nombre = document.createElement("h2");
    nombre.textContent = enfermedad.nombre;

    // Crear una etiqueta para los síntomas +
    let sintomas = document.createElement("p");
    sintomas.textContent = `Síntomas: ${enfermedad.sintomas}`;

    // Crear una etiqueta para el tratamiento +
    let tratamiento = document.createElement("p");
    tratamiento.textContent = `Tratamiento: ${enfermedad.tratamiento}`;

    // Ordenar los elementos en la tarjeta
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(sintomas);
    tarjeta.appendChild(tratamiento);

    // Agregar la tarjeta a la columna +
    columna.appendChild(tarjeta);

    // Agregar la columna a la fila +
    fila.appendChild(columna);
});