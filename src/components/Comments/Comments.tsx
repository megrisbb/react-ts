import {useEffect, useState} from "react";

import {ICommentProps} from "../../interfaces/ICommentProps";
import {commentApiService} from "../../services/axiosService";

import {CommentComponent} from "../CommentComponent/CommentComponent";

const Comments = () => {

    const [comments, setComments] = useState<ICommentProps[]>([])

    useEffect(() => {
        commentApiService.getAllComments()
            .then(({data}) => {
                setComments(data)
            })
    }, []);

    return (
        <div>
            {comments.map((comment) => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};