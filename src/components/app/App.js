import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Start from '../pages/start';
import Main from '../pages/main';
import Login from '../pages/login';
import Singup from '../pages/singup';

import './App.css';

const App = ({ store }) => (

  <div className="App">

    <BrowserRouter>

      <Switch>

        <Route exact path="/"

          render={ (history) => (

            ('auth' in store.getState() && localStorage.getItem('setIsAuthValue'))

            ? <Main store={ store } history={ history }/>

            : <Redirect to="/start" />
          )

          }

        />

        <Route exact path="/login"

          render={ (history) => (

            !('auth' in store.getState() && localStorage.getItem('setIsAuthValue'))

            ?  <Login store={ store } history={ history }/>

            : <Redirect to="/" />
          )

          }

        />

        <Route exact path="/signup"

          render={ (history) => (

                !('auth' in store.getState() && localStorage.getItem('setIsAuthValue'))

                ? <Singup store={ store } history={ history }/>

                : <Redirect to="/" />
              )

          }

        />

        <Route exact path="/start" component={ ()=> <Start /> } />

      </Switch>

    </BrowserRouter>

  </div>

);

export default App;
