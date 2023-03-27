var express = require('express');
var router = express.Router();

const consultaController = require('../controller/consultaController')

router.get('/lista', consultaController.consulta)
router.get('/:id/editar', consultaController.form)
router.put('/editar', consultaController.editar)
router.delete('/deletar/:id', consultaController.deletarCadastro)

// router.get('/consulta', function(req, res, next) {
// res.render('conulta', { title: 'Consulta de usuario' })
// });

module.exports = router
