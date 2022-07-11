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
const id = 2;
// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));


const getSalario = (id) =>{
    
    return new Promise((resolve, reject) => {
        const salario = salarios.find(e => e.id === id)?.salario;
        (salario) ? 
            resolve(salario) : reject(`Salario con ID ${id} no existe`);
    });

}
// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err));
let nombre; 
getEmpleado(id)
    .then(empleado =>  {
        nombre = empleado;
        return getSalario(id) 
    })
    .then(salario => console.log("El empleado: ",nombre, " tiene un salario de:", salario))
    .catch(err => console.log(err));
