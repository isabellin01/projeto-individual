create database loopsocial;
use loopsocial;
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

SELECT tag, count(tag) FROM post GROUP BY tag ORDER BY count(tag) DESC, tag ASC;

SELECT
	p.id AS idPost,
	p.texto AS textoPost,
	p.datahora,
	p.resolvido,
	u.id AS idUser,
	u.nome AS nomeUsuario,
	u.user AS userUsuario,
	p.tag AS nomeTag,
	(SELECT COUNT(*)
	FROM RespostaPost rp
	WHERE rp.id_post = p.id) AS quantidadeResp
FROM Post p
INNER JOIN Usuario u ON u.id = p.id_usuario
WHERE p.resolvido = 0 ORDER BY p.datahora DESC
LIMIT 10;

SELECT p.id AS postId,
		u.id AS userID,
        (SELECT COUNT(*) FROM Usuario) AS totalUsuario,
        p.resolvido AS postResolvido,
        p.tag AS postTag
	FROM Post p
    INNER JOIN Usuario u ON u.id = p.id_usuario
    ORDER BY p.datahora DESC;
    
SELECT COUNT(u.id) AS userID,
		COUNT(p.id) AS totalPost 
	FROM Post p
    RIGHT JOIN Usuario u ON u.id = p.id_usuario
    GROUP BY u.id;    

SELECT
	p.id AS idPost,
	p.texto AS textoPost,
	p.datahora,
	p.resolvido,
	u.id AS idUser,
	u.nome AS nomeUsuario,
	u.user AS userUsuario,
	p.tag AS nomeTag,
	(SELECT COUNT(*)
	FROM RespostaPost rp
	WHERE rp.id_post = p.id) AS quantidadeResp
FROM Post p
INNER JOIN Usuario u ON u.id = p.id_usuario
ORDER BY p.datahora DESC LIMIT 10;

SELECT 
    rp.idRespostaPub AS idResp,
    u.nome AS userResp,
    rp.texto AS textResp
FROM Post p
LEFT JOIN RespostaPost rp ON p.id = rp.id_post
LEFT JOIN Usuario u ON u.id = rp.id_usuario
WHERE p.id = 5;

-- TESTE
INSERT INTO Usuario (nome, user, email, genero, idade, senha) VALUES
('Ana Souza', 'anasz', 'ana@gmail.com', 'F', 23, '123'),
('João Lima', 'jlim', 'joao@gmail.com', 'M', 29, '123'),
('Carlos Santos', 'csantos', 'carlos@gmail.com', 'M', 35, '123'),
('Mariana Alves', 'marialv', 'mariana@gmail.com', 'F', 21, '123'),
('Pedro Rocha', 'procha', 'pedro@gmail.com', 'M', 27, '123'),
('Lucas Mendes', 'lumend', 'lucas@gmail.com', 'M', 19, '123'),
('Beatriz Silva', 'bia_s', 'bia@gmail.com', 'F', 24, '123'),
('Fernanda Costa', 'feco', 'fernanda@gmail.com', 'F', 31, '123'),
('Ricardo Dias', 'ricdias', 'ricardo@gmail.com', 'M', 33, '123'),
('Juliana Freitas', 'jufrei', 'juliana@gmail.com', 'F', 22, '123'),
('Eduardo Martins', 'edmart', 'eduardo@gmail.com', 'M', 26, '123'),
('Camila Torres', 'catorres', 'camila@gmail.com', 'F', 34, '123'),
('Rafael Gomes', 'rafag', 'rafael@gmail.com', 'M', 28, '123'),
('Sofia Ribeiro', 'sofibr', 'sofia@gmail.com', 'F', 20, '123'),
('Diego Fernandes', 'diego_f', 'diego@gmail.com', 'M', 30, '123');
INSERT INTO Post (id_usuario, texto, datahora, resolvido, tag) VALUES
(1, 'Alguém sabe uma boa forma de estudar SQL?', '2025-01-10 10:23:00', 0, 'sql'),
(2, 'Erro ao instalar Python no Windows, ajuda!', '2025-01-11 14:05:00', 1, 'python'),
(3, 'Qual framework usar para site simples?', '2025-01-12 09:40:00', 0, 'web'),
(4, 'Como melhorar a lógica de programação?', '2025-01-12 18:30:00', 1, 'logica'),
(5, 'Vale a pena aprender Java em 2025?', '2025-01-13 13:15:00', 0, 'java'),
(7, 'Qual a diferença entre JOIN e UNION?', '2025-01-14 08:10:00', 1, 'sql'),
(8, 'Laptop esquentando demais, é normal?', '2025-01-14 16:50:00', 0, 'hardware'),
(9, 'Como usar Git da maneira certa?', '2025-01-15 11:22:00', 1, 'git'),
(10, 'React ou Vue para iniciantes?', '2025-01-15 17:44:00', 0, 'javascript'),
(12, 'Erros comuns no CSS que devo evitar?', '2025-01-16 09:10:00', 1, 'css'),
(13, 'Preciso de ideias para projeto de portfólio.', '2025-01-16 12:35:00', 0, 'portfolio'),
(14, 'Notebook travando após atualização, ajuda!', '2025-01-16 19:25:00', 0, 'hardware'),
(1, 'Dicas para organizar meus estudos?', '2025-01-17 10:00:00', 1, 'estudos'),
(6, 'Por que meu código não roda no VSCode?', '2025-01-17 15:47:00', 0, 'vscode'),
(5, 'Melhor banco de dados para iniciantes?', '2025-01-18 08:55:00', 1, 'bd');
INSERT INTO RespostaPost (id_post, id_usuario, texto) VALUES
(1, 7, 'Use exercícios práticos e revise com consultas reais.'),
(1, 3, 'Leia documentação e pratique com bancos pequenos.'),
(2, 6, 'Verifique se adicionou Python ao PATH.'),
(3, 10, 'Para algo simples, use HTML/CSS/JS puro mesmo.'),
(4, 2, 'Faça desafios diários de lógica.'),
(6, 1, 'JOIN combina linhas, UNION combina resultados.'),
(8, 13, 'Pode ser pasta térmica velha.'),
(9, 4, 'Recomendo sempre criar branches para cada feature.'),
(10, 5, 'React tem mais mercado, mas ambos são bons.'),
(12, 7, 'Evite valores fixos demais. Prefira flexbox.');

select * from usuario;
