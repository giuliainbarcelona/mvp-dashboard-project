--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists sales;
SET foreign_key_checks = 1;

--
-- Create Tables
--
-- We need to subsitite this with the new table I ll create in https://drawsql.app/diagrams
CREATE TABLE `Sales`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `day` DATE NOT NULL,
    `income` DECIMAL(8, 2) NOT NULL,
    `men` BIGINT NOT NULL,
    `women` BIGINT NOT NULL,
    `kids` BIGINT NOT NULL,
    `clothing` BIGINT NOT NULL,
    `sport` BIGINT NOT NULL,
    `home` BIGINT NOT NULL,
    `weather` VARCHAR(255) NOT NULL
);
