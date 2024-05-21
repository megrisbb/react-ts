import {FC} from "react";

import {IPostProps} from "../../interfaces/IPostProps";

interface IProps {
    post: IPostProps
}

const Post:FC<IProps> = ({post}) => {
    return (
        <div>
            <div>{post.userId}</div>
            <div>{post.id}</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
        </div>
    );
};

export {Post};