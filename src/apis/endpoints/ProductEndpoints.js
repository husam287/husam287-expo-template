export default class ProductEndpoints {
  /**
   * @param {Object} data
   * @param {string} data.brand brand slugs separated by commas
   * @param {string} data.color
   * @param {Boolean} data.top_rated
   * @param {Boolean} data.most_popular
   * @param {string} data.category_slug sub_category slugs separated by commas
   * @param {string} data.sub_category_slug brand slugs separated by commas
   * @param {string} data.search
   * @param {number} data.page
   * @param {string} data.ordering
   *
   * @returns {Promise<{count:Number, results:any[]}>}
   */
  static getProducts(data) {
    return {
      url: '/products/',
      method: 'get',
      data,
    };
  }

  static getCategories() {
    return {
      url: '/categories/',
      method: 'get',
    };
  }
}
