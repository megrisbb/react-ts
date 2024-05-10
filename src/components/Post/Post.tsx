import {IPosts} from "../../interfaces/IPosts";
import {FC} from "react";


interface IPostProps {
    post: IPosts
}

const Post: FC<IPostProps> = ({post}) => {
    return (
        <div>
            <div>{post.id}. {post.title}</div>
            <div> <b>Body:</b> {post.body}</div>
            <hr/>
        </div>
    );
};

export {Post};