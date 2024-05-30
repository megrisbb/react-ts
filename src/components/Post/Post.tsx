import { FC } from "react";
import { IPostsInterface } from "../../interfaces/IPostsInterface";
import { Link } from "react-router-dom";

interface IPostProps {
    post: IPostsInterface;
}

const Post: FC<IPostProps> = ({ post }) => {
    const { userId, id, title, body } = post;
    return (
        <div>
            <ul>
                <li>User id: {userId}</li>
                <li>Id: {id}</li>
                <li>Title: {title}</li>
                <li>Body: {body}</li>
            </ul>
            <Link to={`/posts/${id}`}>
                <button>comments of post</button>
            </Link>
            <br />
        </div>
    );
};

export { Post };
