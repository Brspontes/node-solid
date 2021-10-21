import Relatorio from '../../../domain/entities/base/relatorio'

export default interface IRelatorio {
  GerarRelatorio(relatorio: Relatorio): string
}
