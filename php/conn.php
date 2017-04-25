<?php

	$conn = @mysql_connect('127.0.0.1','root','123456') or die('error connecting'. mysql_error());
	mysql_select_db('mydb', $conn);

    mysql_query("set names utf8;")
?>