var numero = 0;
var nombreHeroe = '';
var datos = [];
var cantidad = 0;

async function randomheroe() {
    numero = 0;
    nombreHeroe = document.getElementById('name').value;
    const heroe = await fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c&nameStartsWith='+nombreHeroe);
    datos = await heroe.json();
    console.log(datos);
    cantidad = datos.data.total;
    console.log(cantidad);
    muestra();
}



function anterior() {
    numero--;
    if(numero < 0) {
        numero = cantidad - 1;
    }
    muestra();
}
function siguiente() {
    numero++;
    if(numero == cantidad ){
        numero = 0;
    }
    muestra();
}

function muestra() {
    console.log('Arreglo en la posicion '+numero)
    let foto = document.getElementById('foto');
    let nombre = document.getElementById('nombre');
    let descripcion = document.getElementById('descripcion');
    let extension = datos.data.results[numero].thumbnail.extension;
    foto.setAttribute('src', datos.data.results[numero].thumbnail.path+'.'+extension);
    nombre.innerHTML = datos.data.results[numero].name;
    descripcion.innerHTML = datos.data.results[numero].description;
}