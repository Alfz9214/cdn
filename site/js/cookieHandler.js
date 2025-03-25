// utils/cookie.js
import Cookies from 'js-cookie';

export const getCookie = (name) => {
  return Cookies.get(name);
};

export const setCookie = (name, value, expires = 365) => {
  Cookies.set(name, value, { expires });
};

export const removeCookie = (name) => {
  Cookies.remove(name);
};
