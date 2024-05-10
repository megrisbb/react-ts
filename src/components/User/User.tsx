import React, {FC} from "react";
import {IUser} from "../../interfaces/IUser";

interface IUserProps {
    user: IUser
}

type IUserPropsType = IUserProps & {
    children?: React.ReactNode
} & {
    lift?: (userId: number)
        => void
};


const User: FC<IUserPropsType> = ({user, lift}) => {
    // Функція, яка викликає функцію lift з userId при кліку на кнопку
    const onClickGetPosts = () => {
        if (lift) { // Перевірка, чи передана функція lift
            lift(user.id); // Виклик функції lift з userId користувача
        }
    };
    return (
        <div>
            <h2>{user.id}. {user.firstName} {user.lastName} {user.maidenName} {user.age}</h2>
            <div>
                <button onClick={onClickGetPosts}> Get all posts by user id</button>
            </div>
            <hr/>
        </div>
    );
};

export {User};