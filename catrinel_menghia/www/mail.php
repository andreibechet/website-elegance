<?php

$post_date = file_get_contents("php://input");
$data = json_decode($post_date);

$to = "elegance.contact@gmail.com ";
$subject = "Elegance-ama.ro: ".$data->subject;

$txt  = "Nume: ".$data->name." \r\n";
$txt .= "Subiect: ".$data->subject." \r\n";
$txt .= "Email: ".$data->email." \r\n";
$txt .= "Mesaj: ".$data->message." \r\n";


mail($to,$subject,$txt);

?>
