import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { postValidator } from "../../validators/postValidator";
import { createPost } from "../../services/axiosService";
import { IFormProps } from "../../interfaces/IFormProps";

const Forms = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormProps>({
        mode: "all",
        resolver: joiResolver(postValidator)
    });
    const [post, setPost] = useState<IFormProps | null>(null);

    const saveForm = async (data: IFormProps) => {
        try {
            const postData = await createPost(data);
            setPost(postData);
        } catch (error) {
            console.error("Error creating post:", error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(saveForm)}>
                <div>
                    <input type="text" {...register('title')} placeholder="Title" />
                    {errors.title && <p>{errors.title.message}</p>}
                </div>
                <div>
                    <input type="text" {...register('body')} placeholder="Body" />
                    {errors.body && <p>{errors.body.message}</p>}
                </div>
                <div>
                    <input type="text" {...register('userId')} placeholder="User Id" />
                    {errors.userId && <p>{errors.userId.message}</p>}
                </div>
                <button type="submit">Save</button>
            </form>

            {post && (
                <div>
                    <h2>Saved Post</h2>
                    <p>Title: {post.title}</p>
                    <p>Body: {post.body}</p>
                    <p>User id: {post.userId}</p>
                </div>
            )}
        </div>
    );
};

export { Forms };
