import {body} from 'express-validator'

export const registerValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Длина пароля должна быть не менее 5 символов').isLength({ min: 5 }),
  body('fullName', 'Укажите имя').isLength( { min: 3 }),
  // optional - необязательный параметр
  body('avatarUrl', 'Неверная ссылка на аватар').optional().isURL(),
]