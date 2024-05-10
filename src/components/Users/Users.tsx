import {FC, useEffect, useState} from "react";

import {IUser} from "../../interfaces/IUser";
import {getUsers} from "../../services/axiosService";
import {User} from "../User/User";

type IPropsType = {lift: (userId:number) => void}

const Users: FC<IPropsType> = ({lift}) => {

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
                users.map((user) => <User key={user.id} user={user} lift={lift}/>)
            }
        </div>
    );
};

export {Users};