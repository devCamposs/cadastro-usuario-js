var express = require('express');
var router = express.Router();
const cadastroController = require('../controller/cadastroController')

// *** create ***
router.get('/criar', cadastroController.index)
router.post('/criar', cadastroController.cadastrado)
router.get('/criar', cadastroController.cadastrado)
// *** lista de cadastro ***
router.get('/lista', cadastroController.lista)
router.get('/:id', cadastroController.listadetalhe)
// *** update ****



module.exports = router;
