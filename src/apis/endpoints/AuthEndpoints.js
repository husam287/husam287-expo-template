export class AuthEndpoints {
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
      url: "/login/",
      method: "post",
      data: data,
    }
  }
}
