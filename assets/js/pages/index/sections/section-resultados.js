export default () => {
  const methods = {}

  // Internal Variables

  const __section = document.querySelector('section#resultados')
  const __textareaRoute = __section.querySelector('textarea#route')
  const __textareaController = __section.querySelector('textarea#controller')
  const __textareaRepository = __section.querySelector('textarea#repository')

  // Methods

  methods.importarArquivoRoute = (conteudo) => {
    __textareaRoute.innerHTML = conteudo
  }

  methods.importarArquivoController = (conteudo) => {
    __textareaController.innerHTML = conteudo
  }

  methods.importarArquivoRepository = (conteudo) => {
    __textareaRepository.innerHTML = conteudo
  }

  return methods
}
