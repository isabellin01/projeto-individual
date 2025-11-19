var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});

router.get("/listarduvida", function (req, res) {
    avisoController.listarduvida(req, res);
});

router.get("/rankingTag", function (req, res) {
    avisoController.rankingTag(req, res);
});

router.get("/detalhes/:idBotao", function (req, res) {
    avisoController.detalhes(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});

router.put("/mudarStatus/:botaoId", function (req, res) {
    avisoController.mudarStatus(req, res);
});

// router.delete("/deletar/:idAviso", function (req, res) {
//     avisoController.deletar(req, res);
// });

module.exports = router;