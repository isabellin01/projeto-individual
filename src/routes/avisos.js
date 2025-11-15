var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});

router.get("/rankingTag", function (req, res) {
    avisoController.rankingTag(req, res);
});

// router.get("/listar/:idUsuario", function (req, res) {
//     avisoController.listarPorUsuario(req, res);
// });

// router.get("/pesquisar", function (req, res) {
//     avisoController.pesquisarTag(req, res);
// });

router.post("/publicar/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});

router.post("/inserttag", function (req, res) {
    avisoController.insertTag(req, res);
});

// router.put("/editar/:idAviso", function (req, res) {
//     avisoController.editar(req, res);
// });

// router.delete("/deletar/:idAviso", function (req, res) {
//     avisoController.deletar(req, res);
// });

module.exports = router;