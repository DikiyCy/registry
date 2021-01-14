import {

  AUTH_CHANGE_EMAIL_TEXT,
  AUTH_CHANGE_VALID_EMAIL_TEXT,
  AUTH_CHANGE_PASSWORD_TEXT,
  AUTH_CHANGE_VALID_PASSWORD_TEXT,
  AUTH_CHANGE_REPEAT_PASSWORD_TEXT,
  AUTH_CHANGE_VALID_REPEAT_PASSWORD_TEXT,
  AUTH_CHANGE_PHONE_TEXT,
  AUTH_CHANGE_VALID_PHONE_TEXT,
  AUTH_CHANGE_NAME_TEXT,
  AUTH_CHANGE_VALID_NAME_TEXT,
  AUTH_CHANGE_SURNAME_TEXT,
  AUTH_CHANGE_VALID_SURNAME_TEXT,
  AUTH_CHANGE_INVITED_BY_TEXT,
  AUTH_CHANGE_VALID_INVITED_BY_TEXT,
  AUTH_CHANGE_COUNTRY_KEY_TEXT,
  AUTH_CHANGE_VALID_COUNTRY_KEY_TEXT,
  AUTH_SET_IS_AUTH_VALUE,
  AUTH_CHANGE_CLIEIN_ID_TEXT,
  AUTH_CHANGE_ACCESS_TOKEN_TEXT,
  AUTH_CHANGE_REFRESH_TOKEN_TEXT

} from './actions';

const defaultState = {
  email: '',
  isValidEmail: false,
  password: '',
  isValidPassword: false,
  repeatPassword: '',
  isValidRepeatPassword: false,
  phone: '',
  isValidPhone: false,
  name: '',
  isValidName: false,
  surname: '',
  isValidSurname: false,
  invited: 'RU-637164',
  isValidInvitedBy: true,
  country: 'RU',
  isValidCountryKey: true,
  isAuthValue: localStorage.getItem('setIsAuthValue'),
  clientId: '',
  accessToken: '',
  refreshToken: '',
}

export const authReduser = ( state = defaultState, action ) => {

  switch( action.type ){

      case AUTH_CHANGE_EMAIL_TEXT:
          return { ...state, email: action.payload }

      case AUTH_CHANGE_VALID_EMAIL_TEXT:
          return { ...state, isValidEmail: action.payload }

      case AUTH_CHANGE_PASSWORD_TEXT:
          return { ...state, password: action.payload }

      case AUTH_CHANGE_VALID_PASSWORD_TEXT:
          return { ...state, isValidPassword: action.payload }

      case AUTH_CHANGE_REPEAT_PASSWORD_TEXT:
          return { ...state, repeatPassword: action.payload }

      case AUTH_CHANGE_VALID_REPEAT_PASSWORD_TEXT:
          return { ...state, isValidRepeatPassword: action.payload }

      case AUTH_CHANGE_PHONE_TEXT:
          return { ...state, phone: action.payload }

      case AUTH_CHANGE_VALID_PHONE_TEXT:
          return { ...state, isValidPhone: action.payload }

      case AUTH_CHANGE_NAME_TEXT:
          return { ...state, name: action.payload }

      case AUTH_CHANGE_VALID_NAME_TEXT:
          return { ...state, isValidName: action.payload }

      case AUTH_CHANGE_SURNAME_TEXT:
          return { ...state, surname: action.payload }

      case AUTH_CHANGE_VALID_SURNAME_TEXT:
          return { ...state, isValidSurname: action.payload }

      case AUTH_CHANGE_INVITED_BY_TEXT:
          return { ...state, invited: action.payload }

      case AUTH_CHANGE_VALID_INVITED_BY_TEXT:
          return { ...state, isValidInvitedBy: action.payload }

      case AUTH_CHANGE_COUNTRY_KEY_TEXT:
          return { ...state, country: action.payload }

      case AUTH_CHANGE_VALID_COUNTRY_KEY_TEXT:
          return { ...state, isValidCountryKey: action.payload }

      case AUTH_SET_IS_AUTH_VALUE:
          return { ...state, isAuthValue: action.payload }

      case AUTH_CHANGE_CLIEIN_ID_TEXT:
          return { ...state, clientId: action.payload }

      case AUTH_CHANGE_ACCESS_TOKEN_TEXT:
          return { ...state, accessToken: action.payload }

      case AUTH_CHANGE_REFRESH_TOKEN_TEXT:
          return { ...state, refreshToken: action.payload }

      default: return state;      
  }
}
