import {FC} from "react";

import {ICommentProps} from "../../interfaces/ICommentProps";


interface IProps {
    comment: ICommentProps
}

const CommentComponent:FC<IProps> = ({comment}) => {
    const {postId, id, name, email, body} = comment

    return (
        <div>
            <div>{postId}</div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{email}</div>
            <div>{body}</div>
        </div>
    );
};

export {CommentComponent};