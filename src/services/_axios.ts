import axios from 'axios'
import * as Token from './Token'

const _axios = axios.create({
    baseURL: import.meta.env.VITE_API_URL as string,
    headers: {
        "Content-Type": "application/json",
    },
});


_axios.interceptors.request.use(
    (config) => {
        const token = Token.getAuthToken();
        if (token && config) {
            // @ts-ignore
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

function customLogout() {
    Token.deleteAuthToken()
    window.location.href = '/login'
}


_axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    const { status, statusText } = error?.response || {}
    if (status === 401 && statusText === "Unauthorized") {
        // @ts-ignore
        const { logout = customLogout } = window
        try {
            logout()
        } catch (error) {
            customLogout()
        }
    }
    return Promise.reject(error?.response || error);
});


export default _axios