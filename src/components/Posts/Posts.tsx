import {FC} from "react";
import {IPosts} from "../../interfaces/IPosts";
import {Post} from "../Post/Post";

interface IPostsProps {
    posts: IPosts[]
}

const Posts:FC<IPostsProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map((post) => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export {Posts};