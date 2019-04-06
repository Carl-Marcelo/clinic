<?php

$pk = 'pk';
if (isset($_COOKIE[$pk]) && !empty($_COOKIE[$pk])) {
    setcookie($pk, $_COOKIE[$pk], time() - 7200000, '/');
    unset($_COOKIE[$pk]);
    header('HTTP/1.0 200 OK');

    header('Content-Type: application/json');
} else {
    header('HTTP/1.0 404 No active session');
}
