import axios, {AxiosResponse} from "axios";

import {IUserProps} from "../interfaces/IUserProps";
import {IPostProps} from "../interfaces/IPostProps";
import {ICommentProps} from "../interfaces/ICommentProps";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});

const userApiService = {
    getAllUsers:():Promise<AxiosResponse<IUserProps[]>> => {
        return axiosInstance.get("/users")
    },
    getUserById: async (userId:number):Promise<AxiosResponse<IUserProps>> => {
           return await axiosInstance.get(`/users/${userId}`);
    }
}

const postApiService = {
    getAllPosts:():Promise<AxiosResponse<IPostProps[]>> => {
        return axiosInstance.get("/posts")
    },
}

const commentApiService = {
    getAllComments:():Promise<AxiosResponse<ICommentProps[]>> => {
        return axiosInstance.get("/comments")
    },
}
export {
    userApiService,
    postApiService,
    commentApiService,
}
