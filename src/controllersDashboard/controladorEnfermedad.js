let enfermedades = [
    {
        nombre: "Diabetes Mellitus",
        sintomas: "Sed excesiva, micción frecuente, fatiga",
        clasificacion: "Crónica",
        grado: "Moderado",
        probabilidadVida: true
    },
    {
        nombre: "Hipertensión Arterial",
        sintomas: "Dolor de cabeza, mareos, visión borrosa",
        clasificacion: "Crónica",
        grado: "Severo",
        probabilidadVida: true
    },
    {
        nombre: "Asma",
        sintomas: "Dificultad para respirar, tos, opresión en el pecho",
        clasificacion: "Crónica",
        grado: "Leve",
        probabilidadVida: true
    },
    {
        nombre: "Gripe Común",
        sintomas: "Fiebre, congestión nasal, dolor de garganta",
        clasificacion: "Aguda",
        grado: "Leve",
        probabilidadVida: true
    }
];

// Crear una referencia a una etiqueta HTML donde vamos a renderizar
let fila = document.getElementById("fila");

// Recorrer los datos para generar las tarjetas
enfermedades.forEach(function(enfermedad) {
    // Crear columnas
    let columna = document.createElement("div");
    columna.classList.add("col-md-4", "mb-4");

    // Crear tarjetas
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "p-3", "h-100", "shadow");

    // Crear etiquetas para los atributos
    let nombre = document.createElement("h5");
    nombre.textContent = `${enfermedad.nombre}`;

    let sintomas = document.createElement("p");
    sintomas.textContent = `Síntomas: ${enfermedad.sintomas}`;

    let clasificacion = document.createElement("p");
    clasificacion.textContent = `Clasificación: ${enfermedad.clasificacion}`;

    let grado = document.createElement("p");
    grado.textContent = `Grado: ${enfermedad.grado}`;

    let probabilidadVida = document.createElement("p");
    probabilidadVida.textContent = `Probabilidad de Vida: ${enfermedad.probabilidadVida ? "Alta" : "Baja"}`;

    // Ordenar elementos en la tarjeta
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(sintomas);
    tarjeta.appendChild(clasificacion);
    tarjeta.appendChild(grado);
    tarjeta.appendChild(probabilidadVida);

    // Agregar la tarjeta a la columna
    columna.appendChild(tarjeta);

    // Agregar la columna a la fila
    fila.appendChild(columna);
});