var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
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
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarduvida() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
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
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function rankingTag() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function rankingTag()");
    var instrucaoSql = `
        SELECT tag AS nome, count(tag) AS qtdtag
        FROM post GROUP BY tag
        ORDER BY count(tag) DESC, tag ASC;
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function pesquisarTag(texto) {
//     console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarTag()");
//     var instrucaoSql = `
//         SELECT 
//             a.id AS idAviso,
//             a.titulo,
//             a.descricao,
//             a.fk_usuario,
//             u.id AS idUsuario,
//             u.nome,
//             u.email,
//             u.senha
//         FROM aviso a
//             INNER JOIN usuario u
//                 ON a.fk_usuario = u.id
//         WHERE a.descricao LIKE '${texto}';
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

// function listarPorUsuario(idUsuario) {
//     console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
//     var instrucaoSql = `
//         SELECT 
//             a.id AS idAviso,
//             a.titulo,
//             a.descricao,
//             a.fk_usuario,
//             u.id AS idUsuario,
//             u.nome,
//             u.email,
//             u.senha
//         FROM aviso a
//             INNER JOIN usuario u
//                 ON a.fk_usuario = u.id
//         WHERE u.id = ${idUsuario};
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

function publicar(descricao, idUsuario, tagNome) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", descricao, idUsuario, tagNome);
    var instrucaoSql = `
        INSERT INTO Post (id_usuario, texto, datahora, resolvido, tag) VALUES ('${idUsuario}', '${descricao}', Now(), 0, '${tagNome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function insertTag(nomeTag, idPost) {
//     console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function insertTag(): ", nomeTag, idPost);
//     var instrucaoSql = `
//         INSERT INTO Tag (id_post, nome) VALUES ('${idPost}','${nomeTag}');
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

function mudarStatus(botaoId, botaoStatus) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", botaoId, botaoStatus);
    var instrucaoSql = `
        UPDATE Post SET resolvido = '${botaoStatus}' WHERE id = ${botaoId};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function deletar(idAviso) {
//     console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idAviso);
//     var instrucaoSql = `
//         DELETE FROM aviso WHERE id = ${idAviso};
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

module.exports = {
    listar,
    listarduvida,
    rankingTag,
    // listarPorUsuario,
    // pesquisarTag,
    publicar,
    // insertTag,
    mudarStatus
    // editar,
    // deletar
}
