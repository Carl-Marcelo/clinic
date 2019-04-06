<?php

require_once '../connect.php';
require_once '../../class/Admin.php';

$class = new Admin(
                    $_POST['pk'],
                    $_POST['username'],
                    $_POST['password']
                  );

$data = $class->login();

header('HTTP/1.0 404 Error Login');
if ($data['status']) {
    header('HTTP/1.0 200 OK');
    // If success data from database set cookie.
    $pk = 'pk';
    setcookie($pk, $data['result'][0]['pk'], time() + 7200000, '/');

    header('HTTP/1.0 200 OK');
}

header('Content-Type: application/json');
echo json_encode($data);
