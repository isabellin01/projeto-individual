create database gameloop;
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

insert into Post (id_usuario, texto, datahora, resolvido, tag) VALUES
(1, 'teste3', '2025-10-15 14:00', 0, 'TESTE3');
show databases;

SELECT id, count(idRespostaPub)
            FROM Post JOIN RespostaPost 
            ON Post.id = id_post GROUP BY id;