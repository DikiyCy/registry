// email
export const AUTH_CHANGE_EMAIL_TEXT = 'AUTH_CHANGE_EMAIL_TEXT';
export const AUTH_CHANGE_VALID_EMAIL_TEXT = 'AUTH_CHANGE_VALID_EMAIL_TEXT';

// password
export const AUTH_CHANGE_PASSWORD_TEXT = 'AUTH_CHANGE_PASSWORD_TEXT';
export const AUTH_CHANGE_VALID_PASSWORD_TEXT = 'AUTH_CHANGE_VALID_PASSWORD_TEXT';

// repeat password
export const AUTH_CHANGE_REPEAT_PASSWORD_TEXT = 'AUTH_CHANGE_REPEAT_PASSWORD_TEXT';
export const AUTH_CHANGE_VALID_REPEAT_PASSWORD_TEXT = 'AUTH_CHANGE_VALID_REPEAT_PASSWORD_TEXT';

// phone
export const AUTH_CHANGE_PHONE_TEXT = 'AUTH_CHANGE_PHONE_TEXT';
export const AUTH_CHANGE_VALID_PHONE_TEXT = 'AUTH_CHANGE_VALID_PHONE_TEXT';

// name
export const AUTH_CHANGE_NAME_TEXT = 'AUTH_CHANGE_NAME_TEXT';
export const AUTH_CHANGE_VALID_NAME_TEXT = 'AUTH_CHANGE_VALID_NAME_TEXT';

// surname
export const AUTH_CHANGE_SURNAME_TEXT = 'AUTH_CHANGE_SURNAME_TEXT';
export const AUTH_CHANGE_VALID_SURNAME_TEXT = 'AUTH_CHANGE_VALID_SURNAME_TEXT';

// invited
export const AUTH_CHANGE_INVITED_BY_TEXT = 'AUTH_CHANGE_INVITED_BY_TEXT';
export const AUTH_CHANGE_VALID_INVITED_BY_TEXT = 'AUTH_CHANGE_VALID_INVITED_BY_TEXT';

// country
export const AUTH_CHANGE_COUNTRY_KEY_TEXT = 'AUTH_CHANGE_COUNTRY_KEY_TEXT';
export const AUTH_CHANGE_VALID_COUNTRY_KEY_TEXT = 'AUTH_CHANGE_VALID_COUNTRY_KEY_TEXT';

// valid
export const AUTH_SET_IS_AUTH_VALUE = 'AUTH_SET_IS_AUTH_VALUE';

// client id
export const AUTH_CHANGE_CLIEIN_ID_TEXT = 'AUTH_CHANGE_CLIEIN_ID_TEXT';

// access token
export const AUTH_CHANGE_ACCESS_TOKEN_TEXT = 'AUTH_CHANGE_ACCESS_TOKEN_TEXT';

// refresh token
export const AUTH_CHANGE_REFRESH_TOKEN_TEXT = 'AUTH_CHANGE_REFRESH_TOKEN_TEXT';

// email
export const setEmailText = (email) => ({
    type: AUTH_CHANGE_EMAIL_TEXT,
    payload: email
});

export const setValidEmail = (bool) => ({
    type: AUTH_CHANGE_VALID_EMAIL_TEXT,
    payload: bool
});

// password
export const setPasswordText = (password) => ({
    type: AUTH_CHANGE_PASSWORD_TEXT,
    payload: password
});

export const setValidPassword = (bool) => ({
    type: AUTH_CHANGE_VALID_PASSWORD_TEXT,
    payload: bool
});

// repeat password
export const setRepeatPasswordText = (repeatPassword) => ({
    type: AUTH_CHANGE_REPEAT_PASSWORD_TEXT,
    payload: repeatPassword
});

export const setValidRepeatPassword = (bool) => ({
    type: AUTH_CHANGE_VALID_REPEAT_PASSWORD_TEXT,
    payload: bool
});

// phone
export const setPhoneText = (phone) => ({
  type: AUTH_CHANGE_PHONE_TEXT,
  payload: phone
});

export const setValidPhone = (bool) => ({
  type: AUTH_CHANGE_VALID_PHONE_TEXT,
  payload: bool
});

// name
export const setNameText = (name) => ({
  type: AUTH_CHANGE_NAME_TEXT,
  payload: name
});

export const setValidName = (bool) => ({
  type: AUTH_CHANGE_VALID_NAME_TEXT,
  payload: bool
});

// surname
export const setSurnameText = (surname) => ({
  type: AUTH_CHANGE_SURNAME_TEXT,
  payload: surname
});

export const setValidSurname = (bool) => ({
  type: AUTH_CHANGE_VALID_SURNAME_TEXT,
  payload: bool
});

// invited
export const setInvitedByText = (invited) => ({
  type: AUTH_CHANGE_INVITED_BY_TEXT,
  payload: invited
});

export const setValidInvitedBy = (bool) => ({
  type: AUTH_CHANGE_VALID_INVITED_BY_TEXT,
  payload: bool
});

// country
export const setCountryKeyText = (country) => ({
  type: AUTH_CHANGE_COUNTRY_KEY_TEXT,
  payload: country
});

export const setValidCountryKey = (bool) => ({
  type: AUTH_CHANGE_VALID_COUNTRY_KEY_TEXT,
  payload: bool
});

// client id
export const setClientIdText = (clientId) => ({
  type: AUTH_CHANGE_CLIEIN_ID_TEXT,
  payload: clientId
});

// access token
export const setAccessTokenText = (token) => ({
  type: AUTH_CHANGE_ACCESS_TOKEN_TEXT,
  payload: token
});

// refresh token
export const setRefreshTokenText = (token) => ({
  type: AUTH_CHANGE_REFRESH_TOKEN_TEXT,
  payload: token
});

// Значение которое будет отвечать за то авторизирован пользователь или нет
export const setIsAuthValue = (bool) => ({
    type: AUTH_SET_IS_AUTH_VALUE,
    payload: bool
});
