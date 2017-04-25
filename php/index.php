<?php
    header("Content-Type:text/html;charset=UTF-8");
	$result = array();

	include 'conn.php';

	$rs = mysql_query("select count(*) from cpb");
	$row = mysql_fetch_row($rs);
	$rs = mysql_query("select * from cpb");

	$items = array();
	while($row = mysql_fetch_object($rs)){
		array_push($items, $row);
	}
	$result = $items;
	echo json_encode($result);
?>