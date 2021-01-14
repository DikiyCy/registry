import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import {
  setEmailText,
  setValidEmail,
  setPasswordText,
  setValidPassword,
  setRepeatPasswordText,
  setValidRepeatPassword,
  setPhoneText,
  setValidPhone,
  setNameText,
  setValidName,
  setSurnameText,
  setValidSurname,
  setInvitedByText,
  setValidInvitedBy,
  setCountryKeyText,
  setValidCountryKey,
  setIsAuthValue
} from '../../../store/auth/actions';
import { ValidEmail, ValidPassword, ValidPhone, ValidName, ValidSurame } from '../../../service/validService';
import DataService from '../../../service/serverService';
import InputText from '../../inputItem';
import ButtonItem from '../../buttomItem';
import './Singup.scss';

const Singup = ({ store, history }) => {

  // очистка полей
  const resetButton = () => {

    checkLogin('');
    checkPassword('');
    checkRepeatPassword('');
    checkPhone('');
    checkName('');
    checkSurname('');

  };

  // отправка данных для регистрации
  const userRegistration = () => {

    const userData = {

        user: {
          email: store.getState().auth.email,
          password: store.getState().auth.password
        },
        phone: store.getState().auth.phone,
        invited_by: store.getState().auth.invited,
        name: store.getState().auth.name,
        surname: store.getState().auth.surname,
        country_key: store.getState().auth.country,

    };

    const setdata = new DataService();

    setdata.postRegistr('create/', userData)
      .then(res => {

        alert('Регистрация прошла успешно');
        history.push('/login');

      })
      .catch( error => {

        alert('Ошибка регистрации, попробуйте ещё раз');

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

  // проверка правильного ввода пароля
  const checkRepeatPassword = (value) => {

    const valid = new ValidPassword( store, value );

    if (value === store.getState().auth.password && value.length !== 0) {

      valid.validInput(setRepeatPasswordText, setValidRepeatPassword);

    } else {

      valid.unvalidInput(setRepeatPasswordText, setValidRepeatPassword);

    }

  };

  // валидация телефона
  const checkPhone = (value) => {

    validFabrica(ValidPhone,value, setPhoneText, setValidPhone);

  };

  // валидация имени
  const checkName = (value) => {

    validFabrica(ValidName,value, setNameText, setValidName);

  };

  // валидация фамилии
  const checkSurname = (value) => {

    validFabrica(ValidSurame,value, setSurnameText, setValidSurname);

  };


  return (

    <div className="singup">

      <div className="container">

        <h1 className="singup__title">Регистрация</h1>

        <form className="singup__registr">

          <InputText
            title="Email: "
            type="email"
            placeholder='Для логина используйте email в формате: email@exampl.net'
            checkFunc={ checkLogin }
            inputValid={ store.getState().auth.isValidEmail }
            required
          />

          <InputText
            title="Пароль: "
            type="password"
            placeholder='Придумайте пароль от 8 символов (латинские + цифры)'
            checkFunc={ checkPassword }
            inputValid={ store.getState().auth.isValidPassword }
            required
          />

          <InputText
            title="Повторите пароль: "
            type="password"
            placeholder='Повторите пароль'
            checkFunc={ checkRepeatPassword }
            inputValid={ store.getState().auth.isValidRepeatPassword }
            required
          />

          <div className="singup__line"/>

          <InputText
            title="Телефон: "
            type="text"
            placeholder='Введите свой телефон в формате +79ХХХХХХХХХ'
            checkFunc={ checkPhone }
            inputValid={ store.getState().auth.isValidPhone }
            required
          />

          <InputText
            title="Имя: "
            type="text"
            placeholder='Введите своё имя'
            checkFunc={ checkName }
            inputValid={ store.getState().auth.isValidName }
            required
          />

          <InputText
            title="Фамилия: "
            type="text"
            placeholder='Введите свою фамилию'
            checkFunc={ checkSurname }
            inputValid={ store.getState().auth.isValidSurname }
            required
          />

          <InputText
            title="Пригласительный код: "
            type="text"
            value={ store.getState().auth.invited }
            disabled
            required
          />

          <InputText
            title="Код страны: "
            type="text"
            value={ store.getState().auth.country }
            disabled
            required
          />

          <div className="singup__line"/>

          <div className="singup__wrapper">

            <ButtonItem
              type="reset"
              text="Сбросить"
              func={ resetButton }
            />

            <ButtonItem
              text="Зарегистрироваться"
              func={ userRegistration }
              disabledButton={

                !(

                  store.getState().auth.isValidEmail

                  && store.getState().auth.isValidRepeatPassword

                  && store.getState().auth.isValidName

                  && store.getState().auth.isValidSurname

                  && store.getState().auth.isValidInvitedBy

                  && store.getState().auth.isValidCountryKey

                )

              }
            />

          </div>

        </form>

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
    repeatPassword: state.auth.repeatPassword,
    isValidRepeatPassword: state.auth.isValidRepeatPassword,
    phone: state.auth.phone,
    isValidPhone: state.auth.isValidPhone,
    name: state.auth.name,
    isValidName: state.auth.isValidName,
    surname: state.auth.surname,
    isValidSurname: state.auth.isValidSurname,
    invited: state.auth.invited,
    isValidInvitedBy: state.auth.isValidInvitedBy,
    country: state.auth.country,
    isValidCountryKey: state.auth.isValidCountryKey,
    isAuthValue: state.auth.isAuthValue,

  };
};

const mapDispatchToProps = {
  setEmailText,
  setValidEmail,
  setPasswordText,
  setValidPassword,
  setRepeatPasswordText,
  setValidRepeatPassword,
  setPhoneText,
  setValidPhone,
  setNameText,
  setValidName,
  setSurnameText,
  setValidSurname,
  setInvitedByText,
  setValidInvitedBy,
  setCountryKeyText,
  setValidCountryKey,
  setIsAuthValue
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Singup));
