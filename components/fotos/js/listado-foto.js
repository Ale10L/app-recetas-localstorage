document.addEventListener("DOMContentLoaded", function () {
    var listadoFoto = document.getElementById("listado");

    // Obtener usuarios del localStorage
    var fotos = obtenerFotosLocalStorage();

    // Mostrar usuarios en la tabla
    mostrarFotos(fotos);

    function obtenerFotosLocalStorage() {
        var fotos = localStorage.getItem("fotos");
        if (fotos) {
            return JSON.parse(fotos);
        } else {
            return [];
        }
    }

    function mostrarFotos(fotos) {
        var html = "";
        fotos.forEach(function (foto) {
            html += "<tr>";
            html += "<td class='text-center text-white'>" + foto.id_foto + "</td>";
            html += "<td class='text-center text-white'>" + foto.nombre_foto + "</td>";
            html += "<td class='text-center text-white'><img src='" + foto.url_imagen + "' alt='Foto de receta'></td>";
            html += "</tr>";
        });
        listadoFoto.innerHTML = html;
    }
});