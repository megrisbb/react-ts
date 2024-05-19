import {FC, useState} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {IPostProps} from "../../interfaces/IPostProps";
import {sendPost} from "../../services/axiosService";
import {formValidators} from "../../validators/formValidators";

const Forms: FC = () => {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<IPostProps>({
        mode: "all",
        resolver: joiResolver(formValidators)
    });

    const [post, setPost] = useState<IPostProps | null>(null);

    const savePost = (data: IPostProps) => {
        sendPost(data)
            .then(response => {
                console.log(response);
                setPost(response.data);
            })
            .catch(error => {
                console.error('There was an error saving the post!', error);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(savePost)}>
                <h2>Title</h2>
                <input type="text" {...register('title')} placeholder="Title"/>
                {errors.title && <p>{errors.title.message}</p>}
                <br/>
                <h2>Body</h2>
                <input type="text" {...register('body')} placeholder="Body"/>
                {errors.body && <p>{errors.body.message}</p>}
                <br/>
                <h2>User id</h2>
                <input type="number" {...register('userId')} placeholder="4"/>
                {errors.userId && <p>{errors.userId.message}</p>}
                <br/>
                <button type="submit" disabled={!isValid}>Submit</button>
            </form>
            {post && (
                <div>
                    <h3>Post Saved:</h3>
                    <p>Title: {post.title}</p>
                    <p>Body: {post.body}</p>
                    <p>UserId: {post.userId}</p>
                </div>
            )}
        </div>
    );
};

export {Forms};
