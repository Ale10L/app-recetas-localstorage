document.addEventListener("DOMContentLoaded", function () {
    var listadoReceta = document.getElementById("listado");

    // Obtener usuarios del localStorage
    var recetas = obtenerRecetasLocalStorage();

    // Mostrar usuarios en la tabla
    mostrarrecetas(recetas);

    function obtenerRecetasLocalStorage() {
        var recetas = localStorage.getItem("recetas");
        if (recetas) {
            return JSON.parse(recetas);
        } else {
            return [];
        }
    }

    function mostrarrecetas(recetas) {
        var html = "";
        recetas.forEach(function (receta) {
            html += "<tr>";
            html += "<td class='text-center text-white'>" + receta.id_receta + "</td>";
            html += "<td class='text-center text-white'>" + receta.nombre_receta + "</td>";
            html += "</tr>";
        });
        listadoReceta.innerHTML = html;
    }
});