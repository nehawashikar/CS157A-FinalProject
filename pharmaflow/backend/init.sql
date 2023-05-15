CREATE TABLE customer_prescription_invoice (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Address VARCHAR(255) NOT NULL,
    PhoneNumber VARCHAR(15),
    Email VARCHAR(50),
    DateOfBirth DATE,
    PrescriptionID INT,
    PrescriptionQuantity INT,
    PrescriptionFrequency INT,
    PrescriptionName VARCHAR(255),
    InvoiceNumber INT,
    OrderDate DATE,
    TotalCost DECIMAL(8,2)
);

CREATE TABLE employee (
    EmployeeID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Address VARCHAR(255) NOT NULL,
    PhoneNumber VARCHAR(15),
    Email VARCHAR(50),
    HireDate DATE,
    PharmacyID INT,
    Position VARCHAR(50),
    Salary DECIMAL(8,2)
);

CREATE TABLE product (
    ProductNumber INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Brand VARCHAR(50),
    Description VARCHAR(255),
    Category VARCHAR(50),
    Price DECIMAL(8, 2),
    QuantityInStock INT NOT NULL,
    SupplierID INT
);

CREATE TABLE supplier (
    SupplierID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Address VARCHAR(255),
    PhoneNumber VARCHAR(15),
    Email VARCHAR(50),
    Website VARCHAR(50)
);

CREATE TABLE pharmacy_order (
    OrderID INT PRIMARY KEY,
    OrderDate DATE,
    SupplierID INT,
    TotalCost DECIMAL(8,2)
);

CREATE TABLE order_line_item (
    OrderID INT,
    ProductNumber INT,
    Quantity INT,
    FOREIGN KEY (OrderID) REFERENCES PharmacyOrder(OrderID),
    FOREIGN KEY (ProductNumber) REFERENCES Product(ProductNumber)
);

CREATE TABLE invoice_line_item (
    InvoiceNumber INT,
    ProductNumber INT,
    QuantityOrdered INT,
    FOREIGN KEY (InvoiceNumber) REFERENCES CustomerPrescriptionInvoice(InvoiceNumber),
    FOREIGN KEY (ProductNumber) REFERENCES Product(ProductNumber)
);

CREATE TABLE pharmacy (
    PharmacyID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Address VARCHAR(255),
    PhoneNumber VARCHAR(15),
    Email VARCHAR(50),
    Website VARCHAR(50)
);
