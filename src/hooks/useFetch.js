import { makeUseAxios } from 'axios-hooks';
import _axios from 'apis/AxiosConfig';

const useFetch = makeUseAxios({
  axios: _axios,
  defaultOptions: {
    useCache: false,
  },
});

export default useFetch;
