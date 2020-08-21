/* Requires */

import {gerarArquivoRoute} from '../../../libs/route.js'
import {gerarArquivoController} from '../../../libs/controller.js'
import {gerarArquivoRepository} from '../../../libs/repository.js'

/* Module */

export default () => {
  const methods = {}

  methods.gerarArquivoRoute = (dados) => {
    return gerarArquivoRoute(
      dados.maiusculoPlural,
      dados.minusculoPlural,
      dados.tituloSingular
    )
  }

  methods.gerarArquivoController = (dados) => {
    return gerarArquivoController(
      dados.maiusculoPlural,
      dados.minusculoPlural,
      dados.minusculoPluralAcentuado,
      dados.minusculoSingular,
      dados.tituloSingular,
      dados.minusculoSingularAcentuado,
      dados.tituloSingularAcentuado,
      dados.artigo,
    )
  }

  methods.gerarArquivoRepository = (dados) => {
    return gerarArquivoRepository(
      dados.maiusculoPlural,
      dados.minusculoSingular,
      dados.tituloPlural,
      dados.tituloSingular
    )
  }

  return methods
}
