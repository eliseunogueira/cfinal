import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { compose, graphql } from 'react-apollo';

const getUsuariosQuery = gql`
  {
    usuarios {
      id
      username
      email
    }
  }
`;
class Usuarios extends Component {
  displayUsuarios() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading usuarios...</div>;
    } else {
      return data.usuarios.map((usuario) => {
        return (
          <li key={usuario.id}>
            {usuario.username} {usuario.email}
          </li>
        );
      });
    }
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <ul>{this.displayUsuarios()}</ul>
      </div>
    );
  }
}
export default graphql(getUsuariosQuery)(Usuarios);
