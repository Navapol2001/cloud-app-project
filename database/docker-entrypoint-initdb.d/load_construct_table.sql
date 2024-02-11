CREATE DATABASE IF NOT EXISTS accountant;

USE accountant;

SET GLOBAL sql_mode = '';

-- TODO config schemas to comply with exsisting data
-- or csv files

CREATE TABLE IF NOT EXISTS `acc_credit` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT, `acc_tracking` varchar(30) NOT NULL, `cust_id` varchar(15) NOT NULL, `accounting_id` varchar(15) NOT NULL, `detail` varchar(200) NOT NULL, `running_number` varchar(25) NOT NULL, `amount` double NOT NULL, `upd_date` date NOT NULL, `payment_date` date NOT NULL, `payment_type` varchar(15) NOT NULL, `bank_account_id` varchar(30) NOT NULL, `check_id` varchar(30) NOT NULL, `check_due_date` date NOT NULL, `status` varchar(3) NOT NULL, `note` text NOT NULL, PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 107425 DEFAULT CHARSET = utf8 ROW_FORMAT = COMPACT;

CREATE TABLE IF NOT EXISTS `acc_credit_tracking` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT, `ref_id` int(11) NOT NULL, `cust_id` varchar(15) NOT NULL, `tracking_id` varchar(25) NOT NULL, `amount` double NOT NULL, `upd_date` date NOT NULL, `transaction_form` varchar(25) NOT NULL, `check_id` varchar(20) NOT NULL, `check_due_date` date NOT NULL, `accounting_id` varchar(15) NOT NULL, `status` varchar(15) NOT NULL, `note` varchar(100) NOT NULL, PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 14474 DEFAULT CHARSET = utf8 ROW_FORMAT = COMPACT;

CREATE TABLE IF NOT EXISTS `acc_debit` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT, `acc_tracking` varchar(25) NOT NULL, `cust_id` varchar(15) NOT NULL, `accounting_id` varchar(15) NOT NULL, `detail` varchar(200) NOT NULL, `running_number` varchar(25) NOT NULL, `amount` double NOT NULL, `upd_date` date NOT NULL, `payment_date` date NOT NULL, `payment_type` varchar(15) NOT NULL, `bank_account_id` varchar(30) NOT NULL, `check_id` varchar(30) NOT NULL, `check_due_date` date NOT NULL, `status` varchar(3) NOT NULL, `note` text NOT NULL, PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 105457 DEFAULT CHARSET = utf8 ROW_FORMAT = COMPACT;

CREATE TABLE IF NOT EXISTS `accounting_name` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT, `accounting_id` varchar(15) NOT NULL, `accounting_name` varchar(75) NOT NULL, `accounting_type` varchar(10) NOT NULL, PRIMARY KEY (`id`)
) ENGINE = MyISAM AUTO_INCREMENT = 296 DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `accounting_type` (
    `id` varchar(3) NOT NULL, `details` varchar(45) NOT NULL, PRIMARY KEY (`id`)
) ENGINE = MyISAM DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `customer` (
    `id` varchar(25) NOT NULL, `name` varchar(45) NOT NULL, `addr` varchar(85) NOT NULL, `province` varchar(25) NOT NULL, `mobile1` varchar(15) NOT NULL, `mobile2` varchar(15) NOT NULL, `tel` varchar(15) NOT NULL, `fax` varchar(15) NOT NULL, `email` varchar(40) NOT NULL, `contact_person` varchar(40) NOT NULL, PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `customer_business` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT, `business_id` varchar(10) NOT NULL, `business_name` varchar(45) NOT NULL, `business_account_id` varchar(10) NOT NULL, `account_type` varchar(15) NOT NULL, PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 11 DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `customer_warehouse` (
    `id` varchar(10) NOT NULL, `name` varchar(45) NOT NULL, `addr` varchar(45) NOT NULL, `province` varchar(45) NOT NULL, `mobile1` varchar(15) NOT NULL, `mobile2` varchar(15) NOT NULL, `tel` varchar(15) NOT NULL, `fax` varchar(45) NOT NULL, `email` varchar(40) NOT NULL, `contactname` double NOT NULL, `upd_date` datetime NOT NULL
) ENGINE = MyISAM DEFAULT CHARSET = utf8;

-- begin load csv files into tables
LOAD DATA INFILE '/var/lib/mysql-files/acc_credit.csv' INTO
TABLE acc_credit FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES;

LOAD DATA INFILE '/var/lib/mysql-files/acc_credit_tracking.csv' INTO
TABLE acc_credit_tracking FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES;

LOAD DATA INFILE '/var/lib/mysql-files/acc_debit.csv' INTO
TABLE acc_debit FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES;

LOAD DATA INFILE '/var/lib/mysql-files/accounting_name.csv' INTO
TABLE accounting_name FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES;

LOAD DATA INFILE '/var/lib/mysql-files/accounting_type.csv' INTO
TABLE accounting_type FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES;

LOAD DATA INFILE '/var/lib/mysql-files/customer.csv' INTO
TABLE customer FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES;

LOAD DATA INFILE '/var/lib/mysql-files/customer_business.csv' INTO
TABLE customer_business FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES;

LOAD DATA INFILE '/var/lib/mysql-files/customer_warehouse.csv' INTO
TABLE customer_warehouse FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES;
-- end load csv files into tables