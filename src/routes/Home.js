import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';

export default class Home extends Component {
  handleItemClick = (name) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state || {};

    return (
      <Container>
        <Menu vertical>
          <Menu.Item>
            <Menu.Header>Minha Empresa</Menu.Header>

            <Menu.Menu>
              <Menu.Item
                name="Cadastro"
                active={activeItem === 'cadastro'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="baixa"
                active={activeItem === 'baixa'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Clientes</Menu.Header>

            <Menu.Menu>
              <Menu.Item
                name="Cadastro"
                active={activeItem === 'cadcliente'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="baixa"
                active={activeItem === 'baixacliente'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Equipamentos</Menu.Header>

            <Menu.Menu>
              <Menu.Item
                name="Cadastro"
                active={activeItem === 'cadequipamento'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="baixa"
                active={activeItem === 'baxiaequipamento'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Certificados</Menu.Header>

            <Menu.Menu>
              <Menu.Item
                name="Emitir"
                active={activeItem === 'emitir'}
                onClick={this.handleItemClick}
              />

              <Menu.Item
                name="faq"
                active={activeItem === 'faq'}
                onClick={this.handleItemClick}
              >
                Aprovadores
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      </Container>
    );
  }
}
