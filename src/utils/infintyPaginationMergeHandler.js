/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { parse } from 'search-params';

const infintyPaginationMergeHandler = (currentCache, newItems) => {
  if (!newItems?.previous) {
    const query = parse(newItems?.next);
    return {
      ...newItems,
      nextPageNumber: query?.page,
    };
  }
  if (!currentCache?.finish) {
    if (newItems?.next) {
      const query = parse(newItems?.next);
      currentCache.nextPageNumber = query?.page;
    }
    currentCache.next = newItems?.next;
    currentCache.results.push(...newItems.results);
  }
};

export default infintyPaginationMergeHandler;
