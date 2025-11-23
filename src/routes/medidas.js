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

router.get("/temporealtag", function (req, res) {
    medidaController.atualizarTag(req, res);
})

router.get("/temporealengj", function (req, res) {
    medidaController.temporealEngj(req, res);
})

module.exports = router;