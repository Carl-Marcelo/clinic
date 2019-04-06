<?php

require_once '../connect.php';
require_once '../../class/Patients.php';

$class = new Patients(
                        $_POST['pk'],
                        null,
                        $_POST['last_name'],
                        $_POST['middle_name'],
                        $_POST['first_name'],
                        $_POST['age'],
                        $_POST['date_of_birth'],
                        $_POST['gender'],
                        $_POST['contact'],
                        $_POST['email'],
                        $_POST['address'],
                        $_POST['ename'],
                        $_POST['econtact'],
                        $_POST['erelation'],
                        $_POST['remarks']
                    );

$data = $class->delete_patients();

header('HTTP/1.0 500 Error Deleting');
if ($data['status']) {
    header('HTTP/1.0 200 OK');
}

header('Content-Type: application/json');
echo json_encode($data);
