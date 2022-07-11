// setTimeout(() => {
//     console.log('Hola mundo');
// }, 1000);
//Son funciones que se mandan como argumento a otra función
const getUsuarioById = (id
    //,callback
    ) =>{
    const usuario = {
        id,
        nombre: 'Luis'
    }
    setTimeout(()=> {
        console.log(usuario)
        //callback(usuario);
    }, 1500);
}
getUsuarioById(19);
// getUsuarioById(10, (usuario) =>{
//     console.log(usuario);
// });