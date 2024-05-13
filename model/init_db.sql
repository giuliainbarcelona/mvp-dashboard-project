--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists students;
SET foreign_key_checks = 1;

--
-- Create Tables
--
-- We need to subsitite this with the new table I ll create in https://drawsql.app/diagrams
CREATE TABLE students(
    id INT NOT NULL AUTO_INCREMENT, 
    firstname VARCHAR(40) not null, 
    lastname VARCHAR(40) not null, 
    PRIMARY KEY (id)
    );
