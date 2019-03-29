CREATE DATABASE clinic;

CREATE TABLE admin (
  pk serial primary key,
  name varchar(255) NOT NULL,
  username varchar(255) NOT NULL,
  password varchar(255) NOT NULL
);

CREATE TABLE patients (                                                                                      
  pk serial primary key,           
  date_time timestamp NOT NULL,                                                                   
  first_name varchar(255) NOT NULL,                                                                             
  middle_name varchar(255) NOT NULL,                                                                            
  last_name varchar(255) NOT NULL,   
  age int NOT NULL,
  date_of_birth date NOT NULL,                                                                            
  gender varchar(255) NOT NULL,                                                                               
  contact varchar(255) NOT NULL, 
  email varchar(255) NOT NULL,                                                                               
  address varchar(255) NOT NULL
);  

INSERT INTO admin (name, username, password)
VALUES (
  'Rolando Romero', 'admin', 'adminpass123'
);

ALTER TABLE patients
ADD COLUMN ename varchar(255) NOT NULL;

ALTER TABLE patients
ADD COLUMN econtact varchar(255) NOT NULL;

ALTER TABLE patients
ADD COLUMN erelation varchar(255) NOT NULL;

ALTER TABLE patients
ADD COLUMN remarks varchar(255) NOT NULL;