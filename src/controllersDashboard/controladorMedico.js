let medicos = [
    {
        nombres: "Dr. Juan Carlos Rodríguez",
        matriculaProfesional: "1234567890",
        especialidad: "Cardiología",
        salario: "15000000",
        ips: "Clínica del Corazón",
        correo: "juanc.rodriguez@sura.com.co",
        telefono: "310456789",
        direccion: "Calle 45 No 10-50",
        disponibleFinSemana: true
    },
    {
        nombres: "Dra. María Fernanda Pérez",
        matriculaProfesional: "9876543210",
        especialidad: "Pediatría",
        salario: "13000000",
        ips: "Hospital Infantil",
        correo: "mariaf.perez@sura.com.co",
        telefono: "312987654",
        direccion: "Avenida 20 No 35-90",
        disponibleFinSemana: false
    },
    {
        nombres: "Dr. Andrés Gómez",
        matriculaProfesional: "1122334455",
        especialidad: "Dermatología",
        salario: "17000000",
        ips: "Centro Dermatológico Nacional",
        correo: "andresg.derm@sura.com.co",
        telefono: "317654321",
        direccion: "Carrera 8 No 18-30",
        disponibleFinSemana: true
    },
    {
        nombres: "Dra. Laura Sánchez",
        matriculaProfesional: "2233445566",
        especialidad: "Neurología",
        salario: "18000000",
        ips: "NeuroClínica Internacional",
        correo: "laura.sanchez@sura.com.co",
        telefono: "311234567",
        direccion: "Calle 25 No 40-60",
        disponibleFinSemana: true
    }
];

// Crear una referencia a una etiqueta HTML donde vamos a renderizar
let fila = document.getElementById("fila");

// Recorrer los datos para generar las tarjetas
medicos.forEach(function(medico) {
    // Crear columnas
    let columna = document.createElement("div");
    columna.classList.add("col-md-4", "mb-4");

    // Crear tarjetas
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "p-3", "h-100", "shadow");

    // Crear etiquetas para los atributos
    let nombres = document.createElement("h5");
    nombres.textContent = `Nombre: ${medico.nombres}`;

    let matriculaProfesional = document.createElement("p");
    matriculaProfesional.textContent = `Matrícula: ${medico.matriculaProfesional}`;

    let especialidad = document.createElement("p");
    especialidad.textContent = `Especialidad: ${medico.especialidad}`;

    let salario = document.createElement("p");
    salario.textContent = `Salario: ${medico.salario}`;

    let ips = document.createElement("p");
    ips.textContent = `IPS: ${medico.ips}`;

    let correo = document.createElement("p");
    correo.textContent = `Correo: ${medico.correo}`;

    let telefono = document.createElement("p");
    telefono.textContent = `Teléfono: ${medico.telefono}`;

    let direccion = document.createElement("p");
    direccion.textContent = `Dirección: ${medico.direccion}`;

    let disponibleFinSemana = document.createElement("p");
    disponibleFinSemana.textContent = `Disponible fin de semana: ${medico.disponibleFinSemana ? "Sí" : "No"}`;

    // Ordenar elementos en la tarjeta
    tarjeta.appendChild(nombres);
    tarjeta.appendChild(matriculaProfesional);
    tarjeta.appendChild(especialidad);
    tarjeta.appendChild(salario);
    tarjeta.appendChild(ips);
    tarjeta.appendChild(correo);
    tarjeta.appendChild(telefono);
    tarjeta.appendChild(direccion);
    tarjeta.appendChild(disponibleFinSemana);

    // Agregar la tarjeta a la columna
    columna.appendChild(tarjeta);

    // Agregar la columna a la fila
    fila.appendChild(columna);
});