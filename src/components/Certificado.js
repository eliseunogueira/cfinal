import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import {
  Form,
  Container,
  Input,
  FormButton,
  Header,
  TextArea,
  Message,
} from 'semantic-ui-react';
import {
  getEquipamentoQuery,
  addCertificadoMutation,
  getListaCertificados,
} from '../queries';
import CurrentUser from './CurrentUser';

class Certificado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarioId: '',
      equipamentoId: '',
      nome: '',
      padrao: '',
      ambiente: '',
      observacao: '',
      data: '',
      nome_ap: '',
      email_ap: '',
      status: '',
      arquivo: '',
    };
  }
  componentDidMount() {
    let currenteuser = CurrentUser();
    this.setState({ usuarioId: currenteuser.id.toString() });
  }
  mostraEquipamento() {
    let data = this.props.getEquipamentoQuery;
    if (data.loading) {
      return <option disabled>Loading Equipamentos</option>;
    } else {
      return data.equipamentos.map((equipamento) => {
        return (
          <option key={equipamento.id} value={equipamento.id}>
            {equipamento.nome} * Cliente->{equipamento.cliente.nome}
          </option>
        );
      });
    }
  }
  submitForm(e) {
    e.preventDefault();
    this.props.addCertificadoMutation({
      variables: {
        usuarioId: this.state.usuarioId,
        equipamentoId: this.state.equipamentoId,
        nome: this.state.nome,
        padrao: this.state.padrao,
        ambiente: this.state.ambiente,
        observacao: this.state.observacao,
        data: this.state.data,
        nome_ap: this.state.nome_ap,
        email_ap: this.state.email_ap,
        status: this.state.status,
        arquivo: this.state.arquivo,
      },
      refetchQueries: [{ query: getListaCertificados }],
    });
  }
  render() {
    return (
      <Container text>
        <Header as="h2">Emitir Certificado</Header>
        <Form onSubmit={this.submitForm.bind(this)}>
          <Form.Field>
            <label>Equipamento</label>
            <select
              onChange={(e) => this.setState({ equipamentoId: e.target.value })}
            >
              <option>Selecione o Equipamento</option>
              {this.mostraEquipamento()}
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
            <TextArea
              placeholder="Padrão"
              onChange={(e) => this.setState({ padrao: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <Input
              label="Ambiente"
              type="text"
              onChange={(e) => this.setState({ ambiente: e.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <TextArea
              placeholder="Observação"
              onChange={(e) => this.setState({ observacao: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <Input
              label="Data"
              type="date"
              onChange={(e) => this.setState({ data: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <Input
              label="Responsavel por aprovar"
              type="text"
              onChange={(e) => this.setState({ nome_ap: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <Input
              label="Email Aprovador"
              type="text"
              onChange={(e) => this.setState({ email_ap: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <TextArea
              autoHeight
              placeholder="Status"
              onChange={(e) => this.setState({ status: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <TextArea
              placeholder="Arquivo"
              onChange={(e) => this.setState({ arquivo: e.target.value })}
            />
          </Form.Field>

          <FormButton color="blue">+</FormButton>
        </Form>
      </Container>
    );
  }
}

export default compose(
  graphql(getListaCertificados, { name: 'getListaCertificados' }),
  graphql(getEquipamentoQuery, { name: 'getEquipamentoQuery' }),
  graphql(addCertificadoMutation, { name: 'addCertificadoMutation' }),
)(Certificado);
