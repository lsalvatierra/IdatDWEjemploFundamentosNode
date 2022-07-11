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
const getEmpleado = (id, callback) =>{
    const empleado = empleados.find(e => e.id === id)?.nombre;
    if(empleado){
        callback(null, empleado);
    }else{
        callback(`Empleado con ID ${id} no existe`);
    }
}

const getSalario = (id, callback) =>{
    const salario = salarios.find(e => e.id === id)?.salario;
    if(salario){
        callback(null, salario);
    }else{
        callback(`No existe salario con el ID ${id}`);
    }
}
const id = 10;
getEmpleado(id, (err, empleado) => {
    if(err){
        console.log('Error');
        return console.log(err);
    }
    getSalario(id, (err, salario) => {
        if(err){
            return console.log(err);
        }
        //console.log(salario);
        console.log('El empleado: '+ empleado + ' tiene un salario de: '+salario);
    });
    
});

//console.log(getEmpleado(13));