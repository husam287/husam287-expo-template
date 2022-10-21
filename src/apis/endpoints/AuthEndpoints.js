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
}
