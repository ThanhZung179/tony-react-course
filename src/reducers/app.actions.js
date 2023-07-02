// constant
export const SET_USER = 'APP/SET_USER';
export const SET_THEME = 'APP/SET_THEME';
export const AUTHENTICATED = 'APP/AUTHENTICATED';

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

export const authenticated = () => ({  type: AUTHENTICATED })
