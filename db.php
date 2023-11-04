<?php
// guardar_actividad.php

// Obtén los datos enviados desde la solicitud AJAX
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

// Inserta los datos en la base de datos
$sql = "INSERT INTO tabla (descripcion, dias, fecha_inicio, fecha_fin, responsable) VALUES ('$descripcion', '$dias', '$fechaInicio', '$fechaFin', '$responsable')";

if ($conn->query($sql) === TRUE) {
    echo "Registro de actividad exitoso";
} else {
    echo "Error al registrar la actividad: " . $conn->error;
}

// Cierra la conexión a la base de datos
$conn->close();
?>
