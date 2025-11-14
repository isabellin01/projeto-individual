create database loopsocial;
use loopsocial;
select * from usuario;
CREATE TABLE Usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    user VARCHAR(50),
    email VARCHAR(50),
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
    FOREIGN KEY (id_usuario) REFERENCES Usuario (id)
);
CREATE TABLE RespostaPost (
    idRespostaPub INT PRIMARY KEY AUTO_INCREMENT,
    id_post INT,
    id_usuario INT,
    texto VARCHAR(300),
    auxiliou TINYINT,
    FOREIGN KEY (id_post) REFERENCES Post (id),
    FOREIGN KEY (id_usuario) REFERENCES Usuario (id)
);
CREATE TABLE Tag (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45)
);
CREATE TABLE TagPost (
    id_publicacao INT,
    id_tag INT,
    CONSTRAINT pkComposta PRIMARY KEY (id_publicacao, id_tag),
    FOREIGN KEY (id_publicacao) REFERENCES Post (id),
    FOREIGN KEY (id_tag) REFERENCES Tag (id)
);