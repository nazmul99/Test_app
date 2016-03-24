<?php

session_start();
$data=array('sessionID'=>'','userID'=>'','userName'=>'','userRole'=>'','message'=>'');
if(isset($_SESSION['ng_app'])){
	$_SESSION['ng_app']["userName"]="Nazmul";
	$_SESSION['ng_app']["userID"]="1";
	$_SESSION['ng_app']["userRole"]="Admin";
	$data=array('sessionID'=>'Nazmul99','userName'=>$_SESSION['ng_app']['userName'],'userID'=>$_SESSION['ng_app']['userID'],'userRole'=>$_SESSION['ng_app']['userRole']);
}

echo json_encode($data);

 ?>