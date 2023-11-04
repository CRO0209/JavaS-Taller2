<?php
// Obtén el ID del registro a eliminar enviado desde la solicitud AJAX
$id = $_POST['id'];

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

// Elimina el registro de la base de datos
$sql = "DELETE FROM tabla WHERE id='$id'";

if ($conn->query($sql) === TRUE) {
    echo "Registro eliminado exitosamente";
} else {
    echo "Error al eliminar el registro: " . $conn->error;
}

// Cierra la conexión a la base de datos
$conn->close();
?>
