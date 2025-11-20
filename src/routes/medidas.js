var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/dadosusuario", function (req, res) {
    medidaController.obterDadosUser(req, res);
});

router.get("/dadoskpi", function (req, res) {
    medidaController.obterDadosKpi(req, res);
});

router.get("/postporuser", function (req, res) {
    medidaController.obterPostPorUser(req, res);
});

router.get("/dadospost", function (req, res) {
    medidaController.obterTotalPost(req, res);
})

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;