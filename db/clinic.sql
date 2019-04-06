CREATE DATABASE clinic;

-- CREATE EXTENSION pgcrypto;

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
  age integer NOT NULL,
  date_of_birth date NOT NULL,                                                                            
  gender varchar(255) NOT NULL,                                                                               
  contact varchar(255) NOT NULL, 
  email varchar(255) NOT NULL,                                                                               
  address varchar(255) NOT NULL,
  ename varchar(255) NOT NULL,
  econtact varchar(255) NOT NULL,
  erelation varchar(255) NOT NULL
);  

CREATE TABLE remarks (
  id serial primary key,
  pk integer REFERENCES patients(pk),
  remarks_name varchar(255) NOT NULL,
  remarks_date timestamp NOT NULL
);

INSERT INTO admin (name, username, password) 
VALUES ('Rolando Romero', 'admin', 'adminpassword123');

-- INSERT INTO admin (name, username, password) 
-- VALUES ('Rolando Romero', 'admin', crypt('adminpassword123', gen_salt('bf', 8)));