create database loopsocial;
use loopsocial;
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
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id)
);

CREATE TABLE RespostaPost (
    idRespostaPub INT AUTO_INCREMENT,
    id_post INT,
    id_usuario INT,
    texto VARCHAR(300),
    auxiliou TINYINT,
    PRIMARY KEY (idRespostaPub, id_post),
    FOREIGN KEY (id_post) REFERENCES Post(id),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id)
);

CREATE TABLE Tag (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_post INT,
    nome VARCHAR(45),
    FOREIGN KEY (id_post) REFERENCES Post(id)
);

INSERT INTO Usuario (nome, user, email, genero, idade, senha) VALUES
('João Silva', 'joaos', 'joao@gmail.com', 'M', 25, '1234'),
('Maria Oliveira', 'mariao', 'maria@gmail.com', 'F', 22, 'abcd'),
('Carlos Pereira', 'carlosp', 'carlos@gmail.com', 'M', 30, 'senha1'),
('Ana Souza', 'anas', 'ana@gmail.com', 'F', 28, 'xyz123');

INSERT INTO Post (id_usuario, texto, datahora, resolvido) VALUES
(1, 'Como faço um SELECT com JOIN no MySQL?', '2025-01-10 14:30:00', 0),
(2, 'Erro ao usar AUTO_INCREMENT em chave composta. O que fazer?', '2025-01-12 09:15:00', 0),
(3, 'Dicas para melhorar performance de consultas SQL?', '2025-01-15 19:00:00', 1),
(4, 'Qual a diferença entre INNER JOIN e LEFT JOIN?', '2025-01-20 11:45:00', 0),
(1, 'Como implementar um sistema de login seguro no Node.js?', '2025-01-25 16:20:00', 0);

INSERT INTO RespostaPost (id_post, id_usuario, texto, auxiliou) VALUES
(1, 2, 'Use INNER JOIN quando os dados existirem nas duas tabelas.', 1),
(1, 3, 'Left join serve quando pode haver dados faltando.', 1),

(2, 1, 'AUTO_INCREMENT nunca funciona em chave composta.', 1),
(2, 4, 'Você deve usar uma coluna independente como chave primária.', 1),

(3, 1, 'Use índices nos campos utilizados em WHERE.', 1),

(4, 3, 'INNER junta apenas onde há correspondência.', 0),
(4, 2, 'LEFT JOIN retorna tudo da esquerda mesmo sem correspondência.', 1),

(5, 4, 'Use bcrypt para senhas.', 1),
(5, 3, 'Nunca armazene senha em texto puro.', 1);


INSERT INTO Tag (id_post, nome) VALUES
(1, 'mysql'),
(1, 'sql'),
(2, 'seguranca'),
(2, 'mysql'),
(3, 'seguranca'),
(4, 'mysql'),
(5, 'join');

SELECT t.nome, count(t.nome)
	FROM tag t
    GROUP BY t.nome ORDER BY count(t.nome) DESC, t.nome ASC;

SELECT
	p.id AS idPost,
	p.texto AS textoPost,
	p.datahora,
	p.resolvido,
	u.id AS idUser,
	u.nome AS nomeUsuario,
	u.user AS userUsuario,
	(SELECT COUNT(*)
	FROM RespostaPost rp
	WHERE rp.id_post = p.id) AS quantidadeResp
FROM Post p
INNER JOIN Usuario u ON u.id = p.id_usuario
ORDER BY p.datahora DESC;