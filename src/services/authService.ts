import {IAuthData} from "../interfaces/IAuthData";
import {axiosInstance} from "./axiosService";
import {ITokenObtainPair} from "../interfaces/ITokenObtainPair";

// Створюємо сервіс для аутентифікації користувачів
const authService = {
    // Метод для аутентифікації користувачів
    authentication: async (authData: IAuthData): Promise<boolean> => {
        let response;
        try {
            // Виконуємо POST-запит до ендпойнту '/auth' з переданими даними для аутентифікації
            response = await axiosInstance.post<ITokenObtainPair>('/auth', authData);
            // Якщо запит успішний, зберігаємо отримані токени у localStorage під ключем 'tokenPair'
            localStorage.setItem('tokenPair', JSON.stringify(response.data));
        } catch (e) {
            // У разі помилки можемо додати логування або іншу обробку помилок тут
        }

        // Повертаємо true, якщо у відповіді є і access, і refresh токени, і false в іншому випадку
        return !!(response?.data?.access && response?.data?.refresh);
    },
    refresh: async (refreshToken: string) => {
        const response = await axiosInstance.post<ITokenObtainPair>('/auth/refresh', {refresh: refreshToken});
        localStorage.setItem('tokenPair', JSON.stringify(response.data))
    }
}

export {
    authService
}