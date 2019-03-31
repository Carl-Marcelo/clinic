<?php

require_once 'ClassParent.php';

class Admin extends ClassParent
{
    public $pk = null;
    public $username = null;
    public $password = null;

    public function __construct(
                                $pk,
                                $username,
                                $password
                            ) {
        $fields = get_defined_vars();

        if (empty($fields)) {
            return false;
        }

        foreach ($fields as $k => $v) {
            $this->$k = pg_escape_string(trim(strip_tags($v)));
        }

        return true;
    }

    public function login()
    {
        $sql = <<<EOT
        SELECT *
        FROM admin
        WHERE 
            username = '$this->username'
        AND
            password = '$this->password'

EOT;

        return ClassParent::get($sql);
    }
}
