/* Requires */

import {gerarArquivoRoute} from '../libs/route.js'
import {gerarArquivoController} from '../libs/controller.js'
import {gerarArquivoRepository} from '../libs/repository.js'

/* Start */

const maiusculoPlural = 'CLIENTES'
const minusculoSingularAcento = 'cliente'

const minusculoPlural = 'clientes'
const minusculoSingular = 'cliente'

const tituloPlural = 'Clientes'
const tituloSingular = 'Cliente'
const tituloSingularAcento = 'Cliente'

const artigo = 'o'

const conteudoArquivoRota = gerarArquivoRoute(maiusculoPlural, minusculoPlural, tituloSingular)
const conteudoArquivoController = gerarArquivoController(maiusculoPlural, minusculoPlural, minusculoSingular, tituloSingular, minusculoSingularAcento, tituloSingularAcento, artigo)
const conteudoArquivoRepository = gerarArquivoRepository(maiusculoPlural, minusculoSingular, tituloPlural, tituloSingular)

console.log(conteudoArquivoRota)
console.log(conteudoArquivoController)
console.log(conteudoArquivoRepository)
