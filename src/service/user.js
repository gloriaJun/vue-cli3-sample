import request from '@/utils/request';

const service = (() => {
  const baseURI = '/user';

  return {
    login(username, password) {
      return request({
        url: '/login',
        method: 'post',
        data: {
          username,
          password,
        },
      });
    },

    logout() {
      return request({
        url: `${baseURI}`,
      });
    },
  };
})();

export default service;
