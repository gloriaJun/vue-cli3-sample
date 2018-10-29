import Cookies from 'js-cookie';

const auth = (() => {
  const TOKEN_KEY = 'IotAuthToken';

  return {
    setToken(token) {
      return Cookies.set(TOKEN_KEY, token);
    },

    getToken() {
      return Cookies.get(TOKEN_KEY);
    },

    removeToken() {
      return Cookies.remove(TOKEN_KEY);
    },
  };
})();

export default auth;
