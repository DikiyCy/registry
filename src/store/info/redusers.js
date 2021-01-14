import {

  INFO_SET_VALUE_NAME,
  INFO_SET_VALUE_SURNAME,
  INFO_SET_VALUE_PHONE,
  INFO_SET_VALUE_EMAIL,
  INFO_SET_VALUE_USERNAME,
  INFO_SET_VALUE_AVATAR,

} from './actions';

const defaultState = {

  name: '',
  surname: '',
  phone: '',
  email: '',
  username: '',
  avatar: '',

};

export const infoReduser = ( state = defaultState, action ) => {

  switch( action.type ){

    case INFO_SET_VALUE_NAME:
        return { ...state, name: action.payload }

    case INFO_SET_VALUE_SURNAME:
        return { ...state, surname: action.payload }

    case INFO_SET_VALUE_PHONE:
        return { ...state, phone: action.payload }

    case INFO_SET_VALUE_EMAIL:
        return { ...state, email: action.payload }

    case INFO_SET_VALUE_USERNAME:
        return { ...state, username: action.payload }

    case INFO_SET_VALUE_AVATAR:
        return { ...state, avatar: action.payload }

    default: return state;      

  }
};
