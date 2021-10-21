import Relatorio from '../../../domain/entities/base/entityBase'

export default interface IRelatorio {
  GerarRelatorio(relatorio: Relatorio): string
}
