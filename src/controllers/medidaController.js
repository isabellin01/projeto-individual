var medidaModel = require("../models/medidaModel");

function obterDadosUser(req, res) {

    medidaModel.obterDadosUser().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function obterDadosKpi(req, res) {
    medidaModel.obterDadosKpi().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as Kpis.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function obterPostPorUser(req, res) {
    medidaModel.obterPostPorUser().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as Kpis.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function obterTotalPost(req, res) {
    medidaModel.obterTotalPost().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar total de Post.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function atualizarTag(req, res) {

    medidaModel.atualizarTag().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function temporealEngj(req, res) {

    medidaModel.temporealEngj().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    obterDadosUser,
    obterDadosKpi,
    obterPostPorUser,
    obterTotalPost,
    atualizarTag,
    temporealEngj
}