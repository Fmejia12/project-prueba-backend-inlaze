// user.dto.ts

import { IsEmail, IsOptional, IsString, Length, Matches } from 'class-validator'

export class CreateUserDto {
    @IsString({ message: 'El campo "fullName" debe ser una cadena' })
    @Matches(/^[a-zA-Z ]+$/, {
        message: 'El campo "fullName" solo debe contener letras',
    })
    fullName: string

    @IsEmail(
        {},
        { message: 'El campo "email" debe ser una dirección de correo válida' }
    )
    email: string

    @IsString({ message: 'El campo "password" debe ser una cadena' })
    @Length(6, 20, {
        message:
            'La longitud del campo "password" debe estar entre 6 y 20 caracteres',
    })
    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/,
        {
            message:
                'La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial',
        }
    )
    password: string
}
