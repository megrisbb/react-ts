import Joi from "joi";

export const postValidator = Joi.object({
    title: Joi
        .string()
        .pattern(/^[a-z0-9_-]+$/)
        .required()
        .messages({
            "string.pattern.base": "only",
            "string.required.base": "title is required"
        })
})