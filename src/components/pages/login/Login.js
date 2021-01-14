import React from 'react';
import { withRouter } from 'react-router-dom';
import InputText from '../../inputItem';
import ButtonItem from '../../buttomItem';

import { ValidEmail, ValidPassword } from '../../../service/validService';
import DataService from '../../../service/serverService';

import { connect } from 'react-redux';

import {

  setEmailText,
  setValidEmail,
  setPasswordText,
  setValidPassword,
  setIsAuthValue,
  setClientIdText,
  setAccessTokenText,
  setRefreshTokenText,

} from '../../../store/auth/actions';

import './Login.scss';

const Login = ({ store, history }) => {

  const getAuth = () => {

    const setdata = new DataService();

    setdata.postAuth('token/', store.getState().auth.email, store.getState().auth.password)
      .then(res => {

        const { access, client_id, refresh } = res.data;

        store.dispatch(setClientIdText(client_id));
        store.dispatch(setAccessTokenText(access));
        store.dispatch(setRefreshTokenText(refresh));

        localStorage.setItem('clientId', store.getState().auth.clientId);
        localStorage.setItem('accessToken', store.getState().auth.accessToken);
        localStorage.setItem('refreshToken', store.getState().auth.refreshToken);

        alert('Вход в систему');

        store.dispatch(setIsAuthValue(true));
        localStorage.setItem('setIsAuthValue', store.getState().auth.isAuthValue);
        history.push('/');

      })
      .catch( error => {

        alert('Ошибка входа, попробуйте ещё раз');

      })

  }

  const validFabrica = (validTemplate, value, setText, SetValid) => {

    const valid = new validTemplate( store, value );

    if (  valid.checkRegexp()  ) {

      valid.validInput(setText, SetValid);

    } else {

      valid.unvalidInput(setText, SetValid);

    }

  }

  // валидация email
  const checkLogin = (value) => {

    validFabrica(ValidEmail,value, setEmailText, setValidEmail);

  };

  // валидация пароля
  const checkPassword = (value) => {

    validFabrica(ValidPassword,value, setPasswordText, setValidPassword);

  };

  return (

    <div className="login">

      <div className="container">

        <h1 className="login__title">Авторизация</h1>

        <div className="login__auth">

            <InputText
              title="Email: "
              type="email"
              placeholder='Для логина используйте email в формате: email@exampl.net'
              checkFunc={ checkLogin }
              inputValid={ store.getState().auth.isValidEmail }
              required
            />

            <InputText
              title="Password: "
              type="password"
              placeholder='Введите ваш пароль'
              checkFunc={ checkPassword }
              inputValid={ store.getState().auth.isValidPassword }
              required
            />

          <ButtonItem
            text="Войти"
            func={ getAuth }
            disabledButton={ !(store.getState().auth.isValidEmail && store.getState().auth.isValidPassword) }
          />

        </div>


      </div>

    </div>

  )

};


const mapStateToProps = state => {

  return {

    email: state.auth.email,
    isValidEmail: state.auth.isValidEmail,
    password: state.auth.password,
    isValidPassword: state.auth.isValidPassword,
    clientId: state.auth.clientId,
    accessToken: state.auth.accessToken,
    refreshToken: state.auth.refreshToken,

  }

};

const mapDispatchToProps = {

  setEmailText,
  setValidEmail,
  setPasswordText,
  setValidPassword,
  setIsAuthValue,
  setClientIdText,
  setAccessTokenText,
  setRefreshTokenText,

};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
