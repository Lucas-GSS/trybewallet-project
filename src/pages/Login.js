import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { playerLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkPlayerLogin = this.checkPlayerLogin.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  checkPlayerLogin() {
    // Regex retirada de:
    // https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
    const emailPattern = /\S+@\S+\.\S+/;
    const passwordLength = 6;
    const { email, password } = this.state;
    return emailPattern.test(email) && password.length >= passwordLength;
  }

  handleClick() {
    const { email } = this.state;
    const { dispatchPlayerLogin, history } = this.props;
    dispatchPlayerLogin(email);
    history.push('/carteira');
  }

  render() {
    return (
      <form>
        <input
          type="email"
          name="email"
          data-testid="email-input"
          placeholder="Email"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          name="password"
          data-testid="password-input"
          placeholder="Senha"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          onClick={ this.handleClick }
          disabled={ !this.checkPlayerLogin() }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchPlayerLogin: (email) => dispatch(playerLogin(email)),
});

Login.propTypes = {
  dispatchPlayerLogin: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
