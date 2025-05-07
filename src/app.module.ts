import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
// import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // ConfigModule.forRoot({ isGlobal: true }),
    // UserModule,
    // DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
