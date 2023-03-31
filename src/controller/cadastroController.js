const { error } = require('console')
const path = require('path')
const db = require('../database/models')
const Usuario = db.Usuario

const cadastroContrller = {
  index: (req, res) => {

    let atributo = {
      title: 'Cadastro de Usuario'
    }
    return res.render('cadastro', atributo)
  },

  cadastrado: async (req, res) => {
    Usuario.create({
      nome: req.body.nome,
      email: req.body.email,
      profissao: req.body.profissao
    })

    .then(()=> res.redirect('cadastrado'))
    .catch(error =>{
      console.log(error)
    })
  },

  lista: async (req, res) => {
    let titleLista = {
      title: 'Lista de Cadastro'
    }
    Usuario.findAll()
      .then(user => {
        res.render('lista', { lista: user })
      })
  },


}

module.exports = cadastroContrller
