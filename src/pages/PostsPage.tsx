import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IPostsInterface } from "../interfaces/IPostsInterface";
import { postsApiService } from "../services/axiosService";
import { Posts } from "../components/Posts/Posts";

const PostsPage = () => {
    const { id } = useParams<{ id: string }>();
    const [posts, setPosts] = useState<IPostsInterface[]>([]);

    useEffect(() => {
        if (id) {
            postsApiService.getPostsOfUser(Number(id))
                .then(value => setPosts(value.data))
                .catch(error => console.error('Error fetching posts of user:', error));
        } else {
            postsApiService.getAllPosts()
                .then(value => setPosts(value.data))
                .catch(error => console.error('Error fetching all posts:', error));
        }
    }, [id]);

    return (
        <div>
            <Posts posts={posts} />
        </div>
    );
};

export { PostsPage };
