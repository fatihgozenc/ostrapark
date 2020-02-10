<h1>hry</h1>

<?php
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['vorname']) && empty($_POST['useremail'])) die();

if ($_POST){

	http_response_code(200);
	$subject = "Sie haben eine Nachricht aus ostrapark-location.de";
	// $to = "info@ostrapark.de";
	$to = "hallo@goldendoor.group";
	// $to = "f.gozenc@narciss-taurus.de";
	$from = $_POST['useremail'];
	
	//DATA
	$location = $_POST['location'];
	$vorname = $_POST['vorname'];
	$nachname = $_POST['nachname'];
	$budget = $_POST['budget'];
	$teilnehmerzahl = $_POST['teilnehmerzahl'];
	$nachricht = $_POST['nachricht'];
	$acceptance = $_POST['acceptance'];
	
	$msg = "\r\nNachricht von " . $vorname . " " . $nachname . "\r\n\n";
	$msg.= "Location: " . $location . "\r\n\n";
	$msg.= "Budget: " . $budget . "\r\n\n";
	$msg.= "Teilnehmerzahl: " . $teilnehmerzahl . "\r\n\n";
	$msg.= "Nachricht: " . $nachricht;

	// HEADERS
	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/plain; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $msg, $headers);

	echo json_encode(array(
		"sent" => true
	));
} else {
	echo json_encode(["sent" => false, "message" => "Something went wrong"]);
}

?>
