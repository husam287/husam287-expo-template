import api from '../api';

export const CategoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => ({
        url: '/categories/',
      }),
      providesTags: ['Category'],
    }),
    getSpecificCategory: build.query({
      query: (categorySlug) => ({
        url: `/categories/${categorySlug}/`,
      }),
      providesTags: ['Category'],
    }),
    getSubCategories: build.query({
      query: (categorySlug) => ({
        url: '/subcategories/',
        params: {
          category__slug: categorySlug,
        },
      }),
      providesTags: ['SubCategory'],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetSubCategoriesQuery,
  useGetSpecificCategoryQuery,
} = CategoryApi;
