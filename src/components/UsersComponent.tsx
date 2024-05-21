import {FC, useEffect, useState} from "react";

import {IUserProps} from "../interfaces/IUserProps";
import {userApiService} from "../services/axiosService";

import {User} from "./User/User";

const UsersComponent:FC = () => {

    const [users, setUsers] = useState<IUserProps[]>([])

    useEffect(() => {
        userApiService.getAllUsers()
            .then(({data}) => {
                setUsers(data)
            })
    }, []);

    return (
        <div>
            {
                users.map((user) => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {UsersComponent};