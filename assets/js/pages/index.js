/* Requires */

import {gerarArquivoRoute} from '../libs/route.js'
import {gerarArquivoController} from '../libs/controller.js'
import {gerarArquivoRepository} from '../libs/repository.js'

/* Start */

function gerar (dados) {
  const conteudoArquivoRota = gerarArquivoRoute(
    dados.maiusculoPlural,
    dados.minusculoPlural,
    dados.tituloSingular
  )

  const conteudoArquivoController = gerarArquivoController(
    dados.maiusculoPlural,
    dados.minusculoPlural,
    dados.minusculoPluralAcentuado,
    dados.minusculoSingular,
    dados.tituloSingular,
    dados.minusculoSingularAcentuado,
    dados.tituloSingularAcentuado,
    dados.artigo,
  )

  const conteudoArquivoRepository = gerarArquivoRepository(
    dados.maiusculoPlural,
    dados.minusculoSingular,
    dados.tituloPlural,
    dados.tituloSingular
  )

  const textareaRoute = document.querySelector('section#resultados textarea#route')
  const textareaController = document.querySelector('section#resultados textarea#controller')
  const textareaRepository = document.querySelector('section#resultados textarea#repository')

  textareaRoute.innerHTML = conteudoArquivoRota
  textareaController.innerHTML = conteudoArquivoController
  textareaRepository.innerHTML = conteudoArquivoRepository
}

/* Event */

const buttonGerar = document.querySelector('section#entradas button#gerar')
buttonGerar.addEventListener('click', () => {
  const dados = exportarDados()
  gerar(dados)
})

/* Section */

function exportarDados () {
  const inputMaiusculoPlural = document.querySelector('section#entradas input#maiusculoPlural')
  const inputMinusculoPlural = document.querySelector('section#entradas input#minusculoPlural')
  const inputMinusculoPluralAcentuado = document.querySelector('section#entradas input#minusculoPluralAcentuado')
  const inputMinusculoSingular = document.querySelector('section#entradas input#minusculoSingular')
  const inputMinusculoSingularAcentuado = document.querySelector('section#entradas input#minusculosingularAcentuado')
  const inputTituloPlural = document.querySelector('section#entradas input#tituloPlural')
  const inputTituloSingular = document.querySelector('section#entradas input#tituloSingular')
  const inputTituloSingularAcentuado = document.querySelector('section#entradas input#tituloSingularAcentuado')
  const inputArtigo = document.querySelector('section#entradas input#artigo')

  return {
    maiusculoPlural: inputMaiusculoPlural.value,
    minusculoPlural: inputMinusculoPlural.value,
    minusculoPluralAcentuado: inputMinusculoPluralAcentuado.value,
    minusculoSingular: inputMinusculoSingular.value,
    minusculoSingularAcentuado: inputMinusculoSingularAcentuado.value,
    tituloSingular: inputTituloSingular.value,
    tituloPlural: inputTituloPlural.value,
    tituloSingularAcentuado: inputTituloSingularAcentuado.value,
    artigo: inputArtigo.value
  }
}
