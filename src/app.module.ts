import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
// import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';

@Module({
  imports: [
    // ConfigModule.forRoot({ isGlobal: true }),
    // UserModule,
    // DatabaseModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
