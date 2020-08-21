/* Requires */

import sectionEntradas from '../sections/section-entradas.js'
import sectionResultados from '../sections/section-resultados.js'
import controllerGeradorCrud from '../controllers/gerador-crud.js'

/* Module */

export default () => {
  const methods = {}

  // Internal Variables

  const __buttonGerar = document.querySelector('header button#gerar')
  const __buttonFechar = document.querySelector('section.modal button#fechar')

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

      const modal = document.querySelector('section.modal')

      modal.classList.add('aberto')
    })
  }

  methods.fecharResultados = () => {
    __buttonFechar.addEventListener('click', () => {

      const modal = document.querySelector('section.modal')

      modal.classList.remove('aberto')
    })
  }

  return methods
}
