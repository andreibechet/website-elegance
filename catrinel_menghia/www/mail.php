<?php

/**
*   Send mail on form submit.
*/

if (isset($_SERVER['HTTP_ORIGIN'])) {
  header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
  header('Access-Control-Allow-Credentials: true');
  header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers:
        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

$post_date = file_get_contents("php://input");
$data = json_decode($post_date);

$to = "elegance.contact@gmail.com";
$subject = "Elegance-ama.ro: ".$data->subject;

$txt  = "Nume: ".$data->name." \r\n";
$txt .= "Subiect: ".$data->subject." \r\n";
$txt .= "Email: ".$data->email." \r\n";
$txt .= "Mesaj: ".$data->message." \r\n";

$headers  = 'From: Elegance Website' . "\r\n";
$headers .= "Reply-To:".$data->email . "\r\n";

mail($to,$subject,$txt,$headers);

?>
