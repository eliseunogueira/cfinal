import React from 'react';
import { Icon, Table } from 'semantic-ui-react';
import { gql } from 'apollo-boost';
import { compose, graphql } from 'react-apollo';
import CurrentUser from './CurrentUser';

const getListaCertificadoByClienteEmpresa = gql`
  {
    certificadosByUser {
      id
      nome
      status
      data
      equipamento {
        id
        nome
        cliente {
          id
          nome
          responsavel
        }
      }
    }
  }
`;

class ListaCertificados extends React.Component {
  componentDidMount() {
    const usuario = CurrentUser();
  }
  render() {
    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Empresa</Table.HeaderCell>
              <Table.HeaderCell>Equipamento</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Data</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>No Name Specified</Table.Cell>
              <Table.Cell>Unknown</Table.Cell>
              <Table.Cell negative>None</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default ListaCertificados;
