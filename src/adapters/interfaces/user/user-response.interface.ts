import { UserIn } from './user.interface'

export interface UserResponseIn {
    status: string
    code: number
    message: string
    data?: UserIn
}
