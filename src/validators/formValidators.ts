import Joi from 'joi';

const formValidators = Joi.object({
    userId: Joi.number().integer().min(1).max(10).required()
        .messages({
            'number.min': 'UserId не може бути менше 1',
            'number.max': 'UserId не може бути більше 10'
        }),
    title: Joi.string().pattern(/^[A-Za-z\s]+$/).required()
        .messages({
            'string.base': 'Title повинно бути рядком',
            'string.pattern.base': 'Title не повинно містити чисел'
        }),
    body: Joi.string().pattern(/^[^\d]*$/).required()
        .messages({
            'string.base': 'Body повинно бути рядком',
            'string.pattern.base': 'Body не повинно містити чисел'
        })
});

export { formValidators };
