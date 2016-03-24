<?php
session_start();
$data=array();
if(isset($_SESSION['ng_app'])){
	if(isset($_GET)){
		for($i=0;$i<3;$i++){
			for($j=0;$j<5;$j++){
				$data["T".$i][]=array('name'=>"Test ".$i."-".$j,'link'=>"#".$i."-".$j);
			}
		}
	}
}
echo json_encode($data);
 ?>