import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

import DomainUrl from "./Domain";
import { store } from "reducers";
import { hideLoader, showLoader } from "reducers/appReducer";

const _axios = axios.create({
    baseURL: `${DomainUrl}/api`,
    headers: {}
})

_axios.interceptors.request.use(
    async (config) => {
        store.dispatch(showLoader())

        /** Adjust request */
        const token = await AsyncStorage.getItem('token')
        const lang = await AsyncStorage.getItem('lang')

        config.headers = {
            ...config.headers,
            'Authorization': token ? `Bearer ${token}` : undefined
        }
        return config
    },
    (err) => {
        store.dispatch(hideLoader())
        return Promise.reject(err?.response?.data)
    }
)

_axios.interceptors.response.use(
    response => {
        store.dispatch(hideLoader())
        return response.data
    },
    err => {
        store.dispatch(hideLoader())

        //backend server error
        if (err?.response?.data)
            return Promise.reject(err?.response?.data);
        //For cancellation
        if (err?.message)
            return Promise.reject(err);
    }
)

export default _axios
