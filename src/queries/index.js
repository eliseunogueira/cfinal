import { gql } from 'apollo-boost';

/**
 * Consulta os equipamento
 */
const getEquipamentoQuery = gql`
  {
    equipamentos {
      id
      nome
    }
  }
`;

const addCertificadoMutation = gql`
  mutation cadEquipamento(
    $equipamentoId: ID!
    $nome: String!
    $padrao: String
    $ambiente: String
    $observacao: String
    $data: String
    $nome_ap: String
    $email_ap: String
    $status: String
    $arquivo: String
  ) {
    addCertificadoMutation(
      equipamentoId: $equipamentoId
      nome: $nome
      padrao: $padrao
      ambiente: $ambiente
      observacao: $observacao
      data: $data
      nome_ap: $nome_ap
      email_ap: $email_ap
      status: $status
      arquivo: $arquivo
    ) {
      id
      nome
      status
    }
  }
`;

const addEquipamentoMutation = gql`
  mutation cadEquipamento(
    $clienteId: String!
    $nome: String!
    $fabricante: String
    $modelo: String
    $nserie: String
    $responsavel: String
    $email_responsavel: String
    $localizacao: String
    $parametros: String
    $ensaio: String
    $status: String
  ) {
    addEquipamentoMutation(
      clienteId: $clienteId
      nome: $nome
      fabricante: $fabricante
      modelo: $modelo
      nserie: $nserie
      responsavel: $responsavel
      email_responsavel: $email_responsavel
      localizacao: $localizacao
      parametros: $parametros
      ensaio: $ensaio
      status: $status
    ) {
      id
      nome
      fabricante
    }
  }
`;

const getClienteQuery = gql`
  {
    clientes {
      id
      nome
    }
  }
`;

const addClienteMutation = gql`
  mutation cadCliente(
    $empresaId: String!
    $nome: String!
    $cnpj: String
    $responsavel: String
    $email_1: String
    $email_2: String
    $telefone: String
  ) {
    addClienteMutation(
      empresaId: $empresaId
      nome: $nome
      cnpj: $cnpj
      responsavel: $responsavel
      email_1: $email_1
      email_2: $email_2
      telefone: $telefone
    ) {
      id
      nome
      cnpj
      responsavel
      email_1
      email_2
      telefone
    }
  }
`;
const addEmpresaMutation = gql`
  mutation cadEmpresa(
    $usuarioId: String!
    $nome: String!
    $cnpj: String
    $responsavel: String
    $email_1: String
    $email_2: String
    $telefone: String
  ) {
    addEmpresaMutation(
      usuarioId: $usuarioId
      nome: $nome
      cnpj: $cnpj
      responsavel: $responsavel
      email_1: $email_1
      email_2: $email_2
      telefone: $telefone
    ) {
      id
    }
  }
`;
const getUsuarioQuery = gql`
  {
    me {
      id
      username
    }
  }
`;
const getEmpresaQuery = gql`
  {
    empresas {
      id
      nome
    }
  }
`;

export {
  addCertificadoMutation,
  addEmpresaMutation,
  getUsuarioQuery,
  getEmpresaQuery,
  getClienteQuery,
  addClienteMutation,
  addEquipamentoMutation,
  getEquipamentoQuery,
};
