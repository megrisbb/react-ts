import { FC } from "react";
import { IUsersInterface } from "../../interfaces/IUsersInterface";
import { Link } from "react-router-dom";

interface IUserProps {
    user: IUsersInterface;
}

const User: FC<IUserProps> = ({ user }) => {
    const { id, name, username, email, phone, website } = user;
    return (
        <div>
            <ul>
                <li>Id: {id}</li>
                <li>Name: {name}</li>
                <li>Username: {username}</li>
                <li>Email: {email}</li>
                <li>Phone: {phone}</li>
                <li>Website: {website}</li>
            </ul>
            <Link to={`/users/${id}`}>
                <button>posts of user</button>
            </Link>
            <hr />
        </div>
    );
};

export { User };
