<?php
// Ajout des en-têtes CORS pour permettre l'accès cross-origin
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Vérifier que le formulaire est soumis en méthode POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "hello@afrotennis.com"; // Remplacez par votre adresse email
    $headers = "From: $email";
    $fullMessage = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    if (mail($to, $subject, $fullMessage, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
} else {
    echo "Invalid request.";
}
