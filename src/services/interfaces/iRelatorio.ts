import Relatorio from "../../models/entities/base/relatorio";

export default interface IRelatorio {
  GerarRelatorio(relatorio: Relatorio): string
}
