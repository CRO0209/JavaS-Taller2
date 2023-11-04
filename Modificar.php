<?php
// Obtén los datos enviados desde la solicitud AJAX
$id = $_POST['id'];
$descripcion = $_POST['descripcion'];
$dias = $_POST['dias'];
$fechaInicio = $_POST['fechaInicio'];
$fechaFin = $_POST['fechaFin'];
$responsable = $_POST['responsable'];

// Realiza la conexión a la base de datos
$servername = "localhost";
$username = "id19274826_root";
$password = "Carlsd02..";
$dbname = "id19274826_prueba";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica si hay errores en la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Actualiza el registro en la base de datos
$sql = "UPDATE tabla SET descripcion='$descripcion', dias='$dias', fecha_inicio='$fechaInicio', fecha_fin='$fechaFin', responsable='$responsable' WHERE id='$id'";

if ($conn->query($sql) === TRUE) {
    echo "Registro actualizado exitosamente";
} else {
    echo "Error al actualizar el registro: " . $conn->error;
}

// Cierra la conexión a la base de datos
$conn->close();
?>
