<?php

require_once '../connect.php';
require_once '../../class/Patients.php';

$class = new Patients(
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    );

$data = $class->get_patients();

header('HTTP/1.0 500 Error Displaying');
if ($data['status']) {
    header('HTTP/1.0 200 OK');
}

header('Content-Type: application/json');
echo json_encode($data);
