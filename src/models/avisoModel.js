var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT
            p.id AS idPost,
            p.texto AS textoPost,
            DATE_FORMAT(p.datahora,'%H:%i %d/%m') AS dataHora,
            p.resolvido,
            u.id AS idUser,
            u.nome AS nomeUsuario,
            u.user AS userUsuario,
            p.tag AS nomeTag,
            (SELECT COUNT(*)
            FROM RespostaPost rp
            WHERE rp.id_post = p.id) AS quantidadeResp
        FROM Post p
        JOIN Usuario u ON u.id = p.id_usuario
        ORDER BY p.datahora DESC LIMIT 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarduvida() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarduvida()");
    var instrucaoSql = `
        SELECT
            p.id AS idPost,
            p.texto AS textoPost,
            DATE_FORMAT(p.datahora,'%H:%i %d/%m') AS dataHora,
            p.resolvido,
            u.id AS idUser,
            u.nome AS nomeUsuario,
            u.user AS userUsuario,
            p.tag AS nomeTag,
            (SELECT COUNT(*)
            FROM RespostaPost rp
            WHERE rp.id_post = p.id) AS quantidadeResp
        FROM Post p
        JOIN Usuario u ON u.id = p.id_usuario
        WHERE p.resolvido = 0 ORDER BY p.datahora DESC
        LIMIT 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarusuario(idUsuario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarusuario()", idUsuario);
    var instrucaoSql = `
        SELECT
            p.id AS idPost,
            p.texto AS textoPost,
            DATE_FORMAT(p.datahora,'%H:%i %d/%m') AS dataHora,
            p.resolvido,
            u.id AS idUser,
            u.nome AS nomeUsuario,
            u.user AS userUsuario,
            p.tag AS nomeTag,
            (SELECT COUNT(*)
            FROM RespostaPost rp
            WHERE rp.id_post = p.id) AS quantidadeResp
        FROM Post p
        JOIN Usuario u ON u.id = p.id_usuario
        WHERE u.id = ${idUsuario} ORDER BY p.datahora DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function rankingTag() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function rankingTag()");
    var instrucaoSql = `
        SELECT tag AS nome, count(tag) AS qtdtag
        FROM Post GROUP BY tag
        ORDER BY count(tag) DESC, tag ASC LIMIT 5;
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function detalhes(idBotao) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function detalhes()", idBotao);
    var instrucaoSql = `
        SELECT 
            rp.idRespostaPub AS idResp,
            u.nome AS nomeResp,
            u.user AS userResp,
            rp.texto AS textResp
        FROM Post p
        LEFT JOIN RespostaPost rp ON p.id = rp.id_post
        LEFT JOIN Usuario u ON u.id = rp.id_usuario
        WHERE p.id = ${idBotao};
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(descricao, idUsuario, tagNome) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", descricao, idUsuario, tagNome);
    var instrucaoSql = `
        INSERT INTO Post (id_usuario, texto, datahora, resolvido, tag) VALUES ('${idUsuario}', '${descricao}', Now(), 0, '${tagNome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function enviarresposta(idUsuario, descricao, idBotao) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function enviarresposta(): ", idUsuario, descricao, idBotao);
    var instrucaoSql = `
        INSERT INTO RespostaPost (id_post, id_usuario, texto) VALUES ('${idBotao}', '${idUsuario}', '${descricao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mudarStatus(botaoId, botaoStatus) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function mudarStatus(): ", botaoId, botaoStatus);
    var instrucaoSql = `
        UPDATE Post SET resolvido = '${botaoStatus}' WHERE id = ${botaoId};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(publicacaoid) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", publicacaoid);
    var instrucaoSql = `
        DELETE FROM RespostaPost WHERE id_post = ${publicacaoid};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletarRespostas(publicacaoid) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", publicacaoid);
    var instrucaoSql = `
        DELETE FROM Post WHERE id = ${publicacaoid};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarduvida,
    listarusuario,
    rankingTag,
    detalhes,
    publicar,
    enviarresposta,
    mudarStatus,
    deletar,
    deletarRespostas
}
