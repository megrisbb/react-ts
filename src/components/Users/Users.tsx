import {FC, useEffect, useState} from "react";

import {IUser} from "../../interfaces/IUser";
import {getUsers} from "../../services/axiosService";
import {User} from "../User/User";



const Users: FC = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getUsers()
            .then(({data:{users}}) => {
                setUsers(users)
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

export {Users};