<?php

require_once '../connect.php';
require_once 'ClassParent.php';

class Schedule extends ClassParent
{
    public $pk = null;
    public $name = null;
    public $set_date = null;
    public $set_time = null;
    public $dentist = null;

    public function __construct(
                                $pk,
                                $name,
                                $set_date,
                                $set_time,
                                $dentist
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

    public function add_schedule()
    {
        $sql = <<<EOT
        INSERT INTO schedule (
          name,
          set_date,
          set_time,
          dentist
        ) VALUES (
            '$this->name',
            '$this->set_date',
            '$this->set_time',
            '$this->dentist'
        );
EOT;

        return ClassParent::insert($sql);
    }

    public function fetch_schedule()
    {
        $sql = <<<EOT
        SELECT
            pk,
            name,
            set_date,
            set_time,
            dentist
        FROM schedule;
EOT;

        return ClassParent::get($sql);
    }

    public function delete_schedule()
    {
        $sql = <<<EOT
        DELETE FROM schedule
        WHERE pk = $this->pk;
EOT;

        return ClassParent::insert($sql);
    }
}
