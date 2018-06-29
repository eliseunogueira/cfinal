import React from 'react';
import {
  Form,
  Message,
  Button,
  Input,
  Container,
  Header,
} from 'semantic-ui-react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const registerMutation = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password) {
      ok
      usuario {
        id
        email
        jwt
      }
      errors {
        path
        message
      }
    }
  }
`;

class Register extends React.Component {
  state = {
    username: '',
    usernameError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
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

    let { ok, errors } = response.data.signup;
    if (ok) {
      this.props.history.push('/');
    } else {
      const err = {};
      errors.forEach(({ path, message }) => {
        err[`${path}Error`] = message;
      });
      this.setState(err);
    }

    console.log(response);
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      username,
      email,
      password,
      usernameError,
      emailError,
      passwordError,
    } = this.state;

    const errorList = [];
    if (usernameError) {
      errorList.push(usernameError);
    }

    if (emailError) {
      errorList.push(emailError);
    }

    if (passwordError) {
      errorList.push(passwordError);
    }
    return (
      <Container text>
        <Header as="h2">Cadastro do Usuarios</Header>
        {usernameError || emailError || passwordError ? (
          <Message error header="Verifique" list={errorList} />
        ) : null}
        <Form>
          <Form.Input error={!!usernameError}>
            <Input
              name="username"
              onChange={this.onChange}
              value={username}
              placeholder="Username"
              fluid
            />
          </Form.Input>
          <Form.Input error={!!emailError}>
            <Input
              name="email"
              onChange={this.onChange}
              value={email}
              placeholder="E-mail"
              fluid
            />
          </Form.Input>
          <Form.Input>
            <Input
              name="password"
              onChange={this.onChange}
              value={password}
              type="password"
              placeholder="Senha"
              fluid
            />
          </Form.Input>
          <Button inverted primary onClick={this.onSubmit}>
            Cadastrar
          </Button>
        </Form>
      </Container>
    );
  }
}
export default graphql(registerMutation)(Register);
