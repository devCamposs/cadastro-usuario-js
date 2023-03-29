var express = require('express');
var router = express.Router();

const cadastroController = require('../controller/cadastroController')
router.get('/criar', cadastroController.index)
router.get('/lista', cadastroController.lista)


// router.get('/:id/editar', cadastroController.form)
// router.put('/editar', cadastroController.editar)
// router.get('/lista', cadastroController.listarCadastro)
// router.delete('/deletar/:id', cadastroController.deletarCadastro)

// router.get('/cadastro', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
