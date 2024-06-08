import {axiosInstance} from "./axiosService";
import {ICarPaginated} from "../interfaces/ICarPaginated";
import {AxiosError} from "axios";
import {retriveLocalStorageData} from "./helpers/helpers";
import {ITokenObtainPair} from "../interfaces/ITokenObtainPair";
import {authService} from "./authService";

const carService = {
    getCars: async () => {
        try {
            const response = await axiosInstance.get<ICarPaginated>('/cars');
            return  response.data
        } catch (e) {
           const axiosError =  e as AxiosError
            if (axiosError?.response?.status === 401) {
                const refreshToken = retriveLocalStorageData<ITokenObtainPair>('tokenPair').refresh;
                await authService.refresh(refreshToken)
                await carService.getCars()
            }
        }
    }
}

export {
    carService
}