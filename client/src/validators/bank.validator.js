import Joi from 'joi';

export const BankValidator = Joi.object({
    bankName: Joi.string().regex(/^[a-zA-Z\s]+$/).required().messages({
        'string.empty': 'Поле не може бути пустим',
        'string.pattern.base': 'Тільки букви мин 1 макс 20',
    }),
    interestRate: Joi.number().min(1).max(100).messages({
        'number.base': 'Відсоткова ставка ( % ) має бути від 1 до 100',
        'number.min': 'Відсоткова ставка має бути більше або рівне 1',
        'number.max': 'Відсоткова ставка має бути не більше 100',
    }),
    maximumLoan: Joi.number().min(100).max(10000000).messages({
        'number.base': 'Максимальний кредит має бути від 100 до 10000000',
        'number.min': 'Максимальний кредит має бути більший або рівний 100',
        'number.max': 'Максимальний кредит має бути не більший 10000000',
    }),
    minimumDownPayment: Joi.number().min(1).max(100).messages({
        'number.base': 'Мінімальний авансовий внесок (%) має бути від 1 до 100',
        'number.min': 'Мінімальний авансовий внесок має бути більший або рівний 1 (%)',
        'number.max': 'Мінімальний авансовий внесок має бути не більше 100 (%)',
    }),
    loanTerm: Joi.number().min(12).max(240).messages({
        'number.base': 'Термін позики (міс) має бути від 12 до 84',
        'number.min': 'Термін позики має бути більший або рівний 12 (міс)',
        'number.max': 'Термін позики має бути не більший 84 (міс)',
    }),
})
