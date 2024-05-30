import {FC, useEffect, useState} from "react";
import {IUsersInterface} from "../../interfaces/IUsersInterface";
import {usersApiService} from "../../services/axiosService";
import {User} from "../User/User";

const Users:FC = () => {

    const [users, setUsers] = useState<IUsersInterface[]>([])

    useEffect(() => {
        usersApiService.getAllUsers()
            .then(({data}) => {
                setUsers(data)
            })

    }, []);
    return (
        <div>

            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {Users};