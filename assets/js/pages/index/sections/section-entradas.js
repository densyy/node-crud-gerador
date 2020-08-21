export default () => {
  const methods = {}

  // Internal Variables

  const __section = document.querySelector('header')
  const __inputMaiusculoPlural = __section.querySelector('input#maiusculoPlural')
  const __inputMinusculoPlural = __section.querySelector('input#minusculoPlural')
  const __inputMinusculoPluralAcentuado = __section.querySelector('input#minusculoPluralAcentuado')
  const __inputMinusculoSingular = __section.querySelector('input#minusculoSingular')
  const __inputMinusculoSingularAcentuado = __section.querySelector('input#minusculosingularAcentuado')
  const __inputTituloPlural = __section.querySelector('input#tituloPlural')
  const __inputTituloSingular = __section.querySelector('input#tituloSingular')
  const __inputTituloSingularAcentuado = __section.querySelector('input#tituloSingularAcentuado')
  const __inputArtigo = __section.querySelector('input#artigo')

  // Methods

  methods.verificarCamposObrigatorios = () => {
    if (__inputMaiusculoPlural.value
      && __inputMinusculoPlural.value
      && __inputMinusculoPluralAcentuado.value
      && __inputMinusculoSingular.value
      && __inputMinusculoSingularAcentuado.value
      && __inputTituloSingular.value
      && __inputTituloPlural.value
      && __inputTituloSingularAcentuado.value
      && __inputArtigo.value
    ) return true

    window.alert('Preencha todos os campos obrigatórios.')
    return false
  }

  methods.limparCampos = () => {
    __inputMaiusculoPlural.value = ''
    __inputMinusculoPlural.value = ''
    __inputMinusculoPluralAcentuado.value = ''
    __inputMinusculoSingular.value = ''
    __inputMinusculoSingularAcentuado.value = ''
    __inputTituloSingular.value = ''
    __inputTituloPlural.value = ''
    __inputTituloSingularAcentuado.value = ''
    __inputArtigo.value = ''
  }

  methods.exportarDados = () => {
    return {
      maiusculoPlural: __inputMaiusculoPlural.value,
      minusculoPlural: __inputMinusculoPlural.value,
      minusculoPluralAcentuado: __inputMinusculoPluralAcentuado.value,
      minusculoSingular: __inputMinusculoSingular.value,
      minusculoSingularAcentuado: __inputMinusculoSingularAcentuado.value,
      tituloSingular: __inputTituloSingular.value,
      tituloPlural: __inputTituloPlural.value,
      tituloSingularAcentuado: __inputTituloSingularAcentuado.value,
      artigo: __inputArtigo.value
    }
  }

  return methods
}
