import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      // useFactory: (configService: ConfigService) => ({
      //   type: 'mysql',
      //   host: 'localhost',
      //   port: 3306,
      //   username: 'root',
      //   password: 'Conan1@3',
      //   database: 'demo_app_db',
      //   autoLoadEntities: true,
      //   synchronize: true, // Use only in development
      // }),
      // inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
