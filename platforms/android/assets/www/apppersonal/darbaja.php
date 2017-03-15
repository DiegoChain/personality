<?php 
	
	include('connect.php');
// $condobd nombre de la base de datos
	
	$idpersonal = $_GET['idpersonal'];
	$fecha = $_GET['fecha'];
	
	
	$actual = mysqli_query($personalbd,"UPDATE personal SET fchbaja = '$fecha' WHERE idempleado = '$idpersonal' ");
	

		if($actual){
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