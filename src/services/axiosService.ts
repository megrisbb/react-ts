import axios, {AxiosResponse} from "axios";

import {IUsersResponce} from "../interfaces/IUsersResponce";
import {IPostsResponce} from "../interfaces/IPostsResponce";

let axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {
        'Content-Type': 'application/json'
    }
});


const getUsers = (): Promise<AxiosResponse<IUsersResponce>> => {
    return axiosInstance.get('/users')
}

const getUsersPost = (id: number): Promise<AxiosResponse<IPostsResponce>> => {
    return axiosInstance.get('/users/' + id + '/posts')
}

export {
    getUsers, getUsersPost
}

