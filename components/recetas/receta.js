const form = document.querySelector('.form');
const id_receta_label = document.querySelector('.id_receta')
const nombre_receta_input = document.querySelector('.nombre_receta');
//const id_receta_input = document.querySelector('.id_receta')
// const url_imagen_input = document.querySelector('.url_imagen');


let recetas = JSON.parse(localStorage.getItem('recetas')) || [];

const id_receta = recetas.length + 1
var html = "";
console.log(id_receta)
var idReceta = document.getElementById("idReceta");
html += "<label id='idReceta'> Receta Nº: " + JSON.stringify(id_receta) + "</label>";
idReceta.innerHTML = html;

btnAceptar.addEventListener('click', guardarReceta);

function guardarReceta(event) {
    event.preventDefault();
    
    const nombre_receta = nombre_receta_input.value;
    //const id_receta = id_receta_input.value;
    // const url_imagen = url_imagen_input.value;
    
    const receta = {
      id_receta,
      nombre_receta,
      //url_imagen,
    };
    
    recetas.push(receta);
  
    localStorage.setItem('recetas', JSON.stringify(recetas));
  
    form.reset();
  
    alert('Receta guardada correctamente');
  
    window.location.reload()
  }