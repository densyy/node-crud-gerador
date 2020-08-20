/* Requires */

import {gerarArquivoRoute} from '../libs/route.js'
import {gerarArquivoController} from '../libs/controller.js'
import {gerarArquivoRepository} from '../libs/repository.js'

/* Start */

const maiusculoPlural = 'CLIENTES'

const minusculoPlural = 'clientes'
const minusculoSingular = 'cliente'
const minusculoSingularAcento = 'cliente'

const tituloPlural = 'Clientes'
const tituloSingular = 'Cliente'
const tituloSingularAcento = 'Cliente'

const artigo = 'o'

const conteudoArquivoRota = gerarArquivoRoute(
  maiusculoPlural,
  minusculoPlural,
  tituloSingular
)

const conteudoArquivoController = gerarArquivoController(
  maiusculoPlural,
  minusculoPlural,
  minusculoSingular,
  tituloSingular,
  minusculoSingularAcento,
  tituloSingularAcento,
  artigo
)

const conteudoArquivoRepository = gerarArquivoRepository(
  maiusculoPlural,
  minusculoSingular,
  tituloPlural,
  tituloSingular
)

const textareaRoute = document.querySelector('section#resultados textarea#route')
const textareaController = document.querySelector('section#resultados textarea#controller')
const textareaRepository = document.querySelector('section#resultados textarea#repository')

textareaRoute.innerHTML = conteudoArquivoRota
textareaController.innerHTML = conteudoArquivoController
textareaRepository.innerHTML = conteudoArquivoRepository
