import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BUTTON_CLASS = 'bg-emerald-500  disabled:opacity-50 hover:bg-purple-500';
const BUTTON_SPACE = 'rounded-md p-1 w-32';

function Login({ history }) {
  const [loginEmail, setLoginEmail] = useState('seunome@email.com');
  const [loginPassword, setLoginPassword] = useState('123456789');

  const validadeInputs = () => {
    const PASSWORD_LENGTH = 7;
    const regexEmail = /\w+@+\w+\.com/ig;
    const validateEmail = regexEmail.test(loginEmail);
    const checkPassword = loginPassword.length >= PASSWORD_LENGTH;
    return !(validateEmail && checkPassword);
  };

  const submitBTM = () => {
    const email = { email: loginEmail };

    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify(email));
    history.push('/foods');
  };

  return (
    <section className="flex w-screen h-screen justify-center items-center bg-orange-500">
      <section className="flex flex-col">
        <h1 className="flex justify-center text-5xl ">Login</h1>
        <form className="flex flex-col items-center">
          <section className="p-2">
            <input
              className="rounded-md p-2"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              data-testid="email-input"
              onChange={ ({ target }) => setLoginEmail(target.value) }
              value={ loginEmail }
            />
          </section>
          <section className="p-2">
            <input
              className="rounded-md p-2"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              data-testid="password-input"
              onChange={ ({ target }) => setLoginPassword(target.value) }
              value={ loginPassword }
            />
          </section>
          <section className="p-2">
            <button
              className={ ` ${BUTTON_CLASS} ${BUTTON_SPACE}` }
              type="button"
              data-testid="login-submit-btn"
              disabled={ validadeInputs() }
              onClick={ () => submitBTM() }
            >
              Entrar
            </button>
          </section>
        </form>
        <span className="bg-gray-100 rounded-md p-1 m-4">
          Entre com esses dados ficticios
        </span>
      </section>
    </section>

  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
