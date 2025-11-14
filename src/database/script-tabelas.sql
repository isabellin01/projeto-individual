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
    texto VARCHAR(300),
    datahora DATETIME,
    resolvido TINYINT
);
CREATE TABLE RespostaPost (
    idRespostaPub INT AUTO_INCREMENT PRIMARY KEY,
    id_post INT,
    id_usuario INT,
    texto VARCHAR(300),
    auxiliou TINYINT,
    FOREIGN KEY (id_post) REFERENCES Post(id),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id)
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
INSERT INTO Usuario (nome, user, email, genero, idade, senha) VALUES
('João Silva', 'joaos', 'joao@gmail.com', 'M', 25, '1234'),
('Maria Oliveira', 'mariao', 'maria@gmail.com', 'F', 22, 'abcd'),
('Carlos Pereira', 'carlosp', 'carlos@gmail.com', 'M', 30, 'senha1'),
('Ana Souza', 'anas', 'ana@gmail.com', 'F', 28, 'xyz123');
INSERT INTO Post (texto, datahora, resolvido) VALUES
('Como faço um SELECT com JOIN no MySQL?', '2025-01-10 14:30:00', 0),
('Erro ao usar AUTO_INCREMENT em chave composta. O que fazer?', '2025-01-12 09:15:00', 0),
('Dicas para melhorar performance de consultas SQL?', '2025-01-15 19:00:00', 1);

INSERT INTO RespostaPost (id_post, id_usuario, texto, auxiliou)
VALUES
(1, 1, 'Ótima pergunta! Acho que posso ajudar.', 1),

(1, 2, 'Também tenho essa dúvida.', 0),

(2, 1, 'A resposta é usar INNER JOIN.', 1),

(2, 2, 'Complementando: também pode usar LEFT JOIN.', 1);