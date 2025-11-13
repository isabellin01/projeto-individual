-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE aquatech;

USE aquatech;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj CHAR(14),
	codigo_ativacao VARCHAR(50)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT,
	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
);

insert into empresa (razao_social, codigo_ativacao) values ('Empresa 1', 'ED145B');
insert into empresa (razao_social, codigo_ativacao) values ('Empresa 2', 'A1B2C3');
insert into aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);
insert into aquario (descricao, fk_empresa) values ('Aquário de Peixe-dourado', 2);

-----------------------------------------
---------- PROJETO PESSOAL --------------
-----------------------------------------
create database loopsocial;
USE loopsocial;
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