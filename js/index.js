var express = require("express");
var router = express.Router(); // cria o router

// GET pagina home 
router.get("/", function (req, res) {
    res.sendFile('./html/home.html', { root: '.' });
});

// GET auth
router.get("/auth", function (req, res) {
    res.send("Router do auth");
});

// GET login
router.get("/login", function (req, res) {
    res.sendFile('./html/login_cadastro.html', { root: '.' });
});

// GET cadastro de teste
router.get("/login/cadastrodetestes", function (req, res) {
    res.sendFile('./html/cadastrar_teste.html', { root: '.' });
});

// GET cadastro de perguntas
router.get(/.*cadastrodeperguntas$/, function (req, res) {
    res.sendFile('./html/cadastrar_pergunta.html', { root: '.' });
});

module.exports = router;