import React from 'react';
import { Tab, Container, Header } from 'semantic-ui-react';
import Certificado from '../components/Certificado';
import Clientes from '../components/Clientes';
import Empresas from '../components/Empresas';
import Equipamentos from '../components/Equipamentos';
import ListaCertificados from '../components/ListaCertificados';

class Home extends React.Component {
  render() {
    let panes = [
      {
        menuItem: {
          icon: { name: 'building outline', color: 'violet' },
          name: 'Minha Empresa',
          key: 'empresa',
        },
        render: () => <Empresas />,
      },
      {
        menuItem: {
          icon: { name: 'users', color: 'green' },
          name: 'Clientes',
          key: 'cliente',
        },
        render: () => <Clientes />,
      },
      {
        menuItem: {
          icon: {
            name: 'dashboard',
            color: 'orange',
            inverted: true,
            bordered: true,
          },
          name: 'Equipamentos',
          key: 'equipamento',
        },
        render: () => <Equipamentos />,
      },
      {
        menuItem: {
          icon: { name: 'browser', color: 'blue', bordered: true },
          name: 'Certificados',
          key: 'Certificado',
        },
        render: () => <Certificado />,
      },
      {
        menuItem: {
          icon: { name: 'calendar check', color: 'blue' },
          name: 'Lista',
          key: 'Lista',
        },
        render: () => <ListaCertificados />,
      },
      {
        menuItem: {
          icon: { name: 'log out', color: 'blue' },
          name: 'Sair',
          key: 'Sair',
          position: 'right',
          onClick: () => {
            localStorage.removeItem('token');
            this.props.history.push('/');
          },
        },
      },
    ];

    return (
      <div>
        <Container>
          <Header as="h2">Gerenciador de Certificados</Header>
          <Tab
            menu={{
              color: 'grey',
              inverted: false,
              fluid: true,
            }}
            panes={panes}
          />
        </Container>
      </div>
    );
  }
}

export default Home;
