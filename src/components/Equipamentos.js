import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import {
  Form,
  Container,
  Input,
  FormButton,
  Header,
  TextArea,
} from 'semantic-ui-react';
import { getClienteQuery, addEquipamentoMutation } from '../queries';

class Equipamentos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clienteId: '',
      nome: '',
      fabricante: '',
      modelo: '',
      nserie: '',
      responsavel: '',
      email_responsavel: '',
      localizacao: '',
      parametros: '',
      ensaio: '',
      status: '',
    };
  }

  mostraCliente() {
    let data = this.props.getClienteQuery;
    if (data.loading) {
      return <option disabled>Loading Cliente</option>;
    } else {
      return data.clientes.map((cliente) => {
        return (
          <option key={cliente.id} value={cliente.id}>
            {cliente.nome}
          </option>
        );
      });
    }
  }
  submitForm(e) {
    e.preventDefault();
    this.props.addEquipamentoMutation({
      variables: {
        clienteId: this.state.clienteId,
        nome: this.state.nome,
        fabricante: this.state.fabricante,
        modelo: this.state.modelo,
        nserie: this.state.nserie,
        responsavel: this.state.responsavel,
        email_responsavel: this.state.email_responsavel,
        localizacao: this.state.localizacao,
        parametros: this.state.parametros,
        ensaio: this.state.ensaio,
        status: this.state.status,
      },
    });
  }
  render() {
    console.log(this.props);
    return (
      <Container text>
        <Header as="h2">Cadastro de Equipamento</Header>
        <Form onSubmit={this.submitForm.bind(this)}>
          <Form.Field>
            <label>Cliente:</label>
            <select
              onChange={(e) => this.setState({ clienteId: e.target.value })}
            >
              <option>Selecione o Cliente</option>
              {this.mostraCliente()}
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
              label="Fabricante"
              type="text"
              onChange={(e) => this.setState({ fabricante: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <Input
              label="Modelo"
              type="text"
              onChange={(e) => this.setState({ modelo: e.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <Input
              label="Nº Serie"
              type="text"
              onChange={(e) => this.setState({ nserie: e.target.value })}
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
              label="E-mail Responsavel"
              type="text"
              onChange={(e) =>
                this.setState({ email_responsavel: e.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <Input
              label="Localização"
              type="text"
              onChange={(e) => this.setState({ localizacao: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <TextArea
              placeholder="Parametros"
              onChange={(e) => this.setState({ parametros: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <TextArea
              autoHeight
              placeholder="Ensaios"
              onChange={(e) => this.setState({ ensaio: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <Input
              label="status"
              type="text"
              onChange={(e) => this.setState({ status: e.target.value })}
            />
          </Form.Field>

          <FormButton color="blue">+</FormButton>
        </Form>
      </Container>
    );
  }
}

export default compose(
  graphql(getClienteQuery, { name: 'getClienteQuery' }),
  graphql(addEquipamentoMutation, { name: 'addEquipamentoMutation' }),
)(Equipamentos);
