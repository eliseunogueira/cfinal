import { gql } from 'apollo-boost';

const deletaCertificado = gql`
  mutation cadEquipamento($id: String!) {
    deleteCertificado(id: $id) {
      message
    }
  }
`;

const novatemtativaEmail = gql`
  mutation novatemtativaEmail($id: String!) {
    novatemtativaEmail(id: $id) {
      id
    }
  }
`;

const getListaCertificados = gql`
  {
    certificados {
      id
      nome
      status
      data
      createdAt
      email_ap
      equipamento {
        id
        nome
        responsavel
        cliente {
          id
          nome
          responsavel
        }
      }
    }
  }
`;

const getEquipamentoQuery = gql`
  {
    equipamentos {
      id
      nome
      cliente {
        nome
      }
    }
  }
`;

const addCertificadoMutation = gql`
  mutation cadEquipamento(
    $usuarioId: String!
    $equipamentoId: String!
    $nome: String!
    $padrao: String
    $ambiente: String
    $observacao: String
    $data: Date
    $nome_ap: String
    $email_ap: String
    $status: String
    $arquivo: String
  ) {
    addCertificadoMutation(
      usuarioId: $usuarioId
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
    $usuarioId: String!
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
      usuarioId: $usuarioId
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
    $usuarioId: String!
    $empresaId: String!
    $nome: String!
    $cnpj: String
    $responsavel: String
    $email_1: String
    $email_2: String
    $telefone: String
  ) {
    addClienteMutation(
      usuarioId: $usuarioId
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
  novatemtativaEmail,
  deletaCertificado,
  getListaCertificados,
  addCertificadoMutation,
  addEmpresaMutation,
  getUsuarioQuery,
  getEmpresaQuery,
  getClienteQuery,
  addClienteMutation,
  addEquipamentoMutation,
  getEquipamentoQuery,
};
