<?php 
	
	include('connect.php');
// $condobd nombre de la base de datos
	
	$idpersonal = $_GET['idpersonal'];
	$nombrepersonal = $_GET['nombrepersonal'];
	$tipofalta = $_GET['tipofalta'];
	$nomfalta = $_GET['nomfalta'];
	$fechafalta = $_GET['fechafalta'];
		
	$ins2 = mysqli_query($personalbd,"INSERT INTO faltas(idpersonal,nompersonal,tipofalta,nomfalta,fechafalta) VALUES ('$idpersonal','$nombrepersonal','$tipofalta','$nomfalta','$fechafalta')");
	
		if($ins2){
			$mensaje = "ok";
		}else{
			$mensaje = "error";
		}
	
			/*convierte los resultados a formato json*/
				$resultadosJson = json_encode($mensaje);
			/*muestra el resultado en un formato que no da problemas de seguridad en browsers */
				echo $_GET['jsoncallback'] . '(' . $resultadosJson . ');';
	
		
		
			mysqli_close($personalbd);
		
		header('Content-type: application/json');
		header("Access-Control-Allow-Origin: *");
	
?>