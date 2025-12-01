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
            SELECT id, count(idRespostaPub)
            FROM Post JOIN RespostaPost 
            ON Post.id = id_post GROUP BY id;
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {
    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        FROM medida WHERE fk_aquario = ${idAquario} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterDadosUser,
    obterDadosKpi,
    obterPostPorUser,
    obterTotalPost,
    buscarMedidasEmTempoReal
}
