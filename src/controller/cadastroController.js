const path = require('path')
const db = require('../database/models')
const Usuario = db.Usuario

const cadastroContrller = {
  index: (req, res) => {

    let atributo = {
      title: 'Cadastro de Usuarios'
    }
    return res.render('cadastro', atributo)
  },

  cadastrado: async (req, res) => {
    const user = {
      nome: req.body.nome,
      email: req.body.email,
      profissao: req.body.profissao
    }
    console.log(user);
    try {
      await Usuario.create(user)
      res.redirect('cadastrado')
    } catch (err) {
      res.status(400).json(err) // 400 = Bad Request
    }
  },

  lista: async (req, res) => {
    Usuario.findAll()
      .then(user => {
        res.render('lista', { lista: user })
      })
  }

}

module.exports = cadastroContrller
