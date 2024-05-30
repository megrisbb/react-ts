import axios, { AxiosResponse } from "axios";
import { IPostsInterface } from "../interfaces/IPostsInterface";
import { IUsersInterface } from "../interfaces/IUsersInterface";
import { ICommentsInterface } from "../interfaces/ICommentsInterface";

const axiosApiService = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        'Content-Type': 'application/json'
    }
});

const postsApiService = {
    getAllPosts: (): Promise<AxiosResponse<IPostsInterface[]>> => {
        return axiosApiService.get('/posts');
    },
    getPostsOfUser: (userId: number): Promise<AxiosResponse<IPostsInterface[]>> => {
        return axiosApiService.get(`/users/${userId}/posts`);
    }
};

const usersApiService = {
    getAllUsers: (): Promise<AxiosResponse<IUsersInterface[]>> => {
        return axiosApiService.get('/users');
    },
    getUserByUserId: (userId: number): Promise<AxiosResponse<IUsersInterface>> => {
        return axiosApiService.get(`/users/${userId}`);
    }
};

const commentsApiService = {
    getAllComments: (): Promise<AxiosResponse<ICommentsInterface[]>> => {
        return axiosApiService.get('/comments');
    },
    getCommentsOfPosts: (postId: string): Promise<AxiosResponse<ICommentsInterface[]>> => {
        return axiosApiService.get(`/posts/${postId}/comments`);
    }
};

export {
    axiosApiService,
    postsApiService,
    usersApiService,
    commentsApiService
};
