<?php

// dito mag ccheck kung meron bang cookie na nakaset
$pk = 'pk';

if (isset($_COOKIE[$pk]) && !empty($_COOKIE[$pk])) {
    setcookie($pk, $_COOKIE[$pk], time() + 7200000, '/');
    header('HTTP/1.0 200 OK');

    header('Content-Type: application/json');
    echo 
            json_encode(
                        array(
                                $pk => $_COOKIE[$pk],
                            )
                    )
        ;
} else {
    header('HTTP/1.0 404 No active session');
}
