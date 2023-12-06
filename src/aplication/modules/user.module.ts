import { Module } from '@nestjs/common'
import { UserController } from 'src/adapters/controllers/user.controller';
import { UserService } from '../services/user.service';
import { UserRepository } from 'src/infraestructure/database/repositories/user.repository';


@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService, UserRepository],
    exports: [UserService, UserRepository],
})
export class UserModule {}
