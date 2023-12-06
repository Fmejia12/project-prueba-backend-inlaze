import { Body, Controller, Post, Res } from "@nestjs/common";
import { CreateUserDto } from "../dtos/user/create-user.dto";
import { UserService } from "src/aplication/services/user.service";

@Controller('api/users')
export class UserController {

    constructor(private readonly userService: UserService) {}
    
    @Post()
    async create(@Body() createUserDto: CreateUserDto, @Res() res) {
        const response = await this.userService.create(createUserDto)
        return res.status(response.code).json(response)
    }

}