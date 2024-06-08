import {useForm} from "react-hook-form";
import {IAuthData} from "../../interfaces/IAuthData";
import {useState} from "react";
import {authService} from "../../services/authService";


const FormComponent = () => {

    const {
        handleSubmit,
        register
    } = useForm<IAuthData>({
            defaultValues: {
                username: 'megrisbb',
                password: 'Sma123@123'
            }
        }
    );
    const [isAuth, setIsAuth] = useState<boolean>(false)

    const authenticate = async (formData: IAuthData) => {
       const isAuth = await authService.authentication(formData)
        setIsAuth(isAuth)
    };
    return (
        <div>
            <h3>login form</h3>
            <div>
                {
                    isAuth ? <span>ok</span> : <span>not ok</span>
                }
            </div>
            <form onSubmit={handleSubmit(authenticate)}>
                <input type="text" {...register('username')}/>
                <input type="text"{...register('password')}/>
                <button>login</button>
            </form>
        </div>
    );
};

export {FormComponent};