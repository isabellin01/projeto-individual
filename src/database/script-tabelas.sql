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

insert into Usuario (nome, user, email, genero, idade, senha) values
('Isabel Lin', 'admlin', 'isabel@teste', 'F', 24, '123');

INSERT INTO Usuario (id, nome, user, email, genero, idade, senha) VALUES
(2, 'Lucas Andrade', 'lucasdev', 'lucasdev@teste', 'M', 24, 'senha123'),
(3, 'Mariana Castro', 'marycast', 'marycast@teste', 'F', 27, 'senha123'),
(4, 'João Pereira', 'joaop', 'joaop@teste', 'M', 22, 'senha123'),
(5, 'Ana Souza', 'anasz', 'anasz@teste', 'F', 31, 'senha123'),
(6, 'Rafael Gomes', 'rafag', 'rafag@teste', 'M', 29, 'senha123'),
(7, 'Bianca Torres', 'biancat', 'biancat@teste', 'F', 20, 'senha123'),
(8, 'Otávio Lima', 'otavilima', 'otavilima@teste', 'M', 34, 'senha123'),
(9, 'Camila Ribeiro', 'camilarib', 'camilarib@teste', 'F', 25, 'senha123'),
(10,'Renato Silva', 'renatos', 'renatos@teste', 'M', 28, 'senha123'),
(11,'Sofia Almeida', 'sofiaal', 'sofiaal@teste', 'F', 23, 'senha123'),
(12,'Diego Rocha', 'diegor', 'diegor@teste', 'M', 30, 'senha123'),
(13,'Yara Fernandes', 'yaraf', 'yaraf@teste', 'F', 21, 'senha123'),
(14,'Caio Moreira', 'caiom', 'caiom@teste', 'M', 26, 'senha123'),
(15,'Helena Duarte', 'helenad', 'helenad@teste', 'F', 33, 'senha123'),
(16,'Alex Nobre', 'alexn', 'alexn@teste', 'O', 27, 'senha123');

INSERT INTO Post (id, id_usuario, texto, datahora, resolvido, tag) VALUES
(1,  2,  'Problema com colisão no Unity, personagem atravessa paredes.', '2025-11-04 14:22:10', 0, 'UNITY'),
(2,  3,  'Como otimizar texturas para mobile?', '2025-11-06 09:10:40', 1, 'OTIMIZAÇÃO'),
(3,  4,  'Luz dinâmica no Unity está muito pesada, sugestões?', '2025-11-08 18:32:21', 0, 'UNITY'),
(4,  5,  'Dificuldade com animação importada do Blender para Unity.', '2025-11-10 20:10:11', 1, 'UNITY'),
(5,  6,  'Meu shader de água está aparecendo preto no jogo, ajuda!', '2025-11-12 11:12:37', 0, 'SHADER'),
(6,  7,  'Sistema de partículas no Unity não aparece na câmera.', '2025-11-14 17:45:58', 0, 'UNITY'),
(7,  8,  'Performance baixa ao spawnar vários objetos simultâneos.', '2025-11-16 08:35:20', 1, 'PERFORMANCE'),
(8,  9,  'IA do meu jogo 3D está ignorando obstáculos, o que revisar?', '2025-11-18 19:22:11', 0, 'IA'),
(9,  10, 'Textura fica borrada ao aproximar a câmera, como corrigir?', '2025-11-20 11:16:12', 0, 'TEXTURA'),
(10, 11, 'Problemas com rig do personagem, não está alinhado corretamente.', '2025-11-22 22:01:45', 0, 'RIGGING'),
(11, 12, 'Como criar efeito de neblina realista sem pesar muito?', '2025-11-24 13:50:33', 1, 'CENÁRIO'),
(12, 13, 'Unity travando ao usar Light Baking, é normal isso?', '2025-11-26 12:25:55', 0, 'UNITY'),
(13, 14, 'Qual formato é melhor para exportar modelos 3D? FBX ou GLB?', '2025-11-28 18:25:50', 1, 'MODELOS'),
(14, 15, 'Input do player atrasado, quais otimizações posso tentar?', '2025-11-30 21:33:18', 0, 'INPUT');

INSERT INTO RespostaPost (id_post, id_usuario, texto) VALUES
(1, 3,  'Verifique se os colliders estão configurados corretamente.'),
(1, 8,  'Também revise a camada de colisão do projeto.'),
(3, 10, 'Reduza as luzes em tempo real.'),
(3, 12, 'Tente usar baked lighting.'),
(4, 9,  'Verifique se está como Humanoid.'),
(4, 14, 'Avatar pode estar desalinhado.'),
(4, 5,  'Revise os keyframes importados.'),
(6, 11, 'Shader preto costuma ser erro de compilação.'),
(7, 4, 'Use object pooling para otimizar.'),
(7, 13,'Evite Instantiate em tempo real.'),
(8, 7,  'Navmesh obstacles podem não estar marcados.'),
(9, 2, 'Ative anisotropic filtering.'),
(9, 6, 'Sem mipmap a textura borra.'),
(12, 5,  'Light baking pode travar mesmo.'),
(12, 8,  'Desative GI onde não precisa.'),
(12, 16, 'Reduza a resolução do bake.'),
(13, 11, 'FBX é mais compatível com engines.'),
(14, 9,  'Reduza o polling do input.'),
(14, 12, 'Use o novo Input System.');