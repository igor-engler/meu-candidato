export type DeputadosProps = {
  id: string;
  nome: string;
  foto: string;
  estados: [string];
}

export const states = [
  {key: "Todos", title: "Todos"},
  {key: "AC", title: "Acre"},
  {key: "AL", title: "Alagoas"},
  {key: "AP", title: "Amapá"},
  {key: "AM", title: "Amazonas"},
  {key: "BA", title: "Bahia"},
  {key: "CE", title: "Ceará"},
  {key: "ES", title: "Espírito Santo"},
  {key: "GO", title: "Goiás"},
  {key: "MA", title: "Maranhão"},
  {key: "MT", title: "Mato Grosso"},
  {key: "MS", title: "Mato Grosso do Sul"},
  {key: "MG", title: "Minas Gerais"},
  {key: "PA", title: "Pará"},
  {key: "PB", title: "Paraíba"},
  {key: "PR", title: "Paraná"},
  {key: "PE", title: "Pernambuco"},
  {key: "PI", title: "Piauí"},
  {key: "RJ", title: "Rio de Janeiro"},
  {key: "RS", title: "Rio Grande do Sul"},
  {key: "RN", title: "Rio Grande do Norte"},
  {key: "RO", title: "Rondônia"},
  {key: "RR", title: "Roraima"},
  {key: "SC", title: "Santa Catarina"},
  {key: "SP", title: "São Paulo"},
  {key: "SE", title: "Sergipe"},
  {key: "TO", title: "Tocantis"},
  {key: "DF", title: "Distrito Federal"},
]