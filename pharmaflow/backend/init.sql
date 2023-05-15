CREATE TABLE customer_prescription_invoice (
    customer_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15),
    email VARCHAR(50),
    date_of_birth DATE,
    prescription_id INT,
    prescription_name VARCHAR(255),
    prescription_quantity INT,
    prescription_frequency INT,
    invoice_number INT,
    order_date DATE,
    total_cost DECIMAL(8,2),
    CHECK (prescription_quantity <= (SELECT quantity_in_stock FROM product WHERE product_number = prescription_id))
);

CREATE TABLE employee_pharmacy (
    employee_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15),
    email VARCHAR(50),
    hire_date DATE,
    pharmacy_id INT,
    position VARCHAR(50),
    salary DECIMAL(8,2)
);

CREATE TABLE product (
    product_number INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    brand VARCHAR(50),
    description VARCHAR(255),
    category VARCHAR(50),
    price DECIMAL(8, 2),
    quantity_in_stock INT NOT NULL,
    supplier_id INT
);

CREATE TABLE supplier (
    supplier_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(255),
    phone_number VARCHAR(15),
    email VARCHAR(50),
    website VARCHAR(50)
);

CREATE TABLE pharmacy_order (
    order_id INT PRIMARY KEY,
    order_date DATE,
    supplier_id INT,
    total_cost DECIMAL(8,2),
    CHECK (order_date >= DATEADD(day, (SELECT prescription_frequency FROM customer_prescription_invoice WHERE customer_id = (SELECT customer_id FROM customer_prescription_invoice)), (SELECT MAX(order_date) FROM pharmacy_order WHERE order_id = (SELECT MAX(order_id) FROM pharmacy_order))))
);

CREATE TABLE order_line_item (
    order_id INT,
    product_number INT,
    quantity INT,
    FOREIGN KEY (order_id) REFERENCES pharmacy_order(order_id),
    FOREIGN KEY (product_number) REFERENCES product(product_number),
    CHECK (quantity <= (SELECT quantity_in_stock FROM product WHERE product_number = product_number))
);

CREATE TABLE invoice_line_item (
    invoice_number INT,
    product_number INT,
    quantity_ordered INT,
    FOREIGN KEY (invoice_number) REFERENCES customer_prescription_invoice(invoice_number),
    FOREIGN KEY (product_number) REFERENCES product(product_number),
    CHECK (quantity_ordered = (SELECT prescription_quantity FROM customer_prescription_invoice WHERE invoice_number = invoice_number)),
    CHECK (product_number = (SELECT prescription_id FROM customer_prescription_invoice WHERE invoice_number = invoice_number))
);

CREATE TABLE pharmacy (
    pharmacy_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(255),
    phone_number VARCHAR(15),
    email VARCHAR(50),
    website VARCHAR(50),
    opening_hours VARCHAR(50)
);
