<?php
  $host = 'host = localhost';
  $port = 'port = 5432';
  $user = 'user = postgres';
  $pass = 'password = postgresql';
  $dbname = 'dbname = clinic';

  $conn = pg_connect("$host $port $user $pass $dbname");