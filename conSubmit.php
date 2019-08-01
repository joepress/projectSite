<?php
if(!isset($_POST['email]))
{
	echo "error; you forgot something";
}	
$name = $_POST['name'];
$visitor = $_POST['email'];
$message = $_POST['message'];

if(empty($name)|| empty($email)))
{
	echo "Name and email are mandatory";
	exit;
}

if(!preg_match(
	"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
	$visitor
))
{
	$errors .= "\n Error: Invalid email address";
}

$email_from = 'j.press1622@yahoo.com';
$email_subject = "New form submission";
$email_body = "You have received a message from $name.\n".
							"email address: $visitor_email\n".
							"Here is the message: \n $message".

$to = "j.press1622@yahoo.com";
$headers = "From: $email_from \r\n";

mail($to,$email_subject,$email_body,$headers);

?>