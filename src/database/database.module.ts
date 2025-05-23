import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.getOrThrow('MYSQL_HOST'),
        port: 3306,
        username: 'admin',
        password: 'Conan12#456',
        database: 'db_demo_app',
        autoLoadEntities: true,
        synchronize: false, // Use only in development
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
