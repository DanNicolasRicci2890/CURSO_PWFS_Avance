let productos = [
      {
            nombre:'Jugo',
            cantidad:4
      },
      {
            nombre:'Coca',
            cantidad:9
      },
      {
            nombre:'Soda',
            cantidad:6
      }
];

for (let i = 0 ; i < productos.length ; i++) {
      console.log(productos[i].nombre, " ---> ", productos[i].cantidad);
}

for (let i = 0 ; i < productos.length ; i++) {
      if (productos[i].nombre === 'Jugo') {
            productos[i].cantidad *= 9;
      }
}

for (let i = 0 ; i < productos.length ; i++) {
      console.log(productos[i].nombre, " ---> ", productos[i].cantidad);
}


