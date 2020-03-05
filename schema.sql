DROP DATABASE  IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon; 

CREATE TABLE products(
    item_id int not null auto_increment,
    product_name varchar(150) not null,
    department varchar(150) not null,
    price decimal(5,2) not null,
    quantity int not null,
    primary key(item_id)
); 

