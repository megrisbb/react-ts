import {FC, useEffect, useState} from "react";

import {IPostProps} from "../../interfaces/IPostProps";
import {postApiService} from "../../services/axiosService";

import {Post} from "../Post/Post";

const Posts: FC = () => {

    const [posts, setPosts] = useState<IPostProps[]>([])

    useEffect(() => {
        postApiService.getAllPosts()
            .then(({data}) => {
                setPosts(data)
            })
    }, []);
    return (
        <div>
            {
                posts.map((post) => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export {Posts};