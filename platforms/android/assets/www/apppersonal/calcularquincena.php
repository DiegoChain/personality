<?php 
	
	include('connect.php');
// $condobd nombre de la base de datos
	
	$idpersonal = $_GET['idpersonal'];
	
	$consulta = mysqli_query($personalbd,"select * from personal WHERE 	idempleado = '$idpersonal'");
		while($filas = mysqli_fetch_array($consulta)){
			$sueldo = $filas['sueldo'];
		}
		
		$quincena = $sueldo * 0.4;
		
			/*convierte los resultados a formato json*/
				$resultadosJson = json_encode($quincena);
			/*muestra el resultado en un formato que no da problemas de seguridad en browsers */
				echo $_GET['jsoncallback'] . '(' . $resultadosJson . ');';
	
		
		
			mysqli_close($personalbd);
		
		header('Content-type: application/json');
		header("Access-Control-Allow-Origin: *");
	
?>