const nombre = "Daniel"; //constante - No lo puedo modificar.
let edad = 46; // esta variable se puede modificar.

//variable global a todo el progama. 

//creamos un objeto Json como constante
const daniel = {
      nombre: 'Daniel',
      apellido: 'Ricci',
      edad: 46,
      lenguajes: [
            {
                  codigo:'Js',
                  experiencia: 4
            },
            {
                  codigo:'C/C++',
                  experiencia: 7
            },     
            {
                  codigo:'Java',
                  experiencia: 9
            },                        
            {
                  codigo:'C#',
                  experiencia: 10
            }
      ],
      hobby: [
            'futbol', 'Artes Marciales'
      ]
};

console.log(nombre);
console.log(edad);
console.log(daniel);