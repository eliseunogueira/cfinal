import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { Form, Container, Input, FormButton, Header } from 'semantic-ui-react';
import { getUsuarioQuery, addEmpresaMutation } from '../queries';

class Empresas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarioId: '',
      nome: '',
      cnpj: '',
      responsavel: '',
      email_1: '',
      email_2: '',
      telefone: '',
    };
  }

  mostraUsuario() {
    let data = this.props.getUsuarioQuery;
    if (data.loading) {
      return <option disabled>Loading Usuario</option>;
    } else {
      return (
        <option key={data.me.id} value={data.me.id}>
          {data.me.username}
        </option>
      );
    }
  }
  submitForm(e) {
    e.preventDefault();
    // use the addBookMutation
    this.props.addEmpresaMutation({
      variables: {
        usuarioId: this.state.usuarioId,
        nome: this.state.nome,
        cnpj: this.state.cnpj,
        responsavel: this.state.responsavel,
        email_1: this.state.email_1,
        email_2: this.state.email_2,
        telefone: this.state.telefone,
      },
      refetchQueries: [{ query: addEmpresaMutation }],
    });
  }
  render() {
    return (
      <Container text>
        <Header as="h2">Cadastro Empresa Prestadora de Serviço</Header>
        <Form onSubmit={this.submitForm.bind(this)}>
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

          <Form.Field>
            <label>Usuario:</label>
            <select
              onChange={(e) => this.setState({ usuarioId: e.target.value })}
            >
              <option>Selecione o usuario</option>
              {this.mostraUsuario()}
            </select>
          </Form.Field>
          <FormButton color="blue">+</FormButton>
        </Form>
      </Container>
    );
  }
}

export default compose(
  graphql(getUsuarioQuery, { name: 'getUsuarioQuery' }),
  graphql(addEmpresaMutation, { name: 'addEmpresaMutation' }),
)(Empresas);
