<?php
$servername = "localhost";
$username = "id19274826_root";
$password = "Carlsd02..";
$dbname = "id19274826_prueba";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

$sql = "SELECT * FROM tabla";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row['id'] . "<br>";
        echo "Descripción: " . $row['descripcion'] . "<br>";
        echo "Días: " . $row['dias'] . "<br>";
        echo "Fecha de inicio: " . $row['fecha_inicio'] . "<br>";
        echo "Fecha de fin: " . $row['fecha_fin'] . "<br>";
        echo "Responsable: " . $row['responsable'] . "<br>";
        echo "<br>";
    }
} else {
    echo "No se encontraron registros";
}

$conn->close();
?>
