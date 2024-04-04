<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Change the email address to the department's email address
    $to = "jones94@uwindsor.ca";
    $subject = "Contact Form Submission";
    $body = "Name: $name\nEmail: $email\n\n$message";

    if (mail($to, $subject, $body)) {
        echo "Message sent successfully.";
    } else {
        echo "Failed to send message.";
    }
} else {
    echo "Invalid request.";
}
?>