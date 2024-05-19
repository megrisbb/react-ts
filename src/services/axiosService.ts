import axios, {AxiosResponse} from "axios";

import {IPostProps} from "../interfaces/IPostProps";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})

const sendPost = (data: IPostProps): Promise<AxiosResponse<IPostProps>> => {
    return axiosInstance.post('/posts', data);
};

export {
    axiosInstance,
    sendPost
}