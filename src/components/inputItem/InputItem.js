import React from 'react';

import './InputItem.scss';

const InputItem = ({

  title = '',
  type = 'text',
  value = '',
  placeholder = '',
  checkFunc,
  required,
  inputValid,
  disabled,

}) => (

  <label className="inputItem">

    <div className="inputItem__title">

      { title }

      { required && <span className="inputItem__required">*</span> }

    </div>


    <input
      className={ `inputItem__input ${!inputValid && !disabled? 'inputItem__input_error' : ''}` }
      onChange={ (e) => checkFunc(e.target.value) }
      type={ type }
      placeholder={ placeholder }
      defaultValue={ value }
      required={ required }
      disabled={ disabled }
    />

  </label>

);

export default InputItem;
