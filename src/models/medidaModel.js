var database = require("../database/config");

function buscarUltimasMedidas() {
    var instrucaoSql = `
        SELECT (SELECT COUNT(id) FROM Usuario) AS totalUser,
                (SELECT COUNT(id) FROM Post) AS totalPost,
                u.id AS userId,
                u.genero AS userGenero,
                u.idade AS userIdade,
                p.texto AS postTexto,
                p.datahora AS postDatahora,
                p.resolvido AS postResolvido,
                p.tag AS postTag
            FROM Post p
            INNER JOIN Usuario u ON u.id = p.id_usuario
            ORDER BY p.datahora DESC;
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
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
