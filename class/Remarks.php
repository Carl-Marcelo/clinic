<?php

require_once '../connect.php';
require_once 'ClassParent.php';

class Remarks extends ClassParent
{
    public $pk = null;
    public $remarks_name = null;
    public $remarks_date = null;

    public function __construct(
                                $pk,
                                $remarks_name,
                                $remarks_date
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

    public function add_remarks()
    {
        date_default_timezone_set('Asia/Manila');
        $remarks_date = date('Y-m-d H:i:s');
        $sql = <<<EOT
        INSERT INTO remarks (
            remarks_name,
            remarks_date
        ) VALUES (
            '$this->remarks_name',
            '$remarks_date'
        );
EOT;

        return ClassParent::insert($sql);
    }

    public function fetch_remarks()
    {
        $sql = <<<EOT
            SELECT
                id,
                pk,
                remarks_name,
                remarks_date
            FROM remarks;
EOT;

        return ClassParent::get($sql);
    }

    public function get_remarks()
    {
        $sql = <<<EOT
        SELECT
            id,
            pk,
            remarks,
            remarks_date
        FROM remarks;
EOT;

        return ClassParent::get($sql);
    }
}
