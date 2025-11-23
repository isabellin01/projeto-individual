var database = require("../database/config");

function obterDadosUser() {
    var instrucaoSql = `
        SELECT nome AS nomeCompleto, user, email, idade, genero FROM Usuario;
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDadosKpi() {
    var instrucaoSql = `
        SELECT p.id AS postId,
            u.id AS userID,
            p.resolvido AS resolvido
        FROM Post p
        INNER JOIN Usuario u ON u.id = p.id_usuario
        ORDER BY p.datahora DESC;
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterPostPorUser() {
    var instrucaoSql = `
        SELECT u.id AS userID,
            COUNT(p.id) AS totalPost 
        FROM Post p
        RIGHT JOIN Usuario u ON u.id = p.id_usuario
        GROUP BY u.id;
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterTotalPost() {
    var instrucaoSql = `
            SELECT 
                DATE_FORMAT(p.datahora, '%d/%m') AS datahora,
                p.id AS idPost,
                COUNT(rp.idRespostaPub) AS totalResposta
            FROM post p
            LEFT JOIN respostaPost rp ON p.id = rp.id_post
            GROUP BY p.datahora, p.id 
            ORDER BY p.datahora DESC LIMIT 7;
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarTag() {
    var instrucaoSql = `
        SELECT tag AS nome, count(tag) AS qtdtag
        FROM post GROUP BY tag
        ORDER BY count(tag) DESC, tag ASC;
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function temporealEngj() {
    var instrucaoSql = `
            SELECT 
                DATE_FORMAT(p.datahora, '%d/%m') AS datahora,
                p.id AS idPost,
                COUNT(rp.idRespostaPub) AS totalResposta
            FROM post p
            LEFT JOIN respostaPost rp ON p.id = rp.id_post
            GROUP BY p.datahora, p.id 
            ORDER BY p.datahora DESC
            LIMIT 1;
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterDadosUser,
    obterDadosKpi,
    obterPostPorUser,
    obterTotalPost,
    atualizarTag,
    temporealEngj
}
