<?php

// CONEXIÓN A LA BASE DE DATOS
$host = "127.0.0.1";
$user = "root";
$pass = "Collialan2004"; // tu contraseña
$db   = "formulario_contacto";
$port = 3306;

$conn = new mysqli($host, $user, $pass, $db, $port);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// VALIDAR MÉTODO POST

if ($_SERVER["REQUEST_METHOD"] !== "POST" || empty($_POST)) {
    die("Acceso no permitido");
}


// RECIBIR DATOS

$nombre   = $_POST["nombre"] ?? "";
$apellido = $_POST["apellido"] ?? "";
$email    = $_POST["email"] ?? "";
$tipo     = $_POST["tipo"] ?? "";
$mensaje  = $_POST["mensaje"] ?? "";
$autorizo = isset($_POST["autorizo"]) ? 1 : 0;


// INSERTAR EN LA BD

$sql = "INSERT INTO mensajes 
        (nombre, apellido, email, tipo, mensaje, autorizo)
        VALUES (?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

if (!$stmt) {
    die("Error en prepare(): " . $conn->error);
}

$stmt->bind_param(
    "sssssi",
    $nombre,
    $apellido,
    $email,
    $tipo,
    $mensaje,
    $autorizo
);

if ($stmt->execute()) {
    // ÉXITO → regresar al formulario
    header("Location: index.html?success=1");
    exit;
} else {
    echo "Error al guardar: " . $stmt->error;
}

$stmt->close();
$conn->close();