<?php 
	
	include('connect.php');
// $condobd nombre de la base de datos

	$idpersonal = $_GET['personal'];
	$mes = $_GET['mes'];
	$anio = $_GET['anio'];
	$datos = array();
	$datos2 = array();
	
	$vaciartabla = mysqli_query($personalbd, "TRUNCATE TABLE blspago");
	
	if($idpersonal !== "0"){
	$consulta = mysqli_query($personalbd,"select * from faltas WHERE idpersonal = '$idpersonal' AND month(fechafalta)='$mes' AND year(fechafalta)='$anio'");
			while($filas=mysqli_fetch_array($consulta)){
				$idpersonal = $filas["idpersonal"];
				$nombre = $filas["nompersonal"];
				$tipofalta = $filas["tipofalta"];
				$nomfalta = $filas["nomfalta"];
				$fchfalta = $filas["fechafalta"];
				
				$consultasalario = mysqli_query($personalbd,"select * from personal WHERE idempleado = '$idpersonal' ");
			while($filas=mysqli_fetch_array($consultasalario)){
				$sueldo = $filas["sueldo"];
			}
				switch($tipofalta) {
				    case "1":
				        $monto = (($sueldo / 30) * 2)*-1;
				        break;
				    case "2":
				        $monto = (($sueldo / 30) * 1)*-1;
				        break;
				    case "3":
				        $monto = 0;
				        break;
    			}
				
				$ins2 = mysqli_query($personalbd,"INSERT INTO blspago(idpersonal,nompersonal,tipo,subtipo,fecha,monto) VALUES ('$idpersonal','$nombre','Falta','$nomfalta','$fchfalta','$monto')");
		}


	$consulta2 = mysqli_query($personalbd,"select * from adelantos WHERE idpersonal = '$idpersonal' AND month(fechaadelanto)='$mes' AND year(fechaadelanto)='$anio'");
			while($filas=mysqli_fetch_array($consulta2)){
				$idpersonal = $filas["idpersonal"];
				$nombre = $filas["nompersonal"];
				$monto = $filas["monto"];
				$fchadelanto = $filas["fechaadelanto"];
				
				$monto = $monto * -1;
				$ins3 = mysqli_query($personalbd,"INSERT INTO blspago(idpersonal,nompersonal,tipo,subtipo,fecha,monto) VALUES ('$idpersonal','$nombre','Adelanto','Adelanto de Sueldo','$fchadelanto','$monto')");
		}

	$consulta3 = mysqli_query($personalbd,"select * from otros WHERE idpersonal = '$idpersonal' AND month(fecha)='$mes' AND year(fecha)='$anio'");
			while($filas=mysqli_fetch_array($consulta3)){
				$idpersonal = $filas["idpersonal"];
				$nombre = $filas["nompersonal"];
				$monto = $filas["monto"];
				$fecha = $filas["fecha"];
				$detalle = $filas["detalle"];
				
				$ins4 = mysqli_query($personalbd,"INSERT INTO blspago(idpersonal,nompersonal,tipo,subtipo,fecha,monto) VALUES ('$idpersonal','$nombre','Otros','$detalle','$fecha','$monto')");
		}
		
	$consulta4 = mysqli_query($personalbd,"select * from quincenas WHERE idpersonal = '$idpersonal' AND month(fechaquincena)='$mes' AND year(fechaquincena)='$anio'");
			while($filas=mysqli_fetch_array($consulta4)){
				$idpersonal = $filas["idpersonal"];
				$nombre = $filas["nompersonal"];
				$monto = $filas["monto"];
				$fecha = $filas["fechaquincena"];
				
				$monto = $monto * -1;
				$ins5 = mysqli_query($personalbd,"INSERT INTO blspago(idpersonal,nompersonal,tipo,subtipo,fecha,monto) VALUES ('$idpersonal','$nombre','Quincena','Quincena del Mes','$fecha','$monto')");
		}


	$consulta5 = mysqli_query($personalbd,"select * from personal WHERE idempleado = '$idpersonal'");
			while($filas=mysqli_fetch_array($consulta5)){
				$idpersonal = $filas["idempleado"];
				$nombre = $filas["nomempleado"];
				$sueldo = $filas["sueldo"];
				$pasaje = $filas["pasaje"];
				$fecha = $filas["fchingreso"];
				
				$ins6 = mysqli_query($personalbd,"INSERT INTO blspago(idpersonal,nompersonal,tipo,subtipo,fecha,monto) VALUES ('$idpersonal','$nombre','Sueldo','','$fecha','$sueldo')");

				if($pasaje > 0){
					$ins7 = mysqli_query($personalbd,"INSERT INTO blspago(idpersonal,nompersonal,tipo,subtipo,fecha,monto) VALUES ('$idpersonal','$nombre','Pasaje','','$fecha','$pasaje')");
				
				}
		}
		
	}else{
		$consulta = mysqli_query($personalbd,"select * from faltas WHERE month(fechafalta)='$mes' AND year(fechafalta)='$anio'");
			while($filas=mysqli_fetch_array($consulta)){
				$idpersonal = $filas["idpersonal"];
				$nombre = $filas["nompersonal"];
				$tipofalta = $filas["tipofalta"];
				$nomfalta = $filas["nomfalta"];
				$fchfalta = $filas["fechafalta"];
				
				$consultasalario = mysqli_query($personalbd,"select * from personal WHERE idempleado = '$idpersonal' ");
			while($filas=mysqli_fetch_array($consultasalario)){
				$sueldo = $filas["sueldo"];
			}
				switch($tipofalta) {
				    case "1":
				        $monto = (($sueldo / 30) * 2)*-1;
				        break;
				    case "2":
				        $monto = (($sueldo / 30) * 1)*-1;
				        break;
				    case "3":
				        $monto = 0;
				        break;
    			}
				
				$ins2 = mysqli_query($personalbd,"INSERT INTO blspago(idpersonal,nompersonal,tipo,subtipo,fecha,monto) VALUES ('$idpersonal','$nombre','Falta','$nomfalta','$fchfalta','$monto')");
		}
		
		
		$consulta2 = mysqli_query($personalbd,"select * from adelantos WHERE month(fechaadelanto)='$mes' AND year(fechaadelanto)='$anio'");
			while($filas=mysqli_fetch_array($consulta2)){
				$idpersonal = $filas["idpersonal"];
				$nombre = $filas["nompersonal"];
				$monto = $filas["monto"];
				$fchadelanto = $filas["fechaadelanto"];
				
				$monto = $monto * -1;
				$ins3 = mysqli_query($personalbd,"INSERT INTO blspago(idpersonal,nompersonal,tipo,subtipo,fecha,monto) VALUES ('$idpersonal','$nombre','Adelanto','Adelanto de Sueldo','$fchadelanto','$monto')");
		}
		
		
		$consulta3 = mysqli_query($personalbd,"select * from otros WHERE month(fecha)='$mes' AND year(fecha)='$anio'");
			while($filas=mysqli_fetch_array($consulta3)){
				$idpersonal = $filas["idpersonal"];
				$nombre = $filas["nompersonal"];
				$monto = $filas["monto"];
				$fecha = $filas["fecha"];
				$detalle = $filas["detalle"];
				
				$ins4 = mysqli_query($personalbd,"INSERT INTO blspago(idpersonal,nompersonal,tipo,subtipo,fecha,monto) VALUES ('$idpersonal','$nombre','Otros','$detalle','$fecha','$monto')");
		}
		
		
		$consulta4 = mysqli_query($personalbd,"select * from quincenas WHERE month(fechaquincena)='$mes' AND year(fechaquincena)='$anio'");
			while($filas=mysqli_fetch_array($consulta4)){
				$idpersonal = $filas["idpersonal"];
				$nombre = $filas["nompersonal"];
				$monto = $filas["monto"];
				$fecha = $filas["fechaquincena"];
				
				$monto = $monto * -1;
				$ins5 = mysqli_query($personalbd,"INSERT INTO blspago(idpersonal,nompersonal,tipo,subtipo,fecha,monto) VALUES ('$idpersonal','$nombre','Quincena','Quincena del Mes','$fecha','$monto')");
		}


		$consulta5 = mysqli_query($personalbd,"select * from personal WHERE fchbaja = '0000-00-00'");
			while($filas=mysqli_fetch_array($consulta5)){
				$idpersonal = $filas["idempleado"];
				$nombre = $filas["nomempleado"];
				$sueldo = $filas["sueldo"];
				$pasaje = $filas["pasaje"];
				$fecha = $filas["fchingreso"];
					
				$mesingreso = date("n",strtotime($fecha));
				$anioingreso = date("Y",strtotime($fecha));
				$diaingreso = date("j",strtotime($fecha));
				
				$diastexto = "Dias Trabajados ";
				$sueldotrabajado = ($sueldo / 30) * intval($diaingreso);
				$pasajetrabajado = ($pasaje / 30) * intval($diaingreso);
				
					if($mesingreso == $mes){
						$ins6 = mysqli_query($personalbd,"INSERT INTO blspago(idpersonal,nompersonal,tipo,subtipo,fecha,monto) VALUES ('$idpersonal','$nombre','$diastexto','$diaingreso','$fecha','$sueldotrabajado')");
						
						if($pasaje > 0){
							$ins7 = mysqli_query($personalbd,"INSERT INTO blspago(idpersonal,nompersonal,tipo,subtipo,fecha,monto) VALUES ('$idpersonal','$nombre','Pasaje','','$fecha','$pasajetrabajado')");
				
						}
					}else{
						$ins6 = mysqli_query($personalbd,"INSERT INTO blspago(idpersonal,nompersonal,tipo,subtipo,fecha,monto) VALUES ('$idpersonal','$nombre','Sueldo','','$fecha','$sueldo')");
						if($pasaje > 0){
							$ins7 = mysqli_query($personalbd,"INSERT INTO blspago(idpersonal,nompersonal,tipo,subtipo,fecha,monto) VALUES ('$idpersonal','$nombre','Pasaje','','$fecha','$pasaje')");
						}
					}
				
		}
		
	}
	
	
/*	$consulta6 = mysqli_query($personalbd,"select * from personal WHERE fchbaja = '0000-00-00'");
		while($filas=mysqli_fetch_object($consulta6)){
				$datos[] = array(
					'Id'=> $filas->idempleado,
					'Nombre'=>$filas->nomempleado
				);
				
				$idpers = $filas->idempleado;
*/
					$consulta7 = mysqli_query($personalbd,"select * from blspago ORDER BY idpersonal asc, tipo desc");
						while($filas2=mysqli_fetch_object($consulta7)){
							$monto = str_pad(trim($filas2->monto),20," ",STR_PAD_LEFT);

							$datos[] = array(
								'Id'=> $filas2->idpersonal,
								'Nombre'=>$filas2->nompersonal,
								'Tipo'=>$filas2->tipo,
								'Subtipo'=>$filas2->subtipo,
								'Fecha'=>$filas2->fecha,
								'Monto'=>$filas2->monto,
								'Monto2'=>$monto
							);
						}
				
//		}
		
	
		
		
		
			/*convierte los resultados a formato json*/
				$resultadosJson = json_encode($datos);
			/*muestra el resultado en un formato que no da problemas de seguridad en browsers */
				echo $_GET['jsoncallback'] . '(' . $resultadosJson . ');';
	
		

			mysqli_close($personalbd);
		
		header('Content-type: application/json');
		header("Access-Control-Allow-Origin: *");
	
?>