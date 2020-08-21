/* Requires */

import sectionEntradas from '../sections/section-entradas.js'
import sectionResultados from '../sections/section-resultados.js'
import controllerGeradorCrud from '../controllers/gerador-crud.js'

/* Module */

export default () => {
  const methods = {}

  // Internal Variables

  const __buttonGerar = document.querySelector('section#entradas button#gerar')

  // Methods

  methods.habilitarCliqueBotaoGerar = () => {
    __buttonGerar.addEventListener('click', () => {
      const dados = sectionEntradas().exportarDados()

      const camposRequeridosOk = sectionEntradas().verificarCamposObrigatorios()
      if (!camposRequeridosOk) return

      const arquivoRoute = controllerGeradorCrud().gerarArquivoRoute(dados)
      const arquivoController = controllerGeradorCrud().gerarArquivoController(dados)
      const arquivoRepository = controllerGeradorCrud().gerarArquivoRepository(dados)

      sectionResultados().importarArquivoRoute(arquivoRoute)
      sectionResultados().importarArquivoController(arquivoController)
      sectionResultados().importarArquivoRepository(arquivoRepository)
    })
  }

  return methods
}
