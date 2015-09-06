<?php
$cookie_name = "kombatsave";
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	
	$data = json_decode(file_get_contents('php://input'), true);
	
	
	if(!isset($_COOKIE[$cookie_name])) {
		$cookie_value = json_encode($data);
		setcookie($cookie_name, $cookie_value, time() + (86400*30), "/");
		
	} else {
		$currentcookie = $_COOKIE[$cookie_name];
		$cookie_new_value = json_encode($data);
		setcookie($cookie_name, $cookie_new_value, time() + (86400*30), "/");
		$cookie = $_COOKIE[$cookie_name];
		$cookie = stripslashes($cookie);
		$savedCardArray = json_decode($cookie, true);
		echo "Data saved";
	}

	
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET'){
	$q = $_REQUEST['q'];
	if($q == "getData"){
		if(!isset($_COOKIE[$cookie_name])){
			echo "false";
		} else {
			$cookie = $_COOKIE[$cookie_name];
			echo $cookie;
		}
	} elseif($q == "check"){
		if(!isset($_COOKIE[$cookie_name])){
			echo "false";
		} else {
			echo "true";
		}
	}

}

?>