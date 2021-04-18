
let personas = [
      {apellido:"Ricci", nombre:"Daniel", nombre2:"Nicolás" },
      {apellido:"Desani", nombre:"Carla", nombre2:"Giselle" },
      {apellido:"Ricci", nombre:"Alejandro", nombre2:"Gerardo"},
      {apellido:"Furasa", nombre:"Eduardo", nombre2:"Jose" },
      {apellido:"Rodriguez", nombre:"Marcelo", nombre2:"Pedro"},
      {apellido:"Ricci", nombre:"Alejandro", nombre2:"Francisco"},
      {apellido:"Rocci", nombre:"Marcela", nombre2:"Josefina"},
      {apellido:"Artiano", nombre:"Jose", nombre2:"Pedro"}
];

ImprimirPersonas(personas);
console.log("\n");
BurbujaEfecto();
console.log("\n");
ImprimirPersonas(personas);


//---------------------------------------------------------------------------

function BurbujaEfecto() {
      let fot = true;

      while(fot) {
            fot = false;
            for(let i = 0 ; i < (personas.length - 1); i++) {
                  if (VerificarPersonas(personas[i], personas[i + 1])) {
                        let aux = personas[i];
                        personas[i] = personas[i + 1];
                        personas[i + 1] = aux;
                        fot = true;
                  }
            }
      }
}

function VerificarPersonas(A, B) {
      let x = "", y = "";
      let num = 0;
      let final = false;

      while(num != 3) {
            switch(num) {
                  case(0): x = A.apellido, y = B.apellido; break;
                  case(1): x = A.nombre, y = B.nombre; break;
                  case(2): x = A.nombre2, y = B.nombre2; break;
            }      
            if (VerificarDato(x, y) == 1) {
                  num = 3;
                  final = true;
            } else {
                  if (VerificarDato(x, y) == -1) { num = 3; }
                  else { num += 1; }
            }
      }
      return (final);      
}

function VerificarDato(a, b) {
      let val = 0;
      if (a > b) { val = 1; }
      else {
            if (a < b) { val = -1; }            
      }
      return (val);
}

function ImprimirPersonas(pers) {
      for(let i = 0; i < pers.length ; i++) {
            let dato = pers[i];
            console.log(dato.apellido,", ",dato.nombre," ",dato.nombre2);
      }
}
