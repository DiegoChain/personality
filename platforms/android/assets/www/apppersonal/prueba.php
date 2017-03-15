<?php 
	
	include('connect.php');
// $condobd nombre de la base de datos

	
		$consulta5 = mysqli_query($personalbd,"select * from personal WHERE fchbaja = '0000-00-00'");
			while($filas=mysqli_fetch_array($consulta5)){
				$fecha = $filas["fchingreso"];
				
				$mesingreso = date("n",strtotime($fecha));
				$anioingreso = date("Y",strtotime($fecha));
				$diaingreso = date("j",strtotime($fecha));
				
				echo "Fecha ".$fecha ." ".gettype($fecha)."<br/>";
				echo "Mes ".$mesingreso ." ".gettype($mesingreso)."<br/>";
				echo "Anio ".$anioingreso ." ".gettype($anioingreso)."<br/>";
				echo "Dia ".$diaingreso ." ".gettype($diaingreso)."<br/>";
				echo "<br/>";
		}
		
	
	
		
			mysqli_close($personalbd);
		
		header('Content-type: application/json');
		header("Access-Control-Allow-Origin: *");
	
?>