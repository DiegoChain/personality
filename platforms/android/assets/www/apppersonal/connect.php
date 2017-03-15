<?php
# FileName="Connection_php_mysql.htm"
# Type="MYSQL"
# HTTP="true"
$hostname_personalbd = "condominioalejandria.ipagemysql.com";
$database_personalbd = "empleados_1";
$username_personalbd = "chain";
$password_personalbd = "Guinguis2017";

$personalbd=mysqli_connect($hostname_personalbd, $username_personalbd,$password_personalbd,$database_personalbd) or die ('No Hay Conexion a la base de Datos.');

?>