export function gerarArquivoRepository (maiusculoPlural, minusculoSingular, tituloPlural, tituloSingular) {

return `
/* Requires */

const mongoose = require('mongoose')

/* Models */

const ${maiusculoPlural}_MODEL = mongoose.model('${tituloPlural}')

/* Methods */

exports.receberTodos = async (idUsuario) => {
  return ${maiusculoPlural}_MODEL.find({
    idUsuario: idUsuario,
    deletado: false
  })
}

exports.receberPorId = async (idUsuario, id${tituloSingular}) => {
  return ${maiusculoPlural}_MODEL.findOne({
    idUsuario: idUsuario,
    _id: id${tituloSingular}
  })
}

exports.adicionar = async (dados) => {
  const ${minusculoSingular} = new ${maiusculoPlural}_MODEL(dados)
  return ${minusculoSingular}.save()
}

exports.editar = async (idUsuario, id${tituloSingular}, dados) => {
  return ${maiusculoPlural}_MODEL.findOneAndUpdate(
    {
      idUsuario: idUsuario,
      _id: id${tituloSingular}
    },
    { $set: dados },
    { runValidators: true }
  )
}

exports.deletar = async (idUsuario, id${tituloSingular}) => {
  return ${maiusculoPlural}_MODEL.findOneAndUpdate(
    {
      idUsuario: idUsuario,
      _id: id${tituloSingular}
    },
    { $set: { deletado: true } }
  )
}

exports.filtrar = async (filtros) => {
  return ${maiusculoPlural}_MODEL.find(filtros)
}

`
}
