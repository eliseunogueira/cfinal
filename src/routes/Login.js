import React from 'react';
import { extendObservable } from 'mobx';
import { observer } from 'mobx-react';
import { Form, Button, Input, Container, Header } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

class Login extends React.Component {
  constructor(props) {
    super(props);
    extendObservable(this, {
      email: '',
      password: '',
      errors: {},
    });
  }

  onSubmit = async () => {
    const { email, password } = this;
    const response = await this.props.mutate({
      variables: { email, password },
    });

    //console.log(response);

    const { ok, usuario, errors } = response.data.login;

    if (ok) {
      localStorage.setItem('token', usuario.jwt);
      this.props.history.replace('/');
    } else {
      const err = {};
      errors.forEach(({ path, message }) => {
        err[`${path}Error`] = message;
      });
      this.errors = err;
    }
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this[name] = value;
  };

  render() {
    const { email, password } = this;

    return (
      <Container text>
        <Header as="h2">Login</Header>
        <Form>
          <Form.Field>
            <Input
              name="email"
              onChange={this.onChange}
              value={email}
              placeholder="Email"
              fluid
              required
            />
          </Form.Field>
          <Form.Field>
            <Input
              name="password"
              onChange={this.onChange}
              value={password}
              type="password"
              placeholder="Password"
              fluid
              required
            />
          </Form.Field>
          <Button onClick={this.onSubmit}>Submit</Button>
        </Form>
      </Container>
    );
  }
}
const loginMutation = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
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
export default graphql(loginMutation)(observer(Login));
