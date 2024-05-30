import { FC } from "react";
import { ICommentsInterface } from "../../interfaces/ICommentsInterface";

interface ICommentProps {
    comment: ICommentsInterface;
}

const CommentComponent: FC<ICommentProps> = ({ comment }) => {
    const { postId, id, name, email, body } = comment;
    return (
        <div>
            <ul>
                <li>Post id: {postId}</li>
                <li>Id: {id}</li>
                <li>Name: {name}</li>
                <li>Email: {email}</li>
                <li>Body: {body}</li>
            </ul>
            <hr/>
        </div>
    );
};

export { CommentComponent };
