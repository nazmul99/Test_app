<?php
session_start();
$postdata = file_get_contents("php://input");
$request = json_decode($postdata,true);
$data=array('sessionID'=>'','userID'=>'','userName'=>'','userRole'=>'','message'=>'');
if($request['username']=='a' && $request['password']=='aaaaaa')
{
	$_SESSION['ng_app']["userName"]="Nazmul";
	$_SESSION['ng_app']["userID"]="1";
	$_SESSION['ng_app']["userRole"]="Admin";
	$data=array('sessionID'=>'99n','userID'=>1,'userName'=>'Nazmul','userRole'=>'Admin','message'=>'Logged in Successfully!!');
}
else
	$data['message']="Incorrect Username or Password";
echo json_encode($data);
 ?>