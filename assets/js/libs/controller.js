export function gerarArquivoController (maiusculoPlural, minusculoPlural, minusculoPluralAcentuado, minusculoSingular, tituloSingular, minusculoSingularAcentuado, tituloSingularAcentuado, artigo) {

return `
/* Repositories */

const ${maiusculoPlural}_REPOSITORY = require('../repositories/${minusculoPlural}')

/* Helpers */

const MONGOOSE_HELPER = require('../../shared/helpers/mongoose/handler')

/* Methods */

exports.receberTodos = async (req, res) => {
  const idUsuario = req.params.idUsuario

  try {
    const ${minusculoPlural} = await ${maiusculoPlural}_REPOSITORY.receberTodos(idUsuario)
    res.status(200).json(${minusculoPlural})
  } catch (error) {
    res.status(500).json('Não foi possível receber ${artigo}s ${minusculoPluralAcentuado}.')
    throw new Error(error)
  }
}

exports.receberPorId = async (req, res) => {
  const idUsuario = req.params.idUsuario
  const id${tituloSingular} = req.params.id${tituloSingular}

  try {
    const ${minusculoSingular} = await ${maiusculoPlural}_REPOSITORY.receberPorId(idUsuario, id${tituloSingular})
    res.status(200).json(${minusculoSingular})
  } catch (error) {
    res.status(500).json('Não foi possível receber ${artigo} ${minusculoSingularAcentuado}.')
    throw new Error(error)
  }
}

exports.adicionar = async (req, res) => {
  const idUsuario = req.params.idUsuario
  const { body } = req
  body.idUsuario = idUsuario

  try {
    await ${maiusculoPlural}_REPOSITORY.adicionar(body)
    res.status(201).json('${tituloSingularAcentuado} cadastrad${artigo} com sucesso.')
  } catch (error) {
    res.status(500).json(MONGOOSE_HELPER.handle(error))
    throw new Error(error)
  }
}

exports.editar = async (req, res) => {
  const idUsuario = req.params.idUsuario
  const id${tituloSingular} = req.params.id${tituloSingular}
  const { body } = req

  try {
    await ${maiusculoPlural}_REPOSITORY.editar(idUsuario, id${tituloSingular}, body)
    res.status(200).json('${tituloSingularAcentuado} atualizad${artigo} com sucesso.')
  } catch (error) {
    res.status(500).json(MONGOOSE_HELPER.handle(error))
    throw new Error(error)
  }
}

exports.deletar = async (req, res) => {
  const idUsuario = req.params.idUsuario
  const id${tituloSingular} = req.params.id${tituloSingular}

  try {
    await ${maiusculoPlural}_REPOSITORY.deletar(idUsuario, id${tituloSingular})
    res.status(200).json('${tituloSingularAcentuado} deletad${artigo} com sucesso.')
  } catch (error) {
    res.status(500).json('Não foi possível deletar ${artigo} ${minusculoSingularAcentuado}.')
    throw new Error(error)
  }
}

`
}
