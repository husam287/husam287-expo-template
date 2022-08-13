import axios from "axios";
import DomainUrl from "./Domain";
import AsyncStorage from '@react-native-async-storage/async-storage';
import HandleErrors from "../hooks/handleErrors";
import i18n from "../assets/i18n";
import { store } from "../redux";
import { hideLoader, showLoader } from "../redux/appReducer";

let headers = {}

const _axios = axios.create({
    baseURL: `${DomainUrl}/api`,
    headers
})

_axios.interceptors.request.use(
    async (config) => {
        store.dispatch(showLoader())

        /** Adjust request */
        const token = await AsyncStorage.getItem('token')
        const lang = await AsyncStorage.getItem('lang')

        config.headers = {
            ...config.headers,
            'Authorization': token ? `Bearer ${token}` : undefined,
            'Language': `${lang}`,
            'Accept-Language': `${lang}-GB,${lang};q=0.9,ar-EG;q=0.8,ar;q=0.7,en-US;q=0.6`,
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
