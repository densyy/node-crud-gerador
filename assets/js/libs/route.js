export function gerarArquivoRoute (maiusculoPlural, minusculoPlural, tituloSingular) {

return `
/* Requires */

const express = require('express')
const router = express.Router()

/* Controllers */

const ${maiusculoPlural}_CONTROLLER = require('../controllers/${minusculoPlural}')

/* Middlewares */

const TOKEN_MIDDLEWARE = require('../middlewares/token')

/* Routes */

router.get(
  '/:idUsuario',
  TOKEN_MIDDLEWARE.verificar,
  ${maiusculoPlural}_CONTROLLER.receberTodos
)

router.get(
  '/:idUsuario/:id${tituloSingular}',
  TOKEN_MIDDLEWARE.verificar,
  ${maiusculoPlural}_CONTROLLER.receberPorId
)

router.post(
  '/:idUsuario',
  TOKEN_MIDDLEWARE.verificar,
  ${maiusculoPlural}_CONTROLLER.adicionar
)

router.put(
  '/:idUsuario/:id${tituloSingular}',
  TOKEN_MIDDLEWARE.verificar,
  ${maiusculoPlural}_CONTROLLER.editar
)

router.delete(
  '/:idUsuario/:id${tituloSingular}',
  TOKEN_MIDDLEWARE.verificar,
  ${maiusculoPlural}_CONTROLLER.deletar
)

module.exports = router

`
}
