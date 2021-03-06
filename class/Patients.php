<?php

require_once '../connect.php';
require_once 'ClassParent.php';

class Patients extends ClassParent
{
    public $pk = null;
    public $date = null;
    public $last_name = null;
    public $middle_name = null;
    public $first_name = null;
    public $age = null;
    public $date_of_birth = null;
    public $gender = null;
    public $contact = null;
    public $email = null;
    public $address = null;
    public $ename = null;
    public $econtact = null;
    public $erelation = null;

    public function __construct(
                                $pk,
                                $date,
                                $last_name,
                                $middle_name,
                                $first_name,
                                $age,
                                $date_of_birth,
                                $gender,
                                $contact,
                                $email,
                                $address,
                                $ename,
                                $econtact,
                                $erelation
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

    public function add_patients()
    {
        date_default_timezone_set('Asia/Manila');
        $date = date('Y-m-d H:i:s');
        $sql = <<<EOT
        INSERT INTO patients (
            date_time,
            last_name,
            middle_name,
            first_name, 
            age,
            date_of_birth,
            gender,
            contact,
            email,
            address,
            ename,
            econtact,
            erelation
        ) VALUES (
            '$date',
            '$this->last_name',
            '$this->middle_name',
            '$this->first_name',
            '$this->age',
            '$this->date_of_birth',
            '$this->gender',
            '$this->contact',
            '$this->email',
            '$this->address',
            '$this->ename',
            '$this->econtact',
            '$this->erelation'
        );
EOT;

        return ClassParent::insert($sql);
    }

    public function fetch_patients()
    {
        $sql = <<<EOT
        SELECT
            pk,
            date_time,
            last_name,
            middle_name,
            first_name,
            age,
            date_of_birth,
            gender,
            contact,
            email,
            address,
            ename,
            econtact,
            erelation
        FROM patients;
EOT;

        return ClassParent::get($sql);
    }

    public function delete_patients()
    {
        $sql = <<<EOT
        DELETE FROM patients
        WHERE pk = $this->pk;
EOT;

        return ClassParent::insert($sql);
    }

    public function update_patients()
    {
        date_default_timezone_set('Asia/Manila');
        $date = date('Y-m-d H:i:s');
        $sql = <<<EOT
        UPDATE patients
        SET (
            date_time,
            last_name,
            middle_name,
            first_name,
            age,
            date_of_birth,
            gender,
            contact,
            email,
            address,
            ename,
            econtact,
            erelation
            )
        =
            (
            '$date',
            '$this->last_name',
            '$this->middle_name',
            '$this->first_name',
            '$this->age',
            '$this->date_of_birth',
            '$this->gender',
            '$this->contact',
            '$this->email',
            '$this->address',
            '$this->ename',
            '$this->econtact',
            '$this->erelation'
            )
        WHERE pk = $this->pk;
EOT;

        return ClassParent::update($sql);
    }
}
