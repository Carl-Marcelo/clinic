<?php

require_once '../connect.php';
require_once '../../class/Remarks.php';

$class = new Remarks(
                        $_POST['pk'],
                        null,
                        $_POST['remarks_name'],
                        $_POST['remarks_comment']
                    );

$data = $class->add_remarks();

header('HTTP/1.0 500 Error Saving');
if ($data['status']) {
    header('HTTP/1.0 200 OK');
}

header('Content-Type: application/json');
echo json_encode($data);
