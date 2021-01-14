// name
export const INFO_SET_VALUE_NAME = 'INFO_SET_VALUE_NAME';

// surname
export const INFO_SET_VALUE_SURNAME = 'INFO_SET_VALUE_SURNAME';

// phone
export const INFO_SET_VALUE_PHONE = 'INFO_SET_VALUE_PHONE';

// email
export const INFO_SET_VALUE_EMAIL = 'INFO_SET_VALUE_EMAIL';

// username
export const INFO_SET_VALUE_USERNAME = 'INFO_SET_VALUE_USERNAME';

// avatar
export const INFO_SET_VALUE_AVATAR = 'INFO_SET_VALUE_AVATAR';

// name
export const setValueName = (name) => ({
  type: INFO_SET_VALUE_NAME,
  payload: name
});

// surname
export const setValueSurname = (surname) => ({
  type: INFO_SET_VALUE_SURNAME,
  payload: surname
});

// phone
export const setValuePhone = (phone) => ({
  type: INFO_SET_VALUE_PHONE,
  payload: phone
});

// email
export const setValueEmail = (email) => ({
  type: INFO_SET_VALUE_EMAIL,
  payload: email
});

// username
export const setValueUsername = (username) => ({
  type: INFO_SET_VALUE_USERNAME,
  payload: username
});

// avatar
export const setValueAvatar = (avatar) => ({
  type: INFO_SET_VALUE_AVATAR,
  payload: avatar
});
