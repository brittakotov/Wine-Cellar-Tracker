DROP DATABASE IF EXISTS cellarTracker;

CREATE DATABASE cellarTracker;

USE cellarTracker;

-- -- One to many: one product can have many reviews
CREATE TABLE cellar (
  id INT AUTO_INCREMENT PRIMARY KEY,
  brand VARCHAR(60) NOT NULL,
  blend VARCHAR(60) NOT NULL,
  vintage INT(4) NOT NULL,
  place VARCHAR(60) NOT NULL,
  price INT(4) NOT NULL,
  photo VARCHAR(300) NOT NULL
);
