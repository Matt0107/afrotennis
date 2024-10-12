<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collecter les données du formulaire
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Adresse email de destination
    $to = "hello@afrotennis.com";

    // Sujet de l'email
    $email_subject = "New Contact Message from $name: $subject";

    // Contenu de l'email
    $email_body = "You have received a new message from the contact form on AfroTennis.\n\n".
                  "Name: $name\n".
                  "Email: $email\n".
                  "Subject: $subject\n\n".
                  "Message:\n$message";

    // En-têtes de l'email
    $headers = "From: $email\n";
    $headers .= "Reply-To: $email";

    // Envoyer l'email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message sending failed.";
    }
} else {
    echo "Invalid request method.";
}
?>
