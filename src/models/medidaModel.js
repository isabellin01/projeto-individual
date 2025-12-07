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
        JOIN Usuario u ON u.id = p.id_usuario
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
            SELECT 	p.id as id,
                    count(rp.idRespostaPub) as totalResposta, 
                    DATE_FORMAT(p.datahora, '%d/%m/%y') AS 'data'
            FROM Post p LEFT JOIN RespostaPost rp
            ON p.id = rp.id_post GROUP BY p.id ORDER BY p.datahora DESC LIMIT 10;
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterDadosUser,
    obterDadosKpi,
    obterPostPorUser,
    obterTotalPost
}
