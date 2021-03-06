import { injectable } from 'inversify'
import relatorio from '../domain/entities/base/entityBase'
import IRelatorio from '../core/interfaces/services/iRelatorio'

@injectable()
export default class RelatorioService implements IRelatorio {
  GerarRelatorio (relatorio: relatorio): string {
    return `${relatorio.constructor.name} Gerado com sucesso`
  }
}
