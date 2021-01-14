import React from 'react';

import './ButtomItem.scss';

const ButtomItem = ({ type = '', text, func, disabledButton }) => (

  <button
    className={ `button ${disabledButton ? 'button__disabled' : ''} ${text === 'Выйти из системы' ? 'button__exit' : ''}` }
    onClick={ () => func() }
    disabled={ disabledButton }
    type={ type }
  >

    { text }

  </button>

);

export default ButtomItem;
