export default class AuthEndpoint {
  /**
   *
   * @param {Object} data
   * @param {string} data.phone
   * @param {string} data.password
   *
   * @returns
   */
  static login(data) {
    return {
      url: '/products/',
      method: 'get',
      data,
    };
  }

  static facebookLogin() {
    return { url: '/users/facebook/', method: 'post' };
  }

  static appleLogin() {
    return { url: '/users/apple', method: 'post' };
  }
}
