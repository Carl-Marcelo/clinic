<?php

require_once '../connect.php';
require_once '../../class/Schedule.php';

$class = new Schedule(
                      null,
                      null,
                      null,
                      null,
                      null
                    );

$data = $class->fetch_schedule();

header('HTTP/1.0 500 Error Saving');
if ($data['status']) {
    header('HTTP/1.0 200 OK');
}

header('Content-Type: application/json');
echo json_encode($data);
