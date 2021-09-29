import { injectable } from 'inversify'
import relatorio from '../models/entities/base/relatorio'
import IRelatorio from './interfaces/iRelatorio'

@injectable()
export default class RelatorioService implements IRelatorio {
  GerarRelatorio (relatorio: relatorio): string {
    return `${relatorio.constructor.name} Gerado com sucesso`
  }
}
