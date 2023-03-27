const path = require('path')

const cadastroContrller = {
  index: (req, res) => {
    
    let atributo = {
      title: 'Cadastro de Usuarios'
    }
    return res.render('cadastro', atributo)
  },

  salvarForm: (req, res) => {
    let { nome, email, profissao } = req.body

    return res.render('cadastrado')
  },

  // form: (req,res)=> {
  //   let {id} = req.params
  //   let cadastro = [
  //     {id:1,nome:'Thomas', email:'thomas.campos7@gmail.com', profissao: 'Programador'},
  //     {id:2,nome:'Ana', email:'ana7@gmail.com', profissao: 'Programadora'},
  //   ]
  //  res.render('editarCadastro', {cadastro: cadastro[id]})
  // },

  // editar: (req,res) => {
  //   let {nome, email, profissao} = req.body
  //   console.log(req.body)
  //   res.send(`Você editou o cadastro de ${nome} `)
  // },

  // listarCadastro: (req, res) => {
  //   let cadastro = [
  //     {id:1,nome:'Thomas', email:'thomas.campos7@gmail.com', profissao: 'Programador'},
  //     {id:2,nome:'Ana', email:'ana7@gmail.com', profissao: 'Programadora'},
  //   ]

  //   res.render('listaCadastro', {listaCadastro: cadastro} )
  // },

  // deletarCadastro: (req, res)=> {
  //   let {id} = req.params
  //   res.send(`cadastro com o id ${id} deletado`)
  // }
}

module.exports = cadastroContrller
