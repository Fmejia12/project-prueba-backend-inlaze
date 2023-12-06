import { Injectable } from "@nestjs/common"
import { CreateUserDto } from "src/adapters/dtos/user/create-user.dto"
import { UserResponseIn } from "src/adapters/interfaces/user/user-response.interface"
import { UserWhereIn } from "src/adapters/interfaces/user/user-where.interface"
import { hashPassword } from "src/domain/shared/Utils"
import { User } from "src/infraestructure/database/entities/user.entity"
import { UserRepository } from "src/infraestructure/database/repositories/user.repository"


@Injectable()
export class UserService {
    constructor(
        private readonly _userRepository: UserRepository
    ) {}
    async create(createUserDto: CreateUserDto): Promise<UserResponseIn> {
        const EXISTS_USER = await this.findByWhereExits({
            email: createUserDto.email,
        })
        if (!EXISTS_USER) {
            createUserDto.password = await hashPassword(createUserDto.password)
            const NEW_USER = await this._userRepository.save(createUserDto)
            return {
                code: 200,
                status: 'success',
                message: 'Usuario registrado con exito',
                data: NEW_USER,
            }
        }
        return {
            code: 401,
            status: 'error',
            message: 'El correo ya existe en nuestros registros',
            data: null,
        }
    }

    async findByWhere(where: UserWhereIn): Promise<User> {
        this._userRepository.exist({ where })
        return await this._userRepository.findOne({ where })
    }

    async findByWhereExits(where: UserWhereIn): Promise<boolean> {
        return await this._userRepository.exist({ where })
    }
}
