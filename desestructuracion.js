const deadpool = {
    nombre: 'Wade',
    apellido: "Winston",
    poder: 'Regeneración',
    //edad: 50
    getNombre (){
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
};
console.log(deadpool.getNombre());
/*
const nombre = deadpool.nombre; 
const apellido = deadpool.apellido;
const poder = deadpool.poder;
*/
/*const { nombre, apellido, poder } = deadpool;
console.log(nombre, apellido, poder);   */

function imprimeHereo ({
    nombre, apellido, poder, edad = 0
}){
    /*const {
        nombre, apellido, poder, edad = 0
    } = heroe;*/
    console.log(nombre, apellido, poder, edad);    
}
//imprimeHereo(deadpool);

const heroes = ["Deadpool", "Superman", "Batman"];
const [h1, h2, h3] = heroes;
console.log(h1, h2, h3);
