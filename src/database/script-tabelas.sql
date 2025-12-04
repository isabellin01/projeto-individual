create database gameloop;
CREATE USER 'gameloop'@'%' IDENTIFIED BY '789456123#Lin';
GRANT ALL PRIVILEGES ON gameloop.* TO 'gameloop'@'%';
FLUSH PRIVILEGES;
use gameloop;
CREATE TABLE Usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    user VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE,
    genero CHAR(1),
    idade INT,
    senha VARCHAR(50)
);

CREATE TABLE Post (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    texto VARCHAR(300),
    datahora DATETIME,
    resolvido TINYINT,
    tag VARCHAR(45),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id)
);

CREATE TABLE RespostaPost (
    idRespostaPub INT PRIMARY KEY AUTO_INCREMENT,
    id_post INT,
    id_usuario INT,
    texto VARCHAR(300),
    FOREIGN KEY (id_post) REFERENCES Post(id),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id)
);