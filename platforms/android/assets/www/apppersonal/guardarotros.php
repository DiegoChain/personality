<?php 
	
	include('connect.php');
// $condobd nombre de la base de datos
	
	$idpersonal = $_GET['idpersonal'];
	$nombrepersonal = $_GET['nombrepersonal'];
	$monto = $_GET['monto'];
	$detalle = $_GET['detalle'];
	$fecha = $_GET['fecha'];
		
	$ins2 = mysqli_query($personalbd,"INSERT INTO otros(idpersonal,nompersonal,detalle,fecha,monto) VALUES ('$idpersonal','$nombrepersonal','$detalle','$fecha','$monto')");
	
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