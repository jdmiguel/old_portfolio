<?php 
$to = "jaimedmiguel@gmail.com"; 

$name = $_POST['name'];
$email = $_POST['email']; 
$message = $_POST['message'];

$headers  = "MIME-Version: 1.0\n";
$headers .= "Content-type: text/plain; charset=iso-8859-1\n";
$headers .= "X-Priority: 3\n";
$headers .= "X-MSMail-Priority: Normal\n";
$headers .= "X-Mailer: php\n";
$headers .= "From: \"".$fromname."\" <".$fromaddress.">\n";
   
$subject = "MENSAJE DESDE FORMULARIO JDMIGUEL"; 
$fields = array(); 
$fields{"name"} = "name"; 
$fields{"email"} = "email"; 
$fields{"message"} = "message";
$body = "Este es el mensaje enviado al rellenar el formulario de mi web:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_POST[$a]); }
$send = mail($to, $subject, $body, $headers);
?> 