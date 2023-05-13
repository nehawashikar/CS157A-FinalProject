CREATE DATABASE IF NOT EXISTS pharmacy;
USE pharmacy;

CREATE TABLE Customer (
    Customer_ID INT PRIMARY KEY,
    Name VARCHAR(100),
    Address VARCHAR(255),
    Phone_number VARCHAR(20),
    Email VARCHAR(255),
    Date_of_birth DATE
);

CREATE TABLE Employee (
    Employee_ID INT PRIMARY KEY,
    Name VARCHAR(100),
    Address VARCHAR(255),
    Phone_number VARCHAR(20),
    Email VARCHAR(255),
    Hire_date DATE,
    Employed_Pharmacy INT
);

CREATE TABLE Employed_Pharmacy (
    Employed_Pharmacy INT PRIMARY KEY,
    Position VARCHAR(50),
    Salary DECIMAL(8, 2)
);

CREATE TABLE Product (
    Product_Number INT PRIMARY KEY,
    Name VARCHAR(100),
    Brand VARCHAR(50),
    Description VARCHAR(255),
    Category VARCHAR(50),
    Price DECIMAL(8, 2),
    Quantity_in_stock INT,
    Supplier INT
);

CREATE TABLE Supplier (
    Supplier_ID INT PRIMARY KEY,
    Name VARCHAR(100),
    Address VARCHAR(255),
    Phone_number VARCHAR(20),
    Email VARCHAR(255),
    Website VARCHAR(255)
);

CREATE TABLE Pharmacy_Order (
    Order_ID INT PRIMARY KEY,
    Order_date DATE,
    Supplier INT,
    Total_Cost DECIMAL(8, 2)
);

CREATE TABLE Order_Line_Item (
    Order_ID INT,
    Product_Number INT,
    Quantity INT,
    PRIMARY KEY (Order_ID, Product_Number)
);

CREATE TABLE Customer_Invoice (
    Invoice_Number INT PRIMARY KEY,
    Customer_ID INT,
    Order_Date DATE,
    Total_cost DECIMAL(8, 2)
);

CREATE TABLE Invoice_Line_Item (
    Invoice_Number INT,
    Product_Number INT,
    Quantity_Ordered INT,
    PRIMARY KEY (Invoice_Number, Product_Number)
);

CREATE TABLE Pharmacy (
    Pharmacy_ID INT PRIMARY KEY,
    Name VARCHAR(100),
    Address VARCHAR(255),
    Phone_number VARCHAR(20),
    Email VARCHAR(255),
    Website VARCHAR(255),
    Opening_hours VARCHAR(50)
);

CREATE TABLE Prescription_Information (
    Customer_ID INT,
    Prescription_ID INT PRIMARY KEY,
    Prescription_Quantity INT,
    Prescription_Frequency INT
);

CREATE TABLE Prescription_Information_Name (
    Prescription_ID INT PRIMARY KEY,
    Prescription_Name VARCHAR(100)
);

