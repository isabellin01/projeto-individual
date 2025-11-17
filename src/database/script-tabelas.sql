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
    tag VARCHAR(45),
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

delete from post where id = 1;
select * from post;
alter table post auto_increment = 0;

SELECT tag, count(tag) FROM post GROUP BY tag ORDER BY count(tag) DESC, tag ASC;

select * from post;
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