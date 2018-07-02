import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { Form, Container, Input, FormButton, Header } from 'semantic-ui-react';
import {
  getEmpresaQuery,
  addClienteMutation,
  getEquipamentoQuery,
} from '../queries';
import CurrentUser from './CurrentUser';

class Clientes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarioId: '',
      empresaId: '',
      nome: '',
      cnpj: '',
      responsavel: '',
      email_1: '',
      email_2: '',
      telefone: '',
    };
  }
  componentDidMount() {
    let currenteuser = CurrentUser();
    this.setState({ usuarioId: currenteuser.id.toString() });
  }

  mostraEmpresa() {
    let data = this.props.getEmpresaQuery;
    if (data.loading) {
      return <option disabled>Loading Empresas</option>;
    } else {
      return data.empresas.map((empresa) => {
        return (
          <option key={empresa.id} value={empresa.id}>
            {empresa.nome}
          </option>
        );
      });
    }
  }
  submitForm(e) {
    e.preventDefault();
    this.props.addClienteMutation({
      variables: {
        usuarioId: this.state.usuarioId,
        empresaId: this.state.empresaId,
        nome: this.state.nome,
        cnpj: this.state.cnpj,
        responsavel: this.state.responsavel,
        email_1: this.state.email_1,
        email_2: this.state.email_2,
        telefone: this.state.telefone,
      },
      refetchQueries: [{ query: getEquipamentoQuery }],
    });
  }
  render() {
    return (
      <Container text>
        <Header as="h2">Cadastro de Cliente</Header>
        <Form onSubmit={this.submitForm.bind(this)}>
          <Form.Field>
            <label>Empresa:</label>
            <select
              onChange={(e) => this.setState({ empresaId: e.target.value })}
            >
              <option>Selecione a Empresa</option>
              {this.mostraEmpresa()}
            </select>
          </Form.Field>
          <Form.Field>
            <Input
              label="Nome"
              type="text"
              onChange={(e) => this.setState({ nome: e.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <Input
              label="CNPJ"
              type="text"
              onChange={(e) => this.setState({ cnpj: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <Input
              label="Responsavel"
              type="text"
              onChange={(e) => this.setState({ responsavel: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <Input
              label="E-mail 1"
              type="text"
              onChange={(e) => this.setState({ email_1: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <Input
              label="E-mail 2"
              type="text"
              onChange={(e) => this.setState({ email_2: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <Input
              label="Telefone"
              type="text"
              onChange={(e) => this.setState({ telefone: e.target.value })}
            />
          </Form.Field>

          <FormButton color="blue">+</FormButton>
        </Form>
      </Container>
    );
  }
}

export default compose(
  graphql(getEquipamentoQuery, { name: 'getEquipamentoQuery' }),
  graphql(getEmpresaQuery, { name: 'getEmpresaQuery' }),
  graphql(addClienteMutation, { name: 'addClienteMutation' }),
)(Clientes);
