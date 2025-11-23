var avisoModel = require("../models/avisoModel");

function listar(req, res) {
    avisoModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarduvida(req, res) {
    avisoModel.listarduvida().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarusuario(req, res) {
    let idUsuario = req.params.idUsuario;

    avisoModel.listarusuario(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os posts por usuário: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function rankingTag(req, res) {
    avisoModel.rankingTag().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o ranking: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function detalhes(req, res) {
    let idBotao = req.params.idBotao;

    avisoModel.detalhes(idBotao).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar mais detalhes do post: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function publicar(req, res) {
    var descricao = req.body.descricao;
    var idUsuario = req.params.idUsuario;
    var tagNome = req.body.tag;

    if (descricao == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O usuário está indefinido!");
    } else if (tagNome == undefined) {
        res.status(400).send("A tag está indefinida!");
    } else {
        avisoModel.publicar(descricao, idUsuario, tagNome)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function enviarresposta(req, res) {
    var idUsuario = req.params.idUsuario;
    var descricao = req.body.descricao;
    var idBotao = req.body.idBotao;

    if (descricao == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O usuário está indefinido!");
    } else if (idBotao == undefined) {
        res.status(400).send("O botão está indefinido!");
    } else {
        avisoModel.enviarresposta(idUsuario, descricao, idBotao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao enviar resposta: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function mudarStatus(req, res) {
    var botaoId = req.params.botaoId;
    var botaoStatus = req.body.botaoStatus;

    if (botaoId == undefined) {
        res.status(400).send("O botão está indefinido!");
    } else if (botaoStatus == undefined) {
        res.status(400).send("O status do botão está indefinido!");
    } else {
        avisoModel.mudarStatus(botaoId, botaoStatus)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao mudar o status do botão: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function deletar(req, res) {
    var publicacaoid = req.params.publicacaoid;
    avisoModel.deletar(publicacaoid)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function deletarRespostas(req, res) {
    var publicacaoid = req.params.publicacaoid;
    avisoModel.deletarRespostas(publicacaoid)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar as respostas do post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
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