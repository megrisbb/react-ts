import axios, {AxiosResponse} from "axios";
import {IPostResponse} from "../interfaces/IPostResponse";
import {IFormProps} from "../interfaces/IFormProps";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
});
 const createPost = async (data: IFormProps): Promise<IPostResponse> => {
    const response: AxiosResponse<IPostResponse> = await axiosInstance.post('/posts', data);
    return response.data;
}

export {
    axiosInstance,
    createPost
}