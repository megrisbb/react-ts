import { FC } from "react";
import { IPostsInterface } from "../../interfaces/IPostsInterface";
import { Post } from "../Post/Post";

interface IPostsProps {
    posts: IPostsInterface[];
}

const Posts: FC<IPostsProps> = ({ posts }) => {
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post} />)}
        </div>
    );
};

export { Posts };
