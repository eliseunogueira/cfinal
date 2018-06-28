import React from 'react';
import { Message, Button, Input, Container, Header } from 'semantic-ui-react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const registerMutation = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password) {
      id
    }
  }
`;

class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
  };

  onSubmit = async () => {
    this.setState({
      usernameError: '',
      emailError: '',
      passwordError: '',
    });

    const { username, email, password } = this.state;
    const response = await this.props.mutate({
      variables: { username, email, password },
    });

    let data = response.data;

    // console.log(response);
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password } = this.state;

    return (
      <Container text>
        <Header as="h2">Cadastro do Usuarios</Header>
        <Input
          name="username"
          onChange={this.onChange}
          value={username}
          placeholder="Username"
          fluid
        />
        <Input
          name="email"
          onChange={this.onChange}
          value={email}
          placeholder="E-mail"
          fluid
        />
        <Input
          name="password"
          onChange={this.onChange}
          value={password}
          type="password"
          placeholder="Senha"
          fluid
        />
        <br />
        <Button inverted primary onClick={this.onSubmit}>
          Cadastrar
        </Button>
      </Container>
    );
  }
}
export default graphql(registerMutation)(Register);
