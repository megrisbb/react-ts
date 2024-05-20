import {FC} from "react";
import {IUserProps} from "../../interfaces/IUserProps";

interface IProps {
    user: IUserProps
}

const User:FC<IProps> = ({user}) => {

    return (
        <div>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.username}</div>
        </div>
    );
};

export {User};