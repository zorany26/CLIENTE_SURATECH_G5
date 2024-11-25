//PASOS PARA CONSUMIR API CON JS
export async function getBuscarPacientes() {
    
    //1. Se configura la url del servicio que se desea consumir (PA ONDE VA MIJO)
    const url = "http://localhost:8080/api/paciente";
    
    //2. Se crea una función que se encargue de consumir el servicio(Se configura la peticion del servicio a consumir(A QUE VAS PA ALLA OME))
    
    let peticion ={
        method: 'GET'
    }
    //3. Se exporta la función para que pueda ser utilizada en cualquier parte del proyecto (consumir el api(VAYA PA ALLA MIJO)) 
    let respuestaServidor=await fetch(url, peticion)
    let pacientes=await respuestaServidor.json()
    return pacientes;
}