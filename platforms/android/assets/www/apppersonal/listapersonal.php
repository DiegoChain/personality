<?php 
	
	include('connect.php');
// $condobd nombre de la base de datos
	
	$datos = array();
		
	$consulta = mysqli_query($personalbd,"select * from personal WHERE fchbaja = '0000-00-00'");
		while($filas=mysqli_fetch_object($consulta)){
			$datos[] = array(
				'Id'=> $filas->idempleado,
				'Nombre'=>$filas->nomempleado
					);
		}

			echo ''.json_encode($datos).'';
			
			mysqli_close($personalbd);
		
		header('Content-type: application/json');
		header("Access-Control-Allow-Origin: *");
	
?>