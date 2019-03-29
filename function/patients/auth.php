<?php

require_once '../connect.php';
require_once '../../class/Patients.php';

$data = array();
foreach($_POST as $k=>$v){
    $data[$k]=$v;
}
$class = new Patients(
                  $data
                    );

$datas = $class->login($data);

header('HTTP/1.0 500 Error Saving');
if ($datas['status']) {
    // pag nag success may nakita sa database mag sset cookie tayo.
    $pk = 'pk'; 
    setcookie($pk, $datas['result'][0]['id'], time()+7200000, '/');
    
    header('HTTP/1.0 200 OK');
}

header('Content-Type: application/json');
echo json_encode($datas);
