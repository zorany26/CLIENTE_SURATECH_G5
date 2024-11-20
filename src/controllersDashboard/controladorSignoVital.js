let signosVitales = [
    {
        nombres: "Presión Arterial",
        valor: "120/80 mmHg",
        fechaMedida: "2024-11-15"
    },
    {
        nombres: "Frecuencia Cardiaca",
        valor: "72 latidos/minuto",
        fechaMedida: "2024-11-14"
    },
    {
        nombres: "Temperatura Corporal",
        valor: "36.5 °C",
        fechaMedida: "2024-11-13"
    },
    {
        nombres: "Frecuencia Respiratoria",
        valor: "16 respiraciones/minuto",
        fechaMedida: "2024-11-12"
    }
];

// Crear una referencia a una etiqueta HTML donde vamos a renderizar
let fila = document.getElementById("fila");

// Recorrer los datos para generar las tarjetas
signosVitales.forEach(function(signo) {
    // Crear columnas
    let columna = document.createElement("div");
    columna.classList.add("col-md-4", "mb-4");

    // Crear tarjetas
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "p-3", "h-100", "shadow");

    // Crear etiquetas para los atributos
    let nombres = document.createElement("h5");
    nombres.textContent = `Tipo: ${signo.nombres}`;

    let valor = document.createElement("p");
    valor.textContent = `Valor: ${signo.valor}`;

    let fechaMedida = document.createElement("p");
    fechaMedida.textContent = `Fecha de medida: ${signo.fechaMedida}`;

    // Ordenar elementos en la tarjeta
    tarjeta.appendChild(nombres);
    tarjeta.appendChild(valor);
    tarjeta.appendChild(fechaMedida);

    // Agregar la tarjeta a la columna
    columna.appendChild(tarjeta);

    // Agregar la columna a la fila
    fila.appendChild(columna);
});