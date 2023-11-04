
document.getElementById("actividadForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Obtén los valores de los campos del formulario
    var descripcion = document.getElementById("descripcion").value;
    var dias = document.getElementById("dias").value;
    var fechaInicio = document.getElementById("fechaInicio").value;
    var fechaFin = document.getElementById("fechaFin").value;
    var responsable = document.getElementById("responsable").value;

    // Crea un objeto con los datos a enviar al servidor
    var datos = {
        descripcion: descripcion,
        dias: dias,
        fechaInicio: fechaInicio,
        fechaFin: fechaFin,
        responsable: responsable
    };

    // Envía los datos al servidor utilizando AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "db.php", true); // Reemplaza "guardar_actividad.php" con la ruta correcta al archivo PHP
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // La solicitud se completó correctamente
            var respuesta = xhr.responseText;
            // Actualiza la interfaz de usuario según la respuesta del servidor
            // Por ejemplo, muestra un mensaje de éxito o error
            alert(respuesta);
        }
    };
    xhr.send("descripcion=" + descripcion + "&dias=" + dias + "&fechaInicio=" + fechaInicio + "&fechaFin=" + fechaFin + "&responsable=" + responsable);
});

function modificarRegistro() {
    // Obtén los datos del formulario
    var id = document.getElementById('id-M').value;
    var descripcion = document.getElementById('descripcion-M').value;
    var dias = document.getElementById('dias-M').value;
    var fechaInicio = document.getElementById('fechaInicio-M').value;
    var fechaFin = document.getElementById('fechaFin-M').value;
    var responsable = document.getElementById('responsable-M').value;

    // Realiza la petición AJAX para modificar el registro
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "Modificar.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.send("id=" + id + "&descripcion=" + descripcion + "&dias=" + dias + "&fechaInicio=" + fechaInicio + "&fechaFin=" + fechaFin + "&responsable=" + responsable);
}

function eliminarRegistro() {
    // Obtén el ID del registro a eliminar
    var id = document.getElementById('id-Eliminar').value;

    // Realiza la petición AJAX para eliminar el registro
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "Eliminar.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.send("id=" + id);
}

window.onload = function () {
    // Realiza la petición AJAX para consultar los registros
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "Ver.php", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var registros = xhr.responseText;
            console.log(registros);
            var registrosHTML = '';
            for (var i = 0; i < registros.length; i++) {
                registrosHTML += '<div>ID: ' + registros[i].id + '</div>';
                registrosHTML += '<div>Descripción: ' + registros[i].descripcion + '</div>';
                registrosHTML += '<div>Días: ' + registros[i].dias + '</div>';
                registrosHTML += '<div>Fecha de inicio: ' + registros[i].fecha_inicio + '</div>';
                registrosHTML += '<div>Fecha de fin: ' + registros[i].fecha_fin + '</div>';
                registrosHTML += '<div>Responsable: ' + registros[i].responsable + '</div>';
                registrosHTML += '<br>';
                registros;
            }
            document.getElementById('registros').innerHTML = registros;
        }
    };
    xhr.send();
}

