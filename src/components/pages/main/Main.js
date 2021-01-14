import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {

  setClientIdText,
  setIsAuthValue,
  setRefreshTokenText,
  setAccessTokenText,
  setValidEmail,
  setValidPassword,

} from '../../../store/auth/actions';
import {

  setValueName,
  setValueSurname,
  setValuePhone,
  setValueEmail,
  setValueUsername,
  setValueAvatar,

} from '../../../store/info/actions';
import DataService from '../../../service/serverService';
import TableRow from '../../tableRow';
import ButtonItem from '../../buttomItem';
import './Main.scss';

const Main = ({ store, history }) => {

  useEffect(() => {

    const setdata = new DataService();

    setdata.postHeader(store.getState().auth.isAuthValue, store.getState().auth.accessToken);

    setdata.getUserData(`${store.getState().auth.clientId}/`)

      .then((response) => {

        const { name, surname, phone, email, username, avatar } = response.data;

        store.dispatch(setValueName(name));
        localStorage.setItem('infoName', store.getState().info.name);
        store.dispatch(setValueSurname(surname));
        localStorage.setItem('infoSurname', store.getState().info.surname);
        store.dispatch(setValuePhone(phone));
        localStorage.setItem('infoPhone', store.getState().info.phone);
        store.dispatch(setValueEmail(email));
        localStorage.setItem('infoEmail', store.getState().info.email);
        store.dispatch(setValueUsername(username));
        localStorage.setItem('infoUsername', store.getState().info.username);
        store.dispatch(setValueAvatar(avatar));
        localStorage.setItem('infoAvatar', store.getState().info.avatar);

      })
      .catch(error => {
          if (error.response.status === 401) {
            setdata.postRefresh('refresh/', store.getState().auth.refreshToken)
              .then(res => {

                store.dispatch(setAccessTokenText(res.data.access));

                localStorage.setItem('accessToken', store.getState().auth.accessToken);

              })
              .catch(error => {

                localStorage.removeItem('clientId');
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');

                store.dispatch(setClientIdText(''));
                store.dispatch(setAccessTokenText(''));
                store.dispatch(setRefreshTokenText(''));

                store.dispatch(setValidEmail(false));
                store.dispatch(setValidPassword(false));
                store.dispatch(setIsAuthValue(false));
                history.push('/login');
                return

              })

          }

        })

  }, []);

  const exitButton = () => {

    localStorage.removeItem('infoName');
    localStorage.removeItem('infoSurname');
    localStorage.removeItem('infoPhone');
    localStorage.removeItem('infoEmail');
    localStorage.removeItem('infoUsername');
    localStorage.removeItem('infoAvatar');
    localStorage.removeItem('setIsAuthValue');

    store.dispatch(setValidEmail(false));
    store.dispatch(setValidPassword(false));
    store.dispatch(setIsAuthValue(false));
    history.push('/start');

  };

  return (

    <div className="main">

      <div className="container" >

        <h1 className="main__title" >Информация о пользователе</h1>

        <div
          className="main__img"
          style={{backgroundImage: `url(${localStorage.getItem('infoAvatar') || store.getState().info.avatar})`}}
        />

        <table className="main__info" cellSpacing="0">

          <tbody>

            <TableRow
              leftCol="Имя: "
              rightCol={ localStorage.getItem('infoName') }
            />

            <TableRow
              leftCol="Фамилия: "
              rightCol={ localStorage.getItem('infoSurname') }
            />

            <TableRow
              leftCol="Телефон: "
              rightCol={ localStorage.getItem('infoPhone') }
            />

            <TableRow
              leftCol="Email: "
              rightCol={ localStorage.getItem('infoEmail') }
            />

            <TableRow
              leftCol="Username: "
              rightCol={ localStorage.getItem('infoUsername') }
            />

          </tbody>

        </table>

        <ButtonItem
          text="Выйти из системы"
          func={ exitButton }
        />

      </div>

    </div>

  )
};

const mapStateToProps = state => {
  return {

    clientId: state.auth.clientId,
    isAuthValue: state.auth.isAuthValue,
    accessToken: state.auth.accessToken,
    name: state.info.name,
    surname: state.info.surname,
    phone: state.info.phone,
    email: state.info.email,
    username: state.info.username,
    avatar: state.info.avatar,

  };
};

const mapDispatchToProps = {
  setIsAuthValue,
  setClientIdText,
  setAccessTokenText,
  setRefreshTokenText,
  setValidEmail,
  setValidPassword,
  setValueName,
  setValueSurname,
  setValuePhone,
  setValueEmail,
  setValueUsername,
  setValueAvatar,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main));
