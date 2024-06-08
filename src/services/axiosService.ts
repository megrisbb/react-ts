import axios from "axios";
import {retriveLocalStorageData} from "./helpers/helpers";
import {ITokenObtainPair} from "../interfaces/ITokenObtainPair";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
    headers: {}
});

axiosInstance.interceptors.request.use(request => {

    if (localStorage.getItem('tokenPair') && (request.url !== '/auth' && request.url !== '/auth/refresh'))
        request.headers.set('Authorization', 'Bearer ' + retriveLocalStorageData<ITokenObtainPair>('tokenPair').access)
        return request
})

export {
    axiosInstance
}