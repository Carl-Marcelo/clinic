<?php

require_once '../connect.php';
require_once '../../class/Schedule.php';

$class = new Schedule(
                        $_POST['pk'],
                        $_POST['name'],
                        $_POST['set_date'],
                        $_POST['set_time'],
                        $_POST['dentist']
                    );

$data = $class->add_schedule();

header('HTTP/1.0 500 Error Saving');
if ($data['status']) {
    header('HTTP/1.0 200 OK');
}

header('Content-Type: application/json');
echo json_encode($data);
