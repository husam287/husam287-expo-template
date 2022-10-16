import { makeUseAxios } from "axios-hooks";
import _axios from "apis/AxiosConfig";

export const useFetch = makeUseAxios({
    axios: _axios,
    defaultOptions: {
        useCache: false
    }
})