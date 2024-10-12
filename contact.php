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

    // Envoi de l'email
    if (mail($to, $subject, $fullMessage, $headers)) {
        // Redirection vers la page de succès
        header("Location: https://www.afrotennis.com/contact-success");
        exit(); // Assurez-vous que le script s'arrête après la redirection
    } else {
        echo "Failed to send message.";
    }
} else {
    echo "Invalid request.";
}
