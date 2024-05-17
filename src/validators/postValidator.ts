import Joi from "joi";

export const postValidator = Joi.object({
    title: Joi
        .string()
        .required()
        .messages({
            "string.base": "Title must be a string",
            "string.empty": "Title is required",
            "any.required": "Title is required"
        }),
    body: Joi
        .string()
        .required()
        .messages({
            "string.base": "Body must be a string",
            "string.empty": "Body is required",
            "any.required": "Body is required"
        }),
    userId: Joi
        .number()
        .integer()
        .positive()
        .required()
        .messages({
            "number.base": "User ID must be a number",
            "number.integer": "User ID must be an integer",
            "number.positive": "User ID must be a positive number",
            "any.required": "User ID is required"
        })
});
