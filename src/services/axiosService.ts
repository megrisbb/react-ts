import axios, {AxiosResponse} from "axios";

import {IUsersResponce} from "../interfaces/IUsersResponce";

let axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {
        'Content-Type': 'application/json'
    }
});


const getUsers = (): Promise<AxiosResponse<IUsersResponce>> => {
    return axiosInstance.get('/users/')
}

export {
    getUsers
}

