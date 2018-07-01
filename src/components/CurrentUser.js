import decode from 'jwt-decode';
const CurrentUser = () => {
  const token = localStorage.getItem('token');

  try {
    let usuario = decode(token);
    return usuario;
  } catch (error) {
    throw new Error('Não burle o sistema');
  }
};

export default CurrentUser;
