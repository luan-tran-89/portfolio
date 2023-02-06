import cookie from 'react-cookies';
import jwt from 'jwt-decode';

export default class Utils {

  static getSubDomain = () => {
    let parts = document.domain.split('.');
    let domain = document.domain;
    if (parts.length > 2 && isNaN(parts[0])) {
      parts.splice(0, parts.length - 2);
      domain = "." + parts.join(".");
    }
    return domain
  }

  static removeCookie = (key) => {
    cookie.remove(key);
  }

  static saveCookie = (key, value, options) => {
    options = options || {};
    if (value === null) {
      value = '';
      options.expires = -1;
    }
    let expires = '';
    if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
      let date;
      if (typeof options.expires == 'number') {
        date = new Date();
        date.setTime(date.getTime() + options.expires);
      } else {
        date = options.expires;
      }
      expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
    }
    let path = options.path ? '; path=' + (options.path) : '';
    let domain = options.domain ? '; domain=' + (options.domain) : '';
    document.cookie = [key, '=', encodeURIComponent(value), expires, path, domain].join('');
  }

  static getIdToken = () => {
    return cookie.load('idToken');
  }

  static getUserInfo = (token) => {
    const idToken = token ? token : this.getIdToken();
    if (idToken) {
      const { aud, email, sub } = jwt(idToken);
      return {
        email: email,
        userId: sub,
        clientId: aud,
        idToken: idToken
      }
    }
    return {};
  }

}