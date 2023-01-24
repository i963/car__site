<?php

ini_set('display_errors','On');
error_reporting('E_ALL');

$name = $_POST['name'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$name = htmlspecialchars($name);
$lastname = htmlspecialchars($lastname);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);
$message = htmlspecialchars($message);

$name = urldecode($name);
$lastname = urldecode($lastname);
$email = urldecode($email);
$phone = urldecode($phone);
$message = urldecode($message);

$name = trim($name);
$lastname = trim($lastname);
$email = trim($email);
$phone = trim($phone);
$message = trim($message);


echo $name;
echo "<br>";
echo $lastname;
echo "<br>";
echo $email;
echo "<br>";
echo $phone;
echo "<br>";
echo $message;

if (mail("fnane.login@gmail.com", "Application form", 
"Name:.$name.", "Lastname:.$lastname.",
"From (e-mail):.$email.",
"Phone:.$phone.",
"Message:.$message." ))
{     echo "Your message was send successfully";
} else {
   echo "There were errors in sending the message";
}

// добавить html код


?>