<?php

// require_once '../connect.php';
// require_once '../../class/Patients.php';

// $class = new Patients(
//                         $_POST['pk'],
//                         null,
//                         $_POST['last_name'],
//                         $_POST['middle_name'],
//                         $_POST['first_name'],
//                         $_POST['age'],
//                         $_POST['date_of_birth'],
//                         $_POST['gender'],
//                         $_POST['contact'],
//                         $_POST['email'],
//                         $_POST['address'],
//                         $_POST['ename'],
//                         $_POST['econtact'],
//                         $_POST['erelation'],
//                         $_POST['remarks']
//                     );

// $datas = $class->login();

// header('HTTP/1.0 404     Error Saving');
// if ($datas['status']) {
//     // If success data from database set coockie.
//     $pk = 'pk';
//     setcookie($pk, $datas['result'][0]['id'], time() + 7200000, '/');

//     header('HTTP/1.0 200 OK');
// }

// header('Content-Type: application/json');
// echo json_encode($datas);
