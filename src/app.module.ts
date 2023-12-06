import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DATABASE_PROVIDER } from './infraestructure/database/database.provaider';
import environment from './adapters/config/environment.config'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './aplication/modules/user.module';

@Module({
  imports: [
        DATABASE_PROVIDER,
        ConfigModule.forRoot({
            isGlobal: true,
            load: [environment],
        }),
        UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
