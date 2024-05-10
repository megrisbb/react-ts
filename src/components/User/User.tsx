import {FC} from "react";
import {IUser} from "../../interfaces/IUser";

type IUserProps = { user: IUser }

const User: FC<IUserProps> = ({user}) => {
    return (
        <div>
            <h2>{user.id}. {user.firstName} {user.lastName} {user.maidenName} {user.age}</h2>
        </div>
    );
};

export {User};