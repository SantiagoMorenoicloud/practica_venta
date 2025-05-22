CREATE DATABASE IF NOT EXISTS cliente_db;
USE cliente_db;

create table cliente_db (
    id int auto_increment primary key,
    nombre varchar(100),
    email varchar(100),
    telefono varchar(20)
);
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_prod varchar(100),
    stock INT,
    precio decimal(10,2)
);