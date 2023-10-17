const form = document.querySelector('.form');
const id_foto_label = document.querySelector('.id_foto');
const nombre_foto_input = document.querySelector('.nombre_foto');
const id_receta_select = document.querySelector('.id_receta');
const url_imagen_input = document.querySelector('.url_imagen');

let fotos = JSON.parse(localStorage.getItem('fotos')) || [];
let recetas = JSON.parse(localStorage.getItem('recetas')) || [];

const id_foto = fotos.length + 1;

var html = "";
var idFoto = document.getElementById("idFoto");

html += "<label id='idFoto'> Foto Nº: " + JSON.stringify(id_foto) + "</label>";
idFoto.innerHTML = html;

// Cargar las recetas al campo 'select'
recetas.forEach((receta) => {
    const option = document.createElement("option");
    option.value = receta.id_receta;
    option.text = receta.nombre_receta;
    id_receta_select.appendChild(option);
});

btnAceptar.addEventListener('click', guardarFoto);
console.log(fotos)
function guardarFoto(event) {
  event.preventDefault();

  const nombre_foto = nombre_foto_input.value;
  const id_receta = id_receta_select.value; // Obtener el valor seleccionado en el 'select'
  const url_imagen = url_imagen_input.value;

  const foto = {
    id_foto,
    nombre_foto,
    id_receta,
    url_imagen,
  };

  fotos.push(foto);

  localStorage.setItem('fotos', JSON.stringify(fotos));

  form.reset();

  alert('Foto guardada correctamente');

  window.location.reload();
}