import infintyPaginationMergeHandler from 'utils/infintyPaginationMergeHandler';
import api from '../api';

export const ProductApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: ({
        page = 1,
        categorySlug,
        subCategorySlug,
        search,
        topProduct,
        ordering,
        brand,
        pageSize = 6,
      } = {}) => ({
        url: '/products/',
        params: {
          page,
          category_slug: categorySlug,
          sub_category_slug: subCategorySlug,
          search,
          topProduct,
          ordering,
          brand,
          page_size: pageSize,
        },
      }),
      serializeQueryArgs: ({ endpointName, queryArgs }) => (
        `${endpointName}-${queryArgs?.categorySlug || ''}-${queryArgs?.sub_category_slug || ''}-${queryArgs?.search || ''}`
      ),
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page;
      },
      merge: infintyPaginationMergeHandler,
      providesTags: ['Product'],
    }),
    getSpecificProduct: build.query({
      query: (productSlug) => ({
        url: `/products/${productSlug}/`,
      }),
    }),
    getProductSuggestionList: build.query({
      query: (search) => ({
        url: '/products/',
        params: {
          autocomplete: true,
          search,
        },
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSpecificProductQuery,
  useGetProductSuggestionListQuery,
} = ProductApi;
