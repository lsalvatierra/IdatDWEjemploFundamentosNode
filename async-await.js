const empleados = [
    {
        id: 1, 
        nombre: 'Luis'
    },
    {
        id: 2, 
        nombre: 'Isis'
    },
    {
        id: 3, 
        nombre: 'Carlos'
    }
];
const salarios = [
    {
        id: 1, 
        salario: 1800
    },
    {
        id: 2, 
        salario: 2500
    }
];

const getEmpleado = (id) =>{
    
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;
        (empleado) ? 
            resolve(empleado) : reject(`Empleado con ID ${id} no existe`);
    });

}

const getSalario = (id) =>{
    
    return new Promise((resolve, reject) => {
        const salario = salarios.find(e => e.id === id)?.salario;
        (salario) ? 
            resolve(salario) : reject(`Salario con ID ${id} no existe`);
    });

}
const id = 4;
const getInfoUsuario = async() => {
    try{
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El empleado ${empleado} tienen un salario de: ${salario}`;
    }catch(error){
        throw error;
    }
}

getInfoUsuario().then(msg =>  console.log(msg)).catch(err => console.log(err));