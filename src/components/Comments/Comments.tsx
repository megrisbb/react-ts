import { FC } from "react";
import { ICommentsInterface } from "../../interfaces/ICommentsInterface";
import { CommentComponent } from "../CommentComponent/CommentComponent";

interface ICommentsProps {
    comments: ICommentsInterface[];
}

const Comments: FC<ICommentsProps> = ({ comments }) => {
    return (
        <div>
            {comments.map(comment => <CommentComponent key={comment.id} comment={comment} />)}
        </div>
    );
};

export { Comments };
