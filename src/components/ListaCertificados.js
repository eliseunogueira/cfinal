import React from 'react';
import {
  Container,
  Header,
  Table,
  TableCell,
  Button,
  Icon,
} from 'semantic-ui-react';
import { gql } from 'apollo-boost';
import { compose, graphql } from 'react-apollo';
import CurrentUser from './CurrentUser';
import { getListaCertificados, deletaCertificado } from '../queries';

class ListaCertificados extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const usuario = CurrentUser();
  }

  handleClick(e) {
    this.props.deletaCertificado({
      variables: { id: e.toString() },
      refetchQueries: [{ query: getListaCertificados }],
    });
  }

  mostraCertificados() {
    let data = this.props.getListaCertificados;
    if (data.loading) {
      return (
        <Table.Row>
          <Table.Cell>Carregando Certificados</Table.Cell>
        </Table.Row>
      );
    } else {
      return data.certificados.map((certificado) => {
        return (
          <Table.Row key={certificado.id}>
            <Table.Cell>{certificado.equipamento.cliente.nome}</Table.Cell>
            <Table.Cell>{certificado.equipamento.nome}</Table.Cell>
            <Table.Cell>{certificado.createdAt}</Table.Cell>
            <Table.Cell>{certificado.equipamento.responsavel}</Table.Cell>
            <Table.Cell>{certificado.status}</Table.Cell>
            <Table.Cell>
              <Button color="blue">
                <Icon name="certificate" />Aprovação
              </Button>
              <Button
                color="red"
                onClick={(e) => this.handleClick(certificado.id)}
              >
                <Icon name="trash" />Excluir
              </Button>
              <Button color="green">
                <Icon name="edit" />Editar
              </Button>
            </Table.Cell>
          </Table.Row>
        );
      });
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Container fluid>
          <Header>Certificados</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Cliente</Table.HeaderCell>
                <Table.HeaderCell>Equipamento</Table.HeaderCell>
                <Table.HeaderCell>Data</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Data</Table.HeaderCell>
                <Table.HeaderCell>Ação</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>{this.mostraCertificados()}</Table.Body>
          </Table>
        </Container>
      </div>
    );
  }
}

export default compose(
  graphql(getListaCertificados, { name: 'getListaCertificados' }),
  graphql(deletaCertificado, { name: 'deletaCertificado' }),
)(ListaCertificados);
