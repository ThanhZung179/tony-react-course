// constant
export const SET_USER = 'APP/SET_USER';
export const SET_THEME = 'APP/SET_THEME';

// actions
export function setUser(payload) {
  return {
    type: SET_USER,
    payload: {
      firstName: payload.firstName,
      lastName: payload.lastName,
    }
  }
}

export function setTheme(payload) {
  return {
    type: SET_THEME,
    payload
  }
}