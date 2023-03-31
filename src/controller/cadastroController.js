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

      .then(() => res.redirect('/cadastro/criar'))
      .catch(error => {
        console.log(error)
      })
  },

  lista: async (req, res) => {

    Usuario.findAll()
      .then(user => {
        res.render('lista', { lista: user })
      })
  },

  listadetalhe: async (req, res) => {
    const id = req.params.id;

    try {
      const user = await Usuario.findByPk(id);

      if (user) {
        console.log(user)
        res.render('editar', { user });
      } else {
        res.render('user-not-found');
      }
    } catch (err) {
      res.render('error', { error: err });
    }
  }


}

module.exports = cadastroContrller
