import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ICommentsInterface } from "../interfaces/ICommentsInterface";
import { commentsApiService } from "../services/axiosService";
import { Comments } from "../components/Comments/Comments";

const CommentsPage = () => {
    const { id } = useParams<{ id: string }>();
    const [comments, setComments] = useState<ICommentsInterface[]>([]);

    useEffect(() => {
        if (id) {
            commentsApiService.getCommentsOfPosts(id)
                .then(value => setComments(value.data))
                .catch(error => console.error('Error fetching comments of post:', error));
        } else {
            commentsApiService.getAllComments()
                .then(({ data }) => setComments(data))
                .catch(error => console.error('Error fetching all comments:', error));
        }
    }, [id]);

    return (
        <div>
            <Comments comments={comments} />
        </div>
    );
};

export { CommentsPage };
