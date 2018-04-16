<?php
foreach ($_POST as $key => $value)
    $message .= "Field ".htmlspecialchars($key)." is ".htmlspecialchars($value)."<br>";

$headers = "From: " . strip_tags($_POST['email']) . "\r\n";
$headers .= "Reply-To: ". strip_tags($_POST['email']) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

mail('joel@bdindependent.com', 'Contact Submission from JoelHatmaker.com', $message, $headers);
echo 'done';
die();
?>