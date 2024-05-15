import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {IFormProps} from "../../interfaces/IFormProps";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../../validators/postValidator";
import {axiosInstance} from "../../services/axiosService";

const FormComponent = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<IFormProps>({ mode: "all", resolver: joiResolver(postValidator) });

    const saveForm = (formData: IFormProps) => {
        axiosInstance.post('/', formData)
            .then(response => {
                console.log("Post added:", response.data);
                setIsFormSubmitted(true);
            })
            .catch(error => {
                console.error("Error adding post:", error);
            });
    };

    return (

        <div onSubmit={handleSubmit (saveForm)} >
            <form>
                <input type="text" {...register('title')}/>
                <br/>
                <input type="text" {...register('body')}/>
                <br/>
                <button>Save</button>
            </form>
        </div>
    );
};

export {FormComponent};