import React from 'react';
import LinkItem from '../../linkItem';
import './Start.scss';

const Start = () => (

  <div className="start">

    <div className="container">

      <h1 className="start__title">Войдите или зарегистрируйтесь</h1>

      <div className="start__links">

        <LinkItem
          text="Зарегистрироваться"
          to="/signup"
        />

        <LinkItem
          text="Войти"
          to="/login"
        />

      </div>

    </div>

  </div>

);

export default Start;
