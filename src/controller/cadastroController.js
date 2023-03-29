const path = require('path')

const cadastroContrller = {
  index: (req, res) => {

    let atributo = {
      title: 'Cadastro de Usuarios'
    }
    return res.render('cadastro', atributo)
  },

  lista: (req, res) => {


    return res.render('lista')
  },

}

module.exports = cadastroContrller
