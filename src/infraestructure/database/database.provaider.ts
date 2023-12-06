import { ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './entities/user.entity'

export const DATABASE_PROVIDER = TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    useFactory: (config: ConfigService) => ({
        type: config.get<string>('db_type') as 'mysql',
        host: config.get<string>('db_host'),
        port: config.get<number>('db_port'),
        username: config.get<string>('db_username'),
        password: config.get<string>('db_password'),
        database: config.get<string>('db_database'),
        entities: [User],
        synchronize: true,
        softDelete: true,
        logging: false,
        logger: 'advanced-console',
    }),
})
