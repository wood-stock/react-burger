import { setCookie, deleteCookie, getCookie } from '../utils';
import { checkResponse } from '../api';
//регистрация
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';
//авторизация
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
//выход
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';
//обновление токена
export const REFRESH_REQUEST = 'REFRESH_REQUEST';
export const REFRESH_SUCCESS = 'REFRESH_SUCCESS';
export const REFRESH_ERROR = 'REFRESH_ERROR';
//запрос на восстановление пароля
export const FORGOT_REQUEST = 'FORGOT_REQUEST';
export const FORGOT_SUCCESS = 'FORGOT_SUCCESS';
export const FORGOT_ERROR = 'FORGOT_ERROR';
//сброс пароля
export const RESET_REQUEST = 'RESET_REQUEST';
export const RESET_SUCCESS = 'RESET_SUCCESS';
export const RESET_ERROR = 'RESET_ERROR';
//получение данных пользователя
export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_ERROR = 'USER_ERROR';
//изменение данных пользователя
export const EDIT_REQUEST = 'EDIT_REQUEST';
export const EDIT_SUCCESS = 'EDIT_SUCCESS';
export const EDIT_ERROR = 'EDIT_ERROR';
export const registration = (email, password, name) => (dispatch) => {
  dispatch({
    type: REGISTER_REQUEST,
  });
  fetch('https://norma.nomoreparties.space/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    body: JSON.stringify({ email, password, name }),
  })
    .then((response) => checkResponse(response))
    .then((response) => {
      const accessToken = response.accessToken.split('Bearer ')[1];
      const refreshToken = response.refreshToken;
      setCookie('token', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.user,
      });
    })
    .catch((response) => {
      console.log(response);
      dispatch({
        type: REGISTER_ERROR,
      });
    });
};

export const login = (email, password) => (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  });
  fetch('https://norma.nomoreparties.space/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    body: JSON.stringify({ email, password }),
  })
    .then((response) => checkResponse(response))
    .then((response) => {
      const accessToken = response.accessToken.split('Bearer ')[1];
      const refreshToken = response.refreshToken;
      setCookie('token', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.user,
      });
    })
    .catch((response) => {
      console.log(response);
      dispatch({
        type: LOGIN_ERROR,
      });
    });
};
export const logout = (history) => (dispatch) => {
  dispatch({
    type: LOGOUT_REQUEST,
  });
  fetch('https://norma.nomoreparties.space/api/auth/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    body: JSON.stringify({ token: localStorage.getItem('refreshToken') }),
  })
    .then((response) => checkResponse(response))
    .then(() => {
      deleteCookie('token');
      localStorage.removeItem('refreshToken');
      dispatch({
        type: LOGOUT_SUCCESS,
      });
      history.replace('/');
    })
    .catch(() => {
      dispatch({
        type: LOGOUT_ERROR,
      });
    });
};
export const refresh = () => (dispatch) => {
  dispatch({
    type: REFRESH_REQUEST,
  });
  fetch('https://norma.nomoreparties.space/api/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    body: JSON.stringify({ token: localStorage.getItem('refreshToken') }),
  })
    .then((response) => checkResponse(response))
    .then((response) => {
      const accessToken = response.accessToken.split('Bearer ')[1];
      const refreshToken = response.refreshToken;
      setCookie('token', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      dispatch({
        type: REFRESH_SUCCESS,
      });
    })
    .catch(() => {
      deleteCookie('token');
      localStorage.removeItem('refreshToken');
      dispatch({
        type: REFRESH_ERROR,
      });
    });
};
export const forgot = (email, history) => (dispatch) => {
  dispatch({
    type: FORGOT_REQUEST,
  });
  fetch('https://norma.nomoreparties.space/api/password-reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    body: JSON.stringify({ email }),
  })
    .then((response) => checkResponse(response))
    .then(() => {
      dispatch({
        type: FORGOT_SUCCESS,
      });
      history.replace('/reset-password');
    })
    .catch(() => {
      dispatch({
        type: FORGOT_ERROR,
      });
    });
};
export const reset = (password, token, history) => (dispatch) => {
  dispatch({
    type: RESET_REQUEST,
  });
  fetch('https://norma.nomoreparties.space/api/password-reset/reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    body: JSON.stringify({ password, token }),
  })
    .then((response) => checkResponse(response))
    .then(() => {
      dispatch({
        type: RESET_SUCCESS,
      });
      history.replace('/login');
    })
    .catch(() => {
      dispatch({
        type: RESET_ERROR,
      });
    });
};
export const user = () => (dispatch) => {
  dispatch({
    type: USER_REQUEST,
  });
  fetch('https://norma.nomoreparties.space/api/auth/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + getCookie('token'),
    },
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
  })
    .then((response) => checkResponse(response))
    .then((response) => {
      dispatch({
        type: USER_SUCCESS,
        payload: response.user,
      });
    })
    .catch(() => {
      dispatch({
        type: USER_ERROR,
      });
      deleteCookie('token');
      localStorage.removeItem('refreshToken');
    });
};

export const edit = (email, password, name) => (dispatch) => {
  dispatch({
    type: EDIT_REQUEST,
  });
  fetch('https://norma.nomoreparties.space/api/auth/user', {
    method: 'PATCH',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + getCookie('token'),
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({ email, password, name }),
  })
    .then((response) => checkResponse(response))
    .then((response) => {
      dispatch({
        type: EDIT_SUCCESS,
        payload: response.user,
      });
    })
    .catch(() => {
      dispatch({
        type: EDIT_ERROR,
      });
      refresh();
    });
};
